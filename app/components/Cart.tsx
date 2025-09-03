"use client"

import React, { useEffect, useState } from 'react'
import cartImage from "../assets/cart-filled.png"
import Image from 'next/image'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useMainStore } from '../utils/global'
import close from "../assets/cancel.png"

const Cart = (): React.ReactNode => {

    const { cart, removeFromCart, setCartQuantity, cartQuantity, isExpressShipping, setIsExpressShipping } = useMainStore()

    const [total, setTotal] = useState<number>(0)

    const getCheckoutPage = async () => {
        const { data } = await axios.post("http://localhost:3000/api/stripe-checkout", { items: cart, total, isExpressShipping })
        if (data) {
            console.log(data.details.url)
            redirect(data.details.url)
        } else {
            console.log("Failed")
        }
    }

    useEffect(() => {

        if (cart.length > 0) {
            const totalQuantity = cart.map((item) => item.quantity).reduce((a, b) => a + b)
            setCartQuantity(totalQuantity)
            const prices = cart.map((item) => {
                if (item.style?.includes("$35")) {
                    return item.price + 35 * item.quantity
                } else if (item.style?.includes("$60")) {
                    return item.price + 60 * item.quantity
                } else if (item.style?.includes("$50")) {
                    return item.price + 50 * item.quantity
                } else {
                    return item.price * item.quantity
                }
            })
            if (totalQuantity > 4 && totalQuantity < 10) {
                setTotal(prices.reduce((a, b) => {
                    return a + b
                }) - (prices.reduce((a, b) => {
                    return a + b
                })) * .05)
            } else if (totalQuantity > 9) {

                setTotal(prices.reduce((a, b) => {
                    return a + b
                }) - (prices.reduce((a, b) => {
                    return a + b
                })) * .10)
            } else {
                setTotal(prices.reduce((a, b) => {
                    return a + b
                }))
            }
        } else if (cart.length === 0) {
            setTotal(0)
        }
    }, [cart])

    return (
        <div className="drawer drawer-end indicator">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <span className="indicator-item badge badge-secondary text-xs p-[4px] mt-[7px] rounded-full mr-[7px]">{`${cartQuantity}`}</span>
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary z-10">
                    <Image src={cartImage} height={20} width={20} className='min-h-[20px] min-w-[20px]' alt="Cart button"></Image>
                </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <h1 className='text-2xl mb-4'>{`Cart(${cartQuantity})`}</h1>
                    {
                        cart.map((item, key) => {
                            return <li key={key}>
                                <a className='flex items-center gap-2'>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-black'>
                                            {`${item.name}($${item.price}) x${item.quantity}`}
                                        </p>
                                        <p>
                                            {`Name: ${item.name} Angle: ${item.angle}, Position of braces: ${item.bracePosition}, Copper: ${item.copper},Finish: ${item.finish}, Height: ${item.height}, Bit Movement: ${item.movement}, Style: ${item.style}, ${item.width}, ${item.purchaseOption},  Quantity: ${item.quantity}`}
                                        </p>
                                    </div>
                                    <Image onClick={() => { removeFromCart(item) }} alt='delete item' src={close} className='min-h-4 min-w-4 max-h-8 max-w-8 scale-50'></Image>
                                </a>
                            </li>
                        })
                    }
                    <p className='mt-4 mb-4'>{`Total($${total})`}</p>
                    {
                        cartQuantity > 0 &&
                        <>
                            <span className='flex items-center gap-1'>
                                <input onChange={setIsExpressShipping} type="checkbox" className="checkbox checkbox-xs" />
                                <p>{"Express Delivery (2-3 day delivery: $15 more than Standard Delivery)"}</p>
                            </span>
                            <p className='mt-4'>{"Set shipping prices apply only to orders under 2 lbs in the Continental US. For International purchases contact us (209) 492-0114."}</p>
                        </>
                    }

                    <button className='btn btn-primary mt-6' disabled={cartQuantity === 0 ? true : false} onClick={getCheckoutPage}>Checkout</button>
                </ul>
            </div>
        </div>
    )
}

export default Cart