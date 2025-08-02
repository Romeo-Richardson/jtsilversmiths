import React from 'react'
import Image, { StaticImageData } from 'next/image'
import AddToCart from './AddToCart'


const DaisyItemCard = ({ image, title, price }: { image: string, title: string, price: number }): React.ReactNode => {

    const details = "A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts."
    return (
        <div className="card text-primary-content bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='w-full h-[300px] flex items-center justify-center' style={{ maxInlineSize: "100%" }} src={image} alt='example image'></img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className='text-secondary text-sm'>{`$${price}.00`}</p>
                <div className="card-actions ">
                    <div className="badge badge-neutral">Style 1</div>
                    <div className="badge badge-outline">Style 2</div>
                    <div className="badge badge-outline">Style 3</div>
                </div>
                <p>{details}</p>
                <div className='flex items-center justify-end'>
                    <AddToCart name={title} price={price} ></AddToCart>
                </div>
            </div>
        </div >

    )
}

export default DaisyItemCard