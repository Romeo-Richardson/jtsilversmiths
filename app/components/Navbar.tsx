"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cartImage from "../assets/cart-filled.png"
import userImage from "../assets/user.png"

import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Cart from './Cart'
import jtlogo from "../assets/jtlogo1.png"


const Navbar = (): React.ReactNode => {

    const navOptions: { name: string, link: string }[] = [{ name: "Home", link: "/" }, { name: "Shop", link: "/shop" }, { name: "About", link: "/about" }, { name: "Contact", link: "/contact" }]

    const { isSignedIn } = useUser()

    const { push } = useRouter()

    return (
        <div className='h-22 bg-primary text-primary-content  flex items-center justify-between px-12'>
            {/* <div className='flex items-center font-bold'>JTSilversmiths</div> */}
            <Image className='z-10 max-[700px]:hidden' src={jtlogo} height={75} width={185} alt=''></Image>

            <div className='flex items-center gap-6 max-[700px]:hidden'>
                {
                    navOptions.map((item, key) => <Link href={item.link} key={key}><button className='btn btn-primary'>{item.name}</button></Link>)
                }
            </div>
            <div className="drawer min-[701px]:hidden">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-6 w-6 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {
                            navOptions.map((item, key) => <li key={key}><Link href={item.link}>{item.name}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                {/* {
                    isSignedIn ? <UserButton></UserButton> :
                        <button className='btn btn-primary' onClick={() => { push("/sign-in") }}>
                            <Image src={userImage} height={20} width={20} alt="Cart button"></Image>
                        </button>

                } */}
                <Cart></Cart>
            </div>
        </div>
    )
}

export default Navbar