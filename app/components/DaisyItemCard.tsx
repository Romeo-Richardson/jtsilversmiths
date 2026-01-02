import React from 'react'
import Image, { StaticImageData } from 'next/image'
import AddToCart from './AddToCart'


const DaisyItemCard = ({ image, title, categories, price, asIsFinish, asIsMouthpieceAngle, asIsCopperHoodAndCricket, asIsHeight, asIsTheme, asIsMouthpieceStyle, asIsBitEnds, asIsBitMovement, asIsTongueRelief, asIsSizeCheek, asIsStyle, asIsSize, asIsColor, asIsMaterial }: { image: string, categories: string[], asIsColor: string, asIsSize: string, asIsMaterial: string, title: string, price: number, asIsMouthpieceAngle?: string, asIsStyle?: string, description?: string, asIsSizeCheek?: string, asIsTongueRelief?: string, asIsBitEnds?: string, asIsBitMovement?: string, asIsMouthpieceStyle?: string, asIsFinish?: string, asIsTheme?: string, asIsCopperHoodAndCricket?: string, asIsHeight?: string }): React.ReactNode => {

    return (
        <div className="card text-primary-content bg-base-100 w-96 max-[420px]:w-72 max-[320px]:w-64  shadow-sm">
            <figure>
                <img className='w-full h-[300px] flex items-center justify-center' src={image} alt='example image'></img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className='text-secondary text-sm'>{`$${price}`}</p>
                {/* <div className="card-actions ">
                    <div className="badge badge-neutral">Style 1</div>
                    <div className="badge badge-outline">Style 2</div>
                    <div className="badge badge-outline">Style 3</div>
                </div> */}
                <div className={`mb-1 flex gap-1 flex-col ${title.includes("B-") ? "" : "h-auto"}`}>

                    {
                        title.includes("B-") ? <>
                            <p>
                                <strong>Western Sterling Silver Show Horse Bit</strong>
                            </p>
                            {asIsSizeCheek && <p>
                                <strong>Size cheek:</strong> {asIsSizeCheek}
                            </p>}
                            {asIsTheme && <p>
                                <strong>Theme:</strong> {asIsTheme}
                            </p>}
                            {asIsStyle && <p className='mb-3'>
                                <strong>Style:</strong> {asIsStyle}
                            </p>}
                        </> : <></>
                    }
                    <span className={`flex gap-1 flex-col ${title.includes("B-") ? "" : "mt-[-5px]"}`}>
                        <p>
                            <strong>Pictured with</strong>
                        </p>
                        {asIsFinish && <p>
                            <strong>Finish:</strong> {asIsFinish}

                        </p>}

                        {asIsMouthpieceStyle && <div>
                            <strong>Mouthpiece style:</strong>
                            {
                                asIsMouthpieceStyle && <><p className=' font-normal'><strong>{`${asIsMouthpieceStyle.split(" ")[0].split("").map((x, y) => { if (y < 6) { return x } }).join("")} `}</strong>{`${asIsMouthpieceStyle.split(" ").map((x, y) => { if (y !== 0) { return `${x} ` } }).join("")} (sweet iron)`}</p></>
                            }
                        </div>}

                        {asIsHeight && <p>
                            <strong>Mouthpiece height:</strong> {asIsHeight}
                        </p>}

                        {asIsCopperHoodAndCricket && <p>
                            <strong>Copper Hood & Cricket:</strong> {asIsCopperHoodAndCricket}
                        </p>}

                        {asIsTongueRelief && <p>
                            <strong>Tongue Relief:</strong> {asIsTongueRelief}
                        </p>}

                        {asIsMouthpieceAngle && <p>
                            <strong>Mouthpiece Angle:</strong> {asIsMouthpieceAngle}
                        </p>}
                        {asIsSize && <p>
                            <strong>{`${(categories.includes("Bosals") || categories.includes("Bosalitas") || categories.includes("Broken Nose Bosalitas")) ? "Size (Inside Measurement):" : "Size:"}`}</strong> {asIsSize}
                        </p>}
                        {asIsColor && <p>
                            <strong>Color:</strong> {asIsColor}
                        </p>}
                        {asIsMaterial && <p>
                            <strong>Material:</strong> {asIsMaterial}
                        </p>}
                    </span>


                    {asIsBitMovement && <p>
                        <strong>Bit movement:</strong> {asIsBitMovement}
                    </p>}

                    {asIsBitEnds && <p className='mb-3'>
                        <strong>Bit ends:</strong> {asIsBitEnds}
                    </p>}

                    {
                        (!title.includes("BR-") && !categories.includes("Bosals") && !categories.includes("Bosalitas") && categories.includes("Broken Nose Bosalitas")) && <p>
                            <strong>Purchase as pictured or customize in the drop menu</strong>
                        </p>
                    }
                    {
                        (categories.includes("Bosals") || categories.includes("Bosalitas") || categories.includes("Broken Nose Bosalitas")) && <p className='mt-4'>
                            <strong>All Bosals are firm, flexible yet soft to the touch. They are made with a Rawhide core. Purchase as pictured or contact us for special orders.</strong>
                        </p>
                    }



                </div>
                <div className='flex items-center justify-end'>
                    <AddToCart name={title} price={price} categories={categories} ></AddToCart>
                </div>
            </div>
        </div >

    )
}

export default DaisyItemCard