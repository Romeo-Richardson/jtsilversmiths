import Link from 'next/link'
import React from 'react'

const BigDaisyDisplayCard = (): React.ReactNode => {
    return (
        <div className="card text-primary-content w-4/5 h-4/5 lg:card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    className='md:w-[1000px] max-[790px]:hidden md:h-[500px] w-full h-full'
                    src="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg"
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Welcome to our new website!</h2>
                <p className=' max-[465px]:w-auto w-full'>Our new website is under construction but currently running and operable. We are excited and will be adding our large inventory onto the site over time as quickly as possible. <br /> <br /> We take pride in providing quality products at an affordable price and we have not changed our prices over the past several years. However due to terrifs, a 10% increase is now necessary and is reflected in the slight price increase. For now, we will absorb the rest.  If you have any questions or inquiries, please contact us on our contact page or call us at <strong>{"(209) 492-0114"}</strong>. <br /><br />Thank you for your understanding. We value your business and look forward to serving you for many years to come.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link href={"/contact"}>Contact Us</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BigDaisyDisplayCard