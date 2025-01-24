<?php
namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Helpers\CartHelper;
use App\Models\MasterPage;
use App\Models\Banner;
use App\Models\Cart;
use App\Models\Product;
// use App\Services\CartService;

use App\Models\Customer;
use App\Models\Category;

use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\Object_;
use Auth;
use Illuminate\Support\Facades\Hash;
// use App\Models\Cart;

use Illuminate\Support\Facades\Cookie;


class FrontendController extends Controller
{
     

public function add_tocart(Request $request, $productId)
{
    // Get the current cart from the cookie
    $cart = json_decode(Cookie::get('cart', '[]'), true);

    // Check if the product already exists in the cart
    $found = false;
    foreach ($cart as &$item) {
        if ($item['product_id'] == $productId) {
            // If the product is already in the cart, update the quantity
            $item['quantity'] += $request->qty;
            // Recalculate the total price based on updated quantity
            $item['price'] = $item['price_per_unit'] * $item['quantity']; // Update total price
            $found = true;
            break;
        }
    }

    // If the product is not found, add a new product to the cart
    if (!$found) {
        $product = Product::find($productId);

        $loyal_price = $product->loyal_price;
        $wholesaler_price = $product->wholesaler_price;
        $normal_price = $product->normal_price;
        // Set price based on user type
        if (Auth::guard('local')->check()) {
            $user = Auth::guard('local')->user();
            if ($user->user_type == "loyal") {
                $price = $loyal_price;
            } elseif ($user->user_type == "wholesaler") {
                $price = $wholesaler_price;
            }
            elseif ($user->user_type == "normal") {
                $price = $normal_price;
            } else {
                $price = $product->price; // Default price for normal users
            }
        } else {
            $price = $product->price; // Default price if no user is logged in
        }

        // Calculate the total price based on quantity
        $total_price = $price * $request->qty;

        $cart[] = [
            'product_id' => $productId,
            'price' => $total_price,
            'price_per_unit' => $price, // Store the price per unit for quantity-based recalculation
            'quantity' => $request->qty,
            'name' => $product->name,
            'loyal_price' => $loyal_price,
            'wholesaler_price' => $wholesaler_price,
        ];
    }

    // Store the updated cart back in the cookie (valid for 7 days)
    Cookie::queue('cart', json_encode($cart), (60 * 24 * 7));

    return redirect()->route('cart-page')->with(['message' => 'Product added to cart successfully!']);
}




    public function remove_tocart(Request $request)
    {
        // dd($request->all());
        // Retrieve cart from the cookie
        $cart = json_decode($request->cookie('cart'), true);
// dd($cart);
        // Check if the cart exists and the item ID is provided
        if ($cart && $request->has('item_id')) {
            $itemId = $request->input('item_id');

            // Remove the item using the correct key
            $cart = array_filter($cart, function ($item) use ($itemId) {
                return $item['product_id'] != $itemId; // Use 'product_id' or the correct key
            });

            // Save the updated cart back to the cookie
            Cookie::queue('cart', json_encode(array_values($cart)), 60); // Save for 60 minutes
            return redirect()->back()->with('success', 'Item removed from cart!');
        }

        return redirect()->back()->with('error', 'Item not found in cart!');
    }


public function add_cartpage()
{
    $cart = json_decode(Cookie::get('cart', '[]'), true);

    $totalSubTotal = 0;
    $shippingCost = 0;
    $tax = 0;
    $totalItems = 0;

    foreach ($cart as $item) {
        $totalSubTotal += $item['price'];
        $totalItems += $item['quantity'];
    }

    $tax = $totalSubTotal * 0.05;
    $shippingCost = 0; // Update based on your shipping logic
    $totalAmount = $totalSubTotal + $shippingCost + $tax;

    $userId = auth()->id();
    $cartItems = Cart::with('product')->where('user_id', $userId)->get();
    $categorys = Category::all();

    return view('stc_products.cart-page', compact('cartItems', 'categorys', 'totalSubTotal', 'shippingCost', 'tax', 'totalAmount', 'totalItems'));
}







}