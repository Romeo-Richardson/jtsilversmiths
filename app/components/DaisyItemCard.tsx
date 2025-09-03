import React from 'react'
import Image, { StaticImageData } from 'next/image'
import AddToCart from './AddToCart'


const DaisyItemCard = ({ image, title, categories, price, asIsFinish, asIsMouthpieceAngle, asIsCopperHoodAndCricket, asIsHeight, asIsTheme, asIsMouthpieceStyle, asIsBitEnds, asIsBitMovement, asIsTongueRelief, asIsSizeCheek, asIsStyle }: { image: string, categories: string[], title: string, price: number, asIsMouthpieceAngle?: string, asIsStyle?: string, description?: string, asIsSizeCheek?: string, asIsTongueRelief?: string, asIsBitEnds?: string, asIsBitMovement?: string, asIsMouthpieceStyle?: string, asIsFinish?: string, asIsTheme?: string, asIsCopperHoodAndCricket?: string, asIsHeight?: string }): React.ReactNode => {

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
                            <p>
                                <strong>Size cheek:</strong> {asIsSizeCheek}
                            </p>
                            <p>
                                <strong>Theme:</strong> {asIsTheme}
                            </p>
                            <p className='mb-3'>
                                <strong>Style:</strong> {asIsStyle}
                            </p>
                        </> : <></>
                    }
                    <span className={`flex gap-1 flex-col ${title.includes("B-") ? "" : "mt-[-5px]"}`}>
                        <p>
                            <strong>Pictured with</strong>
                        </p>
                        <p>
                            <strong>Finish:</strong> {asIsFinish}

                        </p>

                        <div>
                            <strong>Mouthpiece style:</strong>
                            {
                                asIsMouthpieceStyle && <><p className=' font-normal'><strong>{`${asIsMouthpieceStyle.split(" ")[0].split("").map((x, y) => { if (y < 6) { return x } }).join("")} `}</strong>{`${asIsMouthpieceStyle.split(" ").map((x, y) => { if (y !== 0) { return `${x} ` } }).join("")} (sweet iron)`}</p></>
                            }
                        </div>



                        <p>
                            <strong>Mouthpiece height:</strong> {asIsHeight}
                        </p>


                        <p>
                            <strong>Copper Hood & Cricket:</strong> {asIsCopperHoodAndCricket}
                        </p>

                        <p>
                            <strong>Tongue Relief:</strong> {asIsTongueRelief}
                        </p>




                        <p>
                            <strong>Mouthpiece Angle:</strong> {asIsMouthpieceAngle}
                        </p>




                    </span>

                    {
                        title.includes("B-") ? <>
                            <p>
                                <strong>Bit movement:</strong> {asIsBitMovement}
                            </p>
                            <p className='mb-3'>
                                <strong>Bit ends:</strong> {asIsBitEnds}
                            </p>

                        </> : <></>
                    }
                    <p>
                        <strong>Purchase as pictured or customize in the drop menu</strong>
                    </p>

                </div>
                <div className='flex items-center justify-end'>
                    <AddToCart name={title} price={price} categories={categories} ></AddToCart>
                </div>
            </div>
        </div >

    )
}

export default DaisyItemCard