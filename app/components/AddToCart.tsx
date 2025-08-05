"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useMainStore } from '../utils/global'


const AddToCart = ({ name, price }: { name: string, price: number }) => {

    const [storeDocument, setStoreDocument] = useState<any>()

    const [quantity, setQuantity] = useState<number>()

    const [disabled, setDisabled] = useState<boolean>(true)

    const { addToCart, setCurrentlySelectedItem, currentlySelectedItem } = useMainStore()

    const [itemWidth, setItemWidth] = useState<string>(`4-3/4" (Arabian)`)

    const [itemMovement, setItemMovement] = useState<string>("Loose jaw")

    const [itemAngle, setItemAngle] = useState<string>("Solid (Welded)")

    const [itemCopperOnSpoon, setItemCopperOnSpoon] = useState<string>("No copper on spade")

    const [itemPositionOfBraces, setItemPositionOfBraces] = useState<string>("Position A")

    const [itemHeight, setItemHeight] = useState<string>("3")




    const mpMenuOptions = {
        mpWidth: [
            `4-3/4" (Arabian)`,
            `5" (Standard)`,
            `5-1/8"`,
            `5-1/4"`,
            `5-3/4"`,
            `6"`
        ],
        bitMovement: [
            "Loose jaw",
            "Regular",
            "Solid (Welded)"
        ],
        mpAngle: [
            "Normal",
            "Slight drop",
            "Straight (Drop towards back)"
        ],
    }

    const spadeMenuOptions = {
        copperOnSpoon: [
            "No copper on spade",
            "Only under (tongue side)",
            "Only top (palate side)"
        ],
        positionOfBraces: [
            "Position A",
            "Position B",
        ],
        mpHeight: [
            `3"`,
            `3-1/4"`,
            `3-1/2"`,
            `3-3/4"`,
            `4"`
        ],
    }

    useEffect(() => {
        if (typeof document !== null) {
            setStoreDocument(document)
        }
        console.log(name)
    }, [])

    useEffect(() => {
        if (quantity === undefined || quantity <= 0) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        console.log(quantity)
    }, [quantity])

    const quantitySelector = useRef<null | HTMLInputElement>(null)

    return (
        <>
            <button className="btn btn-primary" onClick={() => {
                setCurrentlySelectedItem(name, price)
                storeDocument.getElementById('my_modal_1')?.showModal()
            }
            }>Add to Cart</button >
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box space-y-2">
                    <h3 className="font-bold text-lg mb-4">{currentlySelectedItem?.name}</h3>
                    {
                        currentlySelectedItem?.name.includes("MP") &&
                        <>
                            <span>
                                <p className='pb-1'>Select width</p>
                                <select defaultValue="Select width" onChange={(e) => { setItemWidth(e.currentTarget.value) }} className="select mb-6">
                                    {
                                        mpMenuOptions.mpWidth.map((item, key) => {
                                            return <option key={key}>{item}</option>
                                        })
                                    }
                                </select>
                            </span>
                            <span>
                                <p className='pb-1'>Select bit movement</p>
                                <select defaultValue="Select bit movement" onChange={(e) => { setItemMovement(e.currentTarget.value) }} className="select mb-6">
                                    {
                                        mpMenuOptions.bitMovement.map((item, key) => {
                                            return <option key={key}>{item}</option>
                                        })
                                    }
                                </select>
                            </span>
                            <span>
                                <p className='pb-1'>Select angle</p>
                                <select defaultValue="Select Angle" onChange={(e) => { setItemAngle(e.currentTarget.value) }} className="select mb-6">
                                    {
                                        mpMenuOptions.mpAngle.map((item, key) => {
                                            return <option key={key}>{item}</option>
                                        })
                                    }
                                </select>
                            </span>
                        </>
                    }
                    {
                        !currentlySelectedItem?.categories?.includes("nonSpade") && <>
                            <span>
                                <p className='pb-1'>Copper on spoon</p>
                                <select defaultValue="Select width" onChange={(e) => { setItemCopperOnSpoon(e.currentTarget.value) }} className="select mb-6">
                                    {
                                        spadeMenuOptions.copperOnSpoon.map((item, key) => {
                                            return <option key={key}>{item}</option>
                                        })
                                    }
                                </select>
                            </span>
                            <span>
                                <p className='pb-1'>Select bit movement</p>
                                <select defaultValue="Select bit movement" onChange={(e) => { setItemPositionOfBraces(e.currentTarget.value) }} className="select mb-6">
                                    {
                                        spadeMenuOptions.positionOfBraces.map((item, key) => {
                                            return <option key={key}>{item}</option>
                                        })
                                    }
                                </select>
                            </span>
                            <span>
                                <p className='pb-1'>Select angle</p>
                                <select defaultValue="Select Angle" onChange={(e) => { setItemHeight(e.currentTarget.value) }} className="select mb-6">
                                    {
                                        spadeMenuOptions.mpHeight.map((item, key) => {
                                            return <option key={key}>{item}</option>
                                        })
                                    }
                                </select>
                            </span>
                        </>
                    }
                    <p>Select quantity</p>
                    <input className='input' onChange={(e) => { setQuantity(Number(e.currentTarget.value)) }} type="number" min={0} max={100} defaultValue={0} />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn mr-4">Close</button>
                            <button className='btn btn-primary' disabled={disabled} onClick={() => {
                                console.log(name)
                                quantity && addToCart({ name: currentlySelectedItem?.name!, price: currentlySelectedItem?.price!, quantity, width: itemWidth, movement: itemMovement, angle: itemAngle, copper: itemCopperOnSpoon, bracePosition: itemPositionOfBraces, height: itemHeight, description: currentlySelectedItem?.name.includes("MP") ? `Width: ${itemWidth ? itemWidth : "N/A"}, Movement: ${itemMovement ? itemMovement : "N/A"}, Angle: ${itemAngle ? itemAngle : "N/A"}, Copper on spoon: ${itemCopperOnSpoon ? itemCopperOnSpoon : "N/A"}, Positin of braces: ${itemPositionOfBraces ? itemPositionOfBraces : "N/A"}, Height: ${itemHeight ? itemHeight : "N/A"}` : "" })
                                setItemWidth(`4-3/4" (Arabian)`)
                                setItemMovement("Loose jaw")
                                setItemAngle("Solid (Welded)")
                                setItemCopperOnSpoon("No copper on spade")
                                setItemHeight("3")
                                setItemPositionOfBraces("Position A")
                                if (quantitySelector.current) {
                                    quantitySelector.current.value = ""
                                }
                            }}>Add to Cart</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default AddToCart