import React from 'react'
import MainHeader from '../components/MainHeader'
import jtlogo from "../assets/jtlogo1.png"
import Image from 'next/image'
import Link from 'next/link'

const page = (): React.ReactNode => {
    return (
        <div className=' bg-base-200'>
            <div className='bg-neutral py-2 pl-4'>
                <h1 className='text-3xl text-white'>About</h1>
            </div>
            <div className='bg-base-200 pt-6 flex flex-col py-24 items-center justify-center'>
                <Image alt='' src={jtlogo}></Image>
                <MainHeader name='JTSilversmiths' subtext='Delivering quality since 2006' paddingT='py-2'></MainHeader>
                <div className=' bg-base-100 text-primary-content w-4/5 h-auto py-8 flex justify-center rounded shadow-sm shadow-gray-400'>
                    <p className='w-3/5 max-[400px]:w-4/5 max-[400px]:text-sm wrap-normal'>We proudly present to the world a <strong>fine collection of custom</strong> hand-made, hand-engraved western silver show horse bits, spurs, and snaffles. <strong>These are works of art</strong> crafted in steel and silver by skilled and talented craftsmen and have circled the globe in thousands of shows/expositions dazzling the most demanding buyers. <br></br><br></br>We take pride in providing quality work, prompt and courteous service and <strong>highly appreciate the business of our many new and old wonderful loyal customers who keep coming back</strong> because they know <strong>quality workmanship</strong> when they see it and enjoy dealing with our honest, trustworthy, and professional personnel. <br></br><br></br>Prices are subject to change without prior notice when price of silver goes up. If you like, feel free to call us prior to placing an order to confirm the price. <br></br><br></br><strong>We do ship to many countries</strong> and <strong>we do accept pay-pal payments</strong> so please <strong className='text-primary'><Link href={"/contact"}>contact us</Link></strong> if you want to <strong>place an order paying with pay-pal</strong> or if you have any questions or special requests. <br></br><br></br>We look forward to working with all of you - new and old friends. <br></br><br></br><strong>A very special thanks to those of you who call or e-mail us your wonderful stories of how our beautiful and well crafted silver products won you a prize or made a special loved one very happy.</strong></p>
                </div>
            </div>
        </div>
    )
}

export default page