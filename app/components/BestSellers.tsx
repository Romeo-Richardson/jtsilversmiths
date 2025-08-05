"use client"

import React from 'react'
import ItemCard, { ItemCardType } from './ItemCard'
import BestSellerCard from './BestSellerCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const BestSellers = (): React.ReactNode => {

    const getItems = async () => {
        const { data } = await axios.get("http://localhost:3000/api/get-items")
        return data
    }


    const { data, isFetched } = useQuery({ queryKey: ["Items"], queryFn: getItems })

    return (
        <div className='px-8 max-[1035px]:h-auto bg-neutral flex items-center justify-center max-[1035px]:flex-col py-8 gap-12'>
            {
                data?.data.map((item: any, key: number) => key < 3 && <BestSellerCard image={item.image} description={item.description || ""} price={item.price} title={item.name} key={key}></BestSellerCard>)
            }
        </div>
    )
}

export default BestSellers