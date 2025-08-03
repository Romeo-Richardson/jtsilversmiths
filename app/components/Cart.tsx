"use client"

import React, { useEffect, useState } from 'react'
import cartImage from "../assets/cart-filled.png"
import Image from 'next/image'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useMainStore } from '../utils/global'
import close from "../assets/cancel.png"

const Cart = (): React.ReactNode => {

    const { cart, removeFromCart } = useMainStore()

    const [total, setTotal] = useState<number>(0)

    const getCheckoutPage = async () => {
        const { data } = await axios.post("https://www.jtsilversmiths.com/api/stripe-checkout", { items: cart })
        if (data) {
            console.log(data.details.url)
            redirect(data.details.url)
        } else {
            console.log("Failed")
        }
    }

    useEffect(() => {
        if (cart.length > 0) {
            const prices = cart.map((item) => {
                return item.price
            })
            setTotal(prices.reduce((a, b) => {
                return a + b
            }))
        } else if (cart.length === 0) {
            setTotal(0)
        }
    }, [cart])

    return (
        <div className="drawer drawer-end indicator">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}

                <span className="indicator-item badge badge-secondary text-xs p-[4px] mt-[7px] rounded-full mr-[7px]">{` ${cart.length !== 0 ? cart.length : 0}`}</span>
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary z-10">
                    <Image src={cartImage} height={20} width={20} className='min-h-[20px] min-w-[20px]' alt="Cart button"></Image>
                </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <h1 className='text-2xl mb-4'>{`Cart(${cart.length !== 0 ? cart.length : 0})`}</h1>
                    {
                        cart.map((item, key) => {
                            return <li key={key}>
                                <a className='flex items-center gap-2'>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-black'>
                                            {`${item.name}($${item.price}.00) x${item.quantity}`}
                                        </p>
                                        <p>
                                            {item.description && item.description}
                                        </p>
                                    </div>

                                    <Image onClick={() => { removeFromCart(item) }} alt='delete item' src={close} className='min-h-4 min-w-4 max-h-8 max-w-8 scale-50'></Image>
                                </a>

                            </li>
                        })
                    }
                    <p className='mt-4'>{`Total($${total}.00)`}</p>
                    <button className='btn btn-primary mt-6' disabled onClick={getCheckoutPage}>Checkout</button>
                </ul>
            </div>
        </div>
    )
}

export default Cart