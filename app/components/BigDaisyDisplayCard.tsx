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
                <p className=' max-[465px]:w-auto w-full'>Welcome to our new website, we are excited for you to be able to shop with us again. We specialize in custom manufacturing and are proud to offer you the finest handcrafted western silver show bits, spurs, snaffles, and silver accessories. We also carry horehair products, rawhide reins, leather goods and more on the way! If you need something you don't see please contact us at <strong>209-492-0114</strong> or <strong>1-877-587-4583</strong></p>
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