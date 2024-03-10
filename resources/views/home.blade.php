@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>


                </div>
            <router-view></router-view>
                <post-component></post-component>
            </div>
        </div>
    </div>
</div>
@endsection
