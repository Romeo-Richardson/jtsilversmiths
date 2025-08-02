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
            <Image className='z-10' src={jtlogo} height={75} width={185} alt=''></Image>
            <div className='flex items-center gap-6'>
                {
                    navOptions.map((item, key) => <Link href={item.link} key={key}><button className='btn btn-primary'>{item.name}</button></Link>)
                }
            </div>
            <div className='flex items-center gap-2'>
                {
                    isSignedIn ? <UserButton></UserButton> :
                        <button className='btn btn-primary' onClick={() => { push("/sign-in") }}>
                            <Image src={userImage} height={20} width={20} alt="Cart button"></Image>
                        </button>

                }
                <Cart></Cart>
            </div>
        </div>
    )
}

export default Navbar