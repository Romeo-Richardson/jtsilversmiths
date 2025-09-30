"use client"

import React from 'react'
import ItemCard, { ItemCardType } from './ItemCard'
import BestSellerCard from './BestSellerCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import DaisyItemCard from './DaisyItemCard'

const BestSellers = (): React.ReactNode => {

    const getItems = async () => {
        const { data } = await axios.get("https://www.jtsilversmiths.com/api/get-items")
        return data
    }


    const { data, isFetched } = useQuery({ queryKey: ["Items"], queryFn: getItems })

    return (
        <div className='px-8 max-[1035px]:h-auto bg-neutral flex items-center justify-center max-[1035px]:flex-col py-8 gap-12'>
            {
                data?.data.map((item: any, key: number) => item.categories.includes("Featured Item") && <DaisyItemCard categories={item.categories} asIsSize={item.asIsSize} asIsColor={item.asIsColor!} asIsMaterial={item.asIsMaterial!} asIsStyle={item.asIsStyle!} asIsTheme={item.asIsTheme!} image={item.image} description={item.description || ""} price={Math.round(item.price + (item.price * .10)) - .01} title={item.name} asIsBitEnds={item.asIsBitEnds!} asIsBitMovement={item.asIsBitMovement!} asIsFinish={item.asIsFinish!} asIsMouthpieceStyle={item.asIsMouthpieceStyle!} asIsSizeCheek={item.asIsSizeCheek!} asIsTongueRelief={item.asIsTongueRelief!} key={key}></DaisyItemCard>)
            }
        </div>
    )
}

export default BestSellers