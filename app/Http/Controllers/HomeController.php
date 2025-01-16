<?php

namespace App\Http\Controllers;
use App\Models\Enquiry;
use App\Mail\EnquiryMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Slider;
use App\Models\Brands;
use App\Models\Product;
use App\Models\MasterPage;
use App\Models\ListingImages;
use App\Models\SubCategory;
use App\Models\Category;
use App\Models\Cart;



// use App\Models\Enquiry;
use App\Http\Controllers\EnquiryController;


use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */

   public function index()
{
    $sliders = Slider::limit(12)->get();
    $brands = Brands::all();
    $products = Product::where('new_products', 'yes')
    ->orWhere('best_seller', 'yes')
    ->orderBy('created_at', 'desc')
    ->leftJoin('category', 'products.category_id', '=', 'category.id')
    ->select('products.*', 'category.name as category_name')
    ->limit(4)
    ->get();

    $categorys=Category::all();
    return view('stc_products.index', compact('sliders', 'brands','products','categorys'));
}

public function productdetails($id)
{
    $productdetails = DB::table('products') // Use query builder
        ->leftJoin('category', 'products.category_id', '=', 'category.id') // Join with category table
        ->select('products.*', 'category.name as category_name') // Select product fields and category name
         ->leftJoin('brands','products.brands', '=','brands.id')
         ->select('products.*','brands.name as brands_name')
        ->where('products.id', $id) // Filter by product ID
        ->first(); // Get the first matching record

    if (!$productdetails) {
        abort(404); // Return a 404 error if the product is not found
    }
 $productImages = DB::table('product_listing_images')
        ->where('product_id', $id)
        ->get(); // Get all images related to the product

 $categorys=Category::all();
  // $productss = Product::limit(4)->get();
 $productss = Product::orderBy('created_at', 'desc')->limit(4)->get();


    return view('stc_products.productdetails', compact('productdetails', 'productImages','categorys','productss')); // Pass product details and images to the view
}


public function products(Request $request)
{
    $query = $request->query('query'); // Search query
    $selectedCategories = $request->input('categories', []);
    $selectedBrands = $request->input('brands', []);

    // Define the base query for products
    $productsQuery = DB::table('products')
        ->join('category', 'products.category_id', '=', 'category.id')
        ->join('brands', 'products.brands', '=', 'brands.id')
        ->select('products.*', 'category.name as category_name', 'brands.name as brand_name');

    // Apply search query if provided
    if (!empty($query)) {
        $productsQuery->where('products.name', 'like', "%{$query}%");
    }

    // Apply category filters if selected
    if (!empty($selectedCategories)) {
        $productsQuery->whereIn('products.category_id', $selectedCategories);
    }

    // Apply brand filters if selected
    if (!empty($selectedBrands)) {
        $productsQuery->whereIn('products.brands', $selectedBrands);
    }

    // Get the filtered products using simple pagination
    $allProducts = $productsQuery->Paginate(3);  // Change paginate to simplePaginate

    // Get all brands and categories for filters
    $brands = Brands::all();
    $categorys = Category::all();

    // Return the view with data
    return view('stc_products.product-list', compact(
        'allProducts',
        'brands',
        'categorys',
        'selectedCategories',
        'selectedBrands',
        'query'
    ));
}
public function getproducts($id,Request $request)
{
    $query = $request->query('query'); // Search query
    $selectedCategories = $request->input('categories', []);
    $selectedBrands = $request->input('brands', []);

    // Define the base query for products
    $productsQuery = DB::table('products')
        ->join('category', 'products.category_id', '=', 'category.id')
        ->join('brands', 'products.brands', '=', 'brands.id')
        ->select('products.*', 'category.name as category_name', 'brands.name as brand_name');

    // Apply search query if provided
    if (!empty($query)) {
        $productsQuery->where('products.name', 'like', "%{$query}%");
    }

    // Apply category filters if selected
    if (!empty($selectedCategories)) {
        $productsQuery->whereIn('products.category_id', $selectedCategories);
    }

    // Apply brand filters if selected
    if (!empty($selectedBrands)) {
        $productsQuery->whereIn('products.brands', $selectedBrands);
    }

    // Get the filtered products using simple pagination
    $allProducts = $productsQuery->where('products.category_id', $id)->Paginate(3);  // Change paginate to simplePaginate

    // Get all brands and categories for filters
    $brands = Brands::all();
    $categorys = Category::all();

    // Return the view with data
    return view('stc_products.product-list', compact(
        'allProducts',
        'brands',
        'categorys',
        'selectedCategories',
        'selectedBrands',
        'query'
    ));
}


public function aboutus(){

$aboutus=MasterPage::where('title','=','About Us')->get();
 $categorys = Category::all();

return view('stc_products.about-us',compact('aboutus','categorys'));
}

public function contactus(){



 $categorys = Category::all();

return view('stc_products.contact_us',compact('categorys'));
}

public function enquirenow(){
 $categorys = Category::all();

    return view('stc_products/enquire_now',compact('categorys'));
}

   
    
    //get data from database for dat table --------------------------------------------------------- End

    //Load Datatable or list view file  --------------------------------------------------------- Start
      public function enquiresubmit(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|numeric|max:11',
            'message' => 'required|string',
        ]);

        // Save the enquiry in the database
        $enquiry = Enquiry::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'message' => $request->input('message'),
        ]);

        // Email content
        $emailContent = "
            <h1>New Enquiry Received</h1>
            <p><strong>Name:</strong> {$enquiry->name}</p>
            <p><strong>Email:</strong> {$enquiry->email}</p>
            <p><strong>Phone:</strong> {$enquiry->phone}</p>
            <p><strong>Message:</strong></p>
            <p>{$enquiry->message}</p>
        ";

        $subject = "New Enquiry from {$enquiry->name}";

        // Send the email
        Mail::send([], [], function ($message) use ($emailContent, $subject) {
            $recipient = 'recipient@example.com'; // Replace with the recipient's email
            $message->to($recipient)
                    ->subject($subject)
                    ->setBody($emailContent, 'text/html');
        });

        // Return success response
        return back()->with('success', 'تم إرسال الاستفسار بنجاح!');
    }


    /**
     * Show the form for creating a new resource.
     */

}
