<?php

namespace App\Services\Midtrans;

use Midtrans\CoreApi;

class CreateVAService extends Midtrans
{
    protected $order;

    public function __construct($order)
    {
        parent::__construct();

        $this->order = $order;
    }

    public function getVA()
    {

        $itemDetails = [];

        foreach ($this->order->orderItems as $orderItem) {
            $itemDetails[] = [
                'id' => $orderItem->product->id,
                'price' => $orderItem->product->price,
                'quantity' => $orderItem->quantity,
                'name' => $orderItem->product->name,
            ];
        }

        //add shipping cost to item details
        $itemDetails[] = [
            'id' => 'SHIPPING_COST',
            'price' => $this->order->shipping_cost,
            'quantity' => 1,
            'name' => 'SHIPPING_COST',
        ];

        $params = [
            'payment_type' => 'bank_transfer',
            'transaction_details' => [
                'order_id' => $this->order->transaction_number,
                'gross_amount' => $this->order->total_cost,
            ],
            'item_details' => $itemDetails,
            'customer_details' => [
                'first_name' => $this->order->user->name,
                'email' => $this->order->user->email
            ],
            'bank_transfer' => [
                'bank' => $this->order->payment_va_name,
            ],
        ];

        $response = CoreApi::charge($params);

        return $response;
    }
}
