"use client"

import React, { use, useEffect } from 'react'
import ItemCard, { ItemCardType } from './ItemCard'
import item1 from '../assets/item-example-1.jpg'
import item2 from '../assets/item-example-2.jpg'
import item3 from '../assets/item-example-3.jpg'
import item4 from '../assets/item-example-4.jpg'
import DaisyItemCard from './DaisyItemCard'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { items } from '@prisma/client'
import { useMainStore } from '../utils/global'
import { getItems } from '../utils/apiCalls'
import NavInput from './NavInput'

const ShopDisplay = (): React.ReactNode => {

    const { searchQueryInput, currentlySelectedQuery, setDisplayedItems, displayedItems } = useMainStore()

    const { data, isFetched } = useQuery({ queryKey: ["Items"], queryFn: getItems })

    if (isFetched) {
        console.log(data)
    }


    // useEffect(() => {
    //     if (currentlySelectedQuery && !searchQueryInput) {
    //         setDisplayedItems(data?.data.map((item: items) => {
    //             if (item.categories.includes(currentlySelectedQuery)) {
    //                 return item
    //             }
    //         }))
    //     } else if (!currentlySelectedQuery && searchQueryInput) {
    //         setDisplayedItems(data?.data.map((item: items) => {
    //             if (item.name.includes(searchQueryInput.toString())) {
    //                 return item
    //             }
    //         }))
    //     } else {
    //         if (isFetched) {
    //             setDisplayedItems(data?.data)
    //         }
    //     }

    // }, [currentlySelectedQuery, searchQueryInput, data])

    // const itemCardInfo: ItemCardType = {
    //     name: "Example Item",
    //     price: "$12.50",
    //     image: exampleItem,
    //     height: "350px",
    //     width: "200px"
    // }

    useEffect(() => {
        console.log(displayedItems)
    }, [displayedItems])


    return (
        <div className=' grow flex flex-col'>
            <div className='bg-neutral py-2 pl-4'>
                <h1 className='text-3xl text-white'>Products - {`${currentlySelectedQuery ? currentlySelectedQuery : "All Items"}`}</h1>
            </div>
            <div className='min-[701px]:hidden bg-base-200 py-2 pl-4'>
                <NavInput></NavInput>
            </div>
            <div className='flex flex-wrap gap-4 p-4 max-h-[1600px] overflow-auto mb-6 justify-center'>
                {
                    // searchResults() ? searchResults()?.map((item, key: number) => {
                    //     return <DaisyItemCard key={key} {...item} title={item.name}></DaisyItemCard>
                    // }) : data?.data.map((item: items, key: number) => {
                    //     return <DaisyItemCard key={key} {...item} title={item.name}></DaisyItemCard>
                    // })
                    displayedItems?.length! !== 0 ? displayedItems?.map((item, key) => {
                        return item && <DaisyItemCard key={key} price={item.price} image={item.image} title={item.name}></DaisyItemCard>
                    }) : data?.data.map((item: items, key: number) => {
                        return <DaisyItemCard key={key} price={item.price} image={item.image} title={item.name}></DaisyItemCard>
                    })
                }
                {/* <DaisyItemCard image={item1}></DaisyItemCard>
                <DaisyItemCard image={item3}></DaisyItemCard>
                <DaisyItemCard image={item2}></DaisyItemCard>
                <DaisyItemCard image={item3}></DaisyItemCard>
                <DaisyItemCard image={item1}></DaisyItemCard>
                <DaisyItemCard image={item3}></DaisyItemCard>
                <DaisyItemCard image={item2}></DaisyItemCard>
                <DaisyItemCard image={item4}></DaisyItemCard>
                <DaisyItemCard image={item1}></DaisyItemCard>
                <DaisyItemCard image={item2}></DaisyItemCard>
                <DaisyItemCard image={item4}></DaisyItemCard> */}
            </div>
        </div>
    )
}

export default ShopDisplay