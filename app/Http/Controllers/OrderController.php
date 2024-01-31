<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    //index
    public function index(Request $request)
    {
        //get orders paginate 10
        $orders = DB::table('orders')->paginate(10);


        return view('pages.order.index', compact('orders'));
    }

    //show
    public function show($id)
    {
        return view('orders.show');
    }

    //edit
    public function edit($id)
    {
        $order = DB::table('orders')->where('id', $id)->first();
        return view('pages.order.edit', compact('order'));
    }

    //update
    public function update(Request $request, $id)
    {
        //update status order
        $order = DB::table('orders')->where('id', $id);
        $order->update([
            'status' => $request->status,
            'shipping_resi' => $request->shipping_resi,
        ]);

        //redirect to index
        return redirect()->route('order.index');
    }
}
