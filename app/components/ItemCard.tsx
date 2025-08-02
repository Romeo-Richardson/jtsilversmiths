import Image, { StaticImageData } from 'next/image'
import React from 'react'

export type ItemCardType = { height: string, width: string, name: string, price: string, image: StaticImageData }

const ItemCard = ({ height, width, name, price, image }: ItemCardType): React.ReactNode => {
    return (
        <div className={`flex flex-col ${height} ${width}  border-black border-[1px]`}>
            <div className='flex items-center justify-center h-[70%] bg-amber-950 grow'>
                <Image className='h-full w-full' src={image} alt="picture of item" width={112} height={150}></Image>
            </div>
            <div className='flex flex-col h-[30%] justify-center items-center py-4 gap-2'>
                <p className='text-black'>{name}</p>
                <p className='text-black'>{`$${price}`}</p>
                <button className='py-4 px-16 bg-black text-white transition-[1s] hover:cursor-pointer hover:border-black hover:border-[1px] hover:text-black hover:bg-white hover:underline'>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCard