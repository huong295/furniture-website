/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const CartPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://hhdserver.azurewebsites.net/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const cartItems: { productId: number; quantity: number }[] = [
        { productId: 2, quantity: 1 },
        { productId: 3, quantity: 2 },
        { productId: 4, quantity: 3 },
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl px-4 lg:px-8">
                <div className="flow-root">
                    <h2 className="text-2xl font-medium text-gray-900">Shopping Cart (count items)</h2>
                    <ul className="-my-6 mt-4 divide-y divide-gray-100">
                        {cartItems.map((item, index) => {
                            const product = products.find((p) => p.id === item.productId);
                            return (
                                <li key={index} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-100">
                                        <img src={product?.image} alt={product?.name} className="h-full w-full object-cover object-center" />
                                    </div>
                                    <div className="ml-4 flex-1 flex flex-col">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">{product?.name}</h3>

                                        </div>



                                        <div className="flex-1 flex items-end justify-between">
                                            <p className="text-sm font-medium text-gray-900">Price: ${product?.price}</p>
                                            <p className="text-sm font-medium text-gray-900">${(product?.price || 0) * item.quantity}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                                        <div className="flex items-center border border-gray-200 rounded mt-2">
                                            <button
                                                type="button"
                                                className="w-6 h-6 leading-6 text-gray-600 transition hover:opacity-75"
                                            >
                                                -
                                            </button>

                                            <input
                                                type="number"
                                                id="Quantity"
                                                value={item.quantity}
                                                className="h-6 w-10 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                            />

                                            <button
                                                type="button"
                                                className="w-6 h-6 leading-6 text-gray-600 transition hover:opacity-75"
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                    <button
                                        type="button"
                                        className="text-gray-400 hover:text-gray-500 transition ml-5"
                                    >
                                        <span className="sr-only">Remove</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>

                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">Total Cost</p>
                        <p className="text-2xl font-bold text-gray-900">$99</p>
                    </div>
                    <button className="mt-6 w-full bg-purple-600 py-3 text-sm font-bold text-white hover:bg-purple-700">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;