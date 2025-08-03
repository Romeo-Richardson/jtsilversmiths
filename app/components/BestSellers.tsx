"use client"

import React from 'react'
import ItemCard, { ItemCardType } from './ItemCard'
import DaisyItemCard from './DaisyItemCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const BestSellers = (): React.ReactNode => {

    const getItems = async () => {
        const { data } = await axios.get("https://www.jtsilversmiths.com/api/get-items")
        return data
    }


    const { data, isFetched } = useQuery({ queryKey: ["Items"], queryFn: getItems })

    return (
        <div className='h-[80vh] bg-neutral flex items-center justify-center py-8 gap-12'>
            {
                data?.data.map((item: any, key: number) => key < 3 && <DaisyItemCard image={item.image} price={item.price} title={item.name} key={key}></DaisyItemCard>)
            }
        </div>
    )
}

export default BestSellers