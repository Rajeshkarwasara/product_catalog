@extends('layouts/contentNavbarLayout')
@section('title', 'View Inquiry Details')
@section('content')

<div class="card">
    <div class="card-header justify-content-between d-flex">
        <h3>{{ __('View Inquiry Details') }}</h3>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ url('inquiry') }}">
                <i class='bx bx-list-ul'></i> List of Inquiry
            </a>
        </div>
    </div>
</div>

<section id="order-details">
    <div class="order-detail-row">
       <p>{{$data->name}}</p>
       <p>{{$data->email}}</p>
       <p>{{$data->phone}}</p>
       <p>{{$data->message}}</p>
    </div>

</section>








@endsection

