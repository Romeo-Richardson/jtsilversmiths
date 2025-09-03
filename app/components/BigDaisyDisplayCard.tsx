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
                <p className=' max-[465px]:w-auto w-full'>Our new website is under construction but currently running and operable. We will be adding our large inventory onto the site over time. Keep in mind that due to terrifs there is a 10% mark up to cover some of the 30% terrif on our inventory. For more questions or inquiries contact us on our contact page or call us at <strong>{"(209) 492-0114"}</strong>.</p>
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