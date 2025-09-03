import React from 'react'
import Image, { StaticImageData } from 'next/image'
import AddToCart from './AddToCart'


const BestSellerCard = ({ image, title, price, asIsFinish, asIsMouthpieceStyle, asIsBitEnds, asIsBitMovement, asIsTongueRelief, asIsSizeCheek }: { image: string, title: string, price: number, description?: string, asIsSizeCheek?: string, asIsTongueRelief?: string, asIsBitEnds?: string, asIsBitMovement?: string, asIsMouthpieceStyle?: string, asIsFinish?: string }): React.ReactNode => {

    const details = "A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts."
    return (
        <div className="card text-primary-content h-[90%] bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='w-full h-[300px] flex items-center justify-center' style={{ maxInlineSize: "100%" }} src={image} alt='example image'></img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className='text-secondary text-sm'>{`$${price}.00`}</p>
                {/* <div className="card-actions ">
                    <div className="badge badge-neutral">Style 1</div>
                    <div className="badge badge-outline">Style 2</div>
                    <div className="badge badge-outline">Style 3</div>
                </div> */}
                <p className='mb-1'>
                    <strong>Western Sterling Silver Show Horse Bit</strong>
                    <br></br>
                    <br></br>
                    <strong>Size cheek:</strong> {asIsSizeCheek}
                    <br></br>
                    <br></br>
                    <strong>Pictured with</strong>
                    <br></br>
                    <br></br>
                    <strong>Finish:</strong> {asIsFinish}
                    <br />
                    <br />
                    <strong>Mouthpiece style:</strong> {asIsMouthpieceStyle}
                    <br />
                    <br />
                    <strong>Tongue Relief:</strong> {asIsTongueRelief}
                    <br />
                    <br />
                    <strong>Bit movement:</strong> {asIsBitMovement}
                    <br />
                    <br />
                    <strong>Bit ends:</strong> {asIsBitEnds}
                    <br />
                    <br />
                    <strong>Purchase as pictured or customize in the drop menu</strong>
                </p>
                <div className='flex items-center justify-end'>
                    <AddToCart name={title} price={price} ></AddToCart>
                </div>
            </div>
        </div >

    )
}

export default BestSellerCard