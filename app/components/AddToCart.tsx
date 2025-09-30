"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useMainStore } from '../utils/global'
import preview from "../assets/visibility.png"
import Image, { StaticImageData } from 'next/image'
import sackImage from "../assets/sackett.webp"


const AddToCart = ({ name, price, categories }: { name: string, price: number, categories?: string[] }) => {

    const [storeDocument, setStoreDocument] = useState<any>()

    const [quantity, setQuantity] = useState<number>()

    const [disabled, setDisabled] = useState<boolean>(true)

    const { addToCart, setCurrentlySelectedItem, currentlySelectedItem } = useMainStore()

    const [itemWidth, setItemWidth] = useState<string>(`4-3/4" (Arabian)`)

    const [itemMovement, setItemMovement] = useState<string>("Loose jaw")

    const [itemAngle, setItemAngle] = useState<string>("Solid (Welded)")

    const [itemCopperOnSpoon, setItemCopperOnSpoon] = useState<string>("No copper on spade")

    const [itemPositionOfBraces, setItemPositionOfBraces] = useState<string>("Position A (Center of Cheek)")

    const [itemHeight, setItemHeight] = useState<string>("3")

    const [itemFinish, setItemFinish] = useState<string>("Stainless Steel with .925 Silver Overlay (SOS)")

    const [itemBitEndsWith, setItemBitEndsWIth] = useState("Leave as is")

    const [itemStyle, setItemStyle] = useState("MP-01")

    const [previewImage, setPreviewImage] = useState<StaticImageData>(sackImage)

    const [purchaseOption, setPurchaseOption] = useState<string>("Purchase seperately")



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
            "1. Normal",
            "2. Slight drop",
            "3. Straight (Drop towards back)"
        ],
    }

    const itemFinishes: string[] = [
        "Stainless Steel with .925 Silver Overlay (SOS)",
        "Blue with .999 Silver Inlay",
        "Rust (Patina) with .999 Silver Inlay",
        "Copper (Brown with a Shine)  with .999 Silver Inlay",
        "Black with .999 Silver Inlay"
    ]
    const standAloneMoutpieceOptions = [
        "Purchase Seperately",
        "Replace Mouthpiece(+$100)"
    ]
    const bitEnds: string[] = ["Leave as is", "w/ Slobber Bar", `${(purchaseOption === standAloneMoutpieceOptions[1]) ? "w/ Replacement Slobber Bar (+$60)" : ""} `, "w/ Rein Hooks & Chains", "w/ O-Rings", "w/ Stirrups & Chains"]

    const spadeMenuOptions = {
        copperOnSpoon: [
            "No copper on spade",
            "Only under (tongue side)",
            "Only top (palate side)"
        ],
        positionOfBraces: [
            "Position A (Center of Cheek)",
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




    const range = new Array(66).fill(null)

    const spadeExclusionList: string[] = ["B-1053", "B-1569", "B-1587", "B-1588", "B-1589", "B-1590", "B-1593", "B-1596", "B-1597", "B-1598", "B-1622", "B-1625", "B-1631", "B-1641"]
    const spadeList: number[] = [13, 14, 17, 30, 59, 63, 66, 67, 71, 72, 73, 74, 75, 76, 77, 78, 80, 84, 85, 101]
    useEffect(() => {
        if (typeof document !== null) {
            setStoreDocument(document)
        }
        console.log(name)

    }, [])

    useEffect(() => {
        console.log(Number(`${itemStyle.split("")[3]}${itemStyle.split("")[4]}`))
    }, [itemStyle])

    useEffect(() => {
        if (quantity === undefined || quantity <= 0) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        console.log(quantity)
    }, [quantity])

    useEffect(() => {
        console.log(currentlySelectedItem?.categories)
    }, [currentlySelectedItem])

    const snaffleMpOptions = [25, 43, 44, 45, 46, 55, 56, 99]

    const quantitySelector = useRef<null | HTMLInputElement>(null)

    const upchargeList: (number | string)[] = [13, 14, 17, 18, "MP-25R (+$50)", "MP-26R (+$50)", 26, 28, 29, 30, 31, 52, 57, 59, 63, 65, 66, 67, 71, 72, 73, 74, 75, 76, 77, 78, 80, 84, 85, 91, 92, 101, 104]

    return (
        <>


            <dialog id="my_modal_5" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Preview</h3>
                    {/* <Image src={previewImage} alt=''></Image> */}
                </div>
            </dialog>
            <button className="btn btn-primary" onClick={() => {
                setCurrentlySelectedItem(name, price, categories!)
                storeDocument.getElementById('my_modal_1')?.showModal()
            }
            }>Add to Cart</button >
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box space-y-2">
                    <h3 className="font-bold text-lg mb-4">{`${currentlySelectedItem?.name} ($${currentlySelectedItem?.price})`}</h3>

                    {
                        currentlySelectedItem?.categories?.includes("Mouthpiece") && <>
                            <span>
                                <p className='pb-1'>{"Purchase mouthpiece seperately"}</p>
                                <p className='pb-1'>{"or repair (replace mouthpiece)"}</p>
                                <span className='flex items-center gap-4' >
                                    <select defaultValue="Select width" onChange={(e) => { setPurchaseOption(e.currentTarget.value) }} className="select mb-6">
                                        {
                                            standAloneMoutpieceOptions.map((item, key) => {
                                                return <option key={key}>{item}</option>
                                            })
                                        }
                                    </select>
                                </span>
                            </span>

                        </>
                    }
                    {
                        currentlySelectedItem?.name.includes("B-") && !currentlySelectedItem?.name.includes("25R") && !currentlySelectedItem?.name.includes("26R") && !currentlySelectedItem.name.includes("MP-") || currentlySelectedItem?.categories?.includes("Snaffle") ? <>

                            <span>
                                <p className='pb-1'>Select mouthpiece style</p>
                                <span className='flex items-center gap-4' >
                                    <select defaultValue="Select width" onChange={(e) => { setItemStyle(e.currentTarget.value) }} className="select mb-6">
                                        {
                                            !currentlySelectedItem?.categories?.includes("Snaffle") ? [...range, "MP-25R (+$50)", "MP-26R (+$50)"].map((i, key) => {
                                                return <option key={key}>{typeof (i) !== "string" ? `MP-${key + 1 < 10 ? "0" : ""}${(key + 1).toString()}${upchargeList.includes(key + 1) ? `${key + 1 === 66 ? " (+$60)" : " (+$35)"}` : ""}` : `${i}`}</option>
                                            }) : snaffleMpOptions.map((i, key) => {
                                                return <option key={key}>{`MP-${i}`}</option>
                                            })
                                        }
                                    </select>
                                    <Image className='mb-6 hover:cursor-pointer' onClick={() => {
                                        setPreviewImage(sackImage)
                                        storeDocument.getElementById('my_modal_5')?.showModal()
                                    }} src={preview} height={24} width={24} alt=''></Image>
                                </span>
                            </span>
                        </> : <></>
                    }
                    {(currentlySelectedItem?.categories?.includes("Mouthpiece") || currentlySelectedItem?.categories?.includes("Bit") || currentlySelectedItem?.categories?.includes("Snaffle")) ? <span>
                        <p className='pb-1'>Select width</p>
                        <select defaultValue="Select width" onChange={(e) => { setItemWidth(e.currentTarget.value) }} className="select mb-6">
                            {
                                mpMenuOptions.mpWidth.map((item, key) => {
                                    return <option key={key}>{item}</option>
                                })
                            }
                        </select>
                    </span> : <></>}
                    {
                        (currentlySelectedItem?.name.includes("B-") || purchaseOption === standAloneMoutpieceOptions[1]) || currentlySelectedItem?.categories?.includes("Snaffle") || currentlySelectedItem?.categories?.includes("Bit") ?
                            <>
                                {
                                    (purchaseOption === standAloneMoutpieceOptions[1] || currentlySelectedItem?.name.includes("B-")) ? <><span>
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
                                            <span className='flex items-center gap-4' >
                                                <select defaultValue="Select Angle" onChange={(e) => { setItemAngle(e.currentTarget.value) }} className="select mb-6">
                                                    {
                                                        mpMenuOptions.mpAngle.map((item, key) => {
                                                            return <option key={key}>{item}</option>
                                                        })
                                                    }
                                                </select>
                                                {/* <Image className='mb-6 hover:cursor-pointer' onClick={() => {
                                                storeDocument.getElementById('my_modal_5')?.showModal()
                                            }} src={preview} height={24} width={24} alt=''></Image> */}
                                            </span>

                                        </span>
                                        <span>
                                            <p className='pb-1'>Bit Ends With</p>
                                            <span className='flex items-center gap-4' >
                                                <select defaultValue="Select Angle" onChange={(e) => { setItemBitEndsWIth(e.currentTarget.value) }} className="select mb-6">
                                                    {
                                                        bitEnds.map((item, key) => {
                                                            if (item.length > 1) {
                                                                return <option key={key}>{item}</option>
                                                            }
                                                        })
                                                    }
                                                </select>
                                            </span>
                                        </span></> : <></>
                                }

                            </> : <></>
                    }
                    {
                        (currentlySelectedItem?.categories?.includes("Spade")) || itemStyle.includes("$") ? <>
                            <span>
                                <p className='pb-1'>Copper on spoon</p>
                                <span className='flex items-center gap-4' >
                                    <select defaultValue="Select width" onChange={(e) => { setItemCopperOnSpoon(e.currentTarget.value) }} className="select mb-6">
                                        {
                                            spadeMenuOptions.copperOnSpoon.map((item, key) => {
                                                return <option key={key}>{item}</option>
                                            })
                                        }
                                    </select>
                                </span>
                            </span>
                            <span>
                                <p className='pb-1'>Position of braces</p>
                                <span className='flex items-center gap-4' >
                                    <select defaultValue="Select bit movement" onChange={(e) => { setItemPositionOfBraces(e.currentTarget.value) }} className="select mb-6">
                                        {
                                            spadeMenuOptions.positionOfBraces.map((item, key) => {
                                                return <option key={key}>{item}</option>
                                            })
                                        }
                                    </select>
                                    {/* <Image className='mb-6 hover:cursor-pointer' onClick={() => {
                                        storeDocument.getElementById('my_modal_5')?.showModal()
                                    }} src={preview} height={24} width={24} alt=''></Image> */}
                                </span>

                            </span>
                            <span>
                                <p className='pb-1'>Select Height</p>
                                <select defaultValue="Select Angle" onChange={(e) => { setItemHeight(e.currentTarget.value) }} className="select mb-6">
                                    {
                                        spadeMenuOptions.mpHeight.map((item, key) => {
                                            return <option key={key}>{item}</option>
                                        })
                                    }
                                </select>
                            </span>
                        </> : <></>
                    }

                    {
                        currentlySelectedItem?.name.includes("B-") || currentlySelectedItem?.categories?.includes("Snaffle") ? <>
                            <span>
                                <p className='pb-1'>Finish</p>
                                <select defaultValue="Select Angle" onChange={(e) => { setItemFinish(e.currentTarget.value) }} className="select mb-6">
                                    {
                                        itemFinishes.map((item, key) => {
                                            return <option key={key}>{item}</option>
                                        })
                                    }
                                </select>
                            </span>
                        </> : <></>
                    }

                    <p>Select quantity</p>
                    <input className='input' onChange={(e) => { setQuantity(Number(e.currentTarget.value)) }} type="number" min={0} max={100} defaultValue={0} />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn mr-4" onClick={() => {
                                setPurchaseOption("Purchase seperately")

                            }}>Close</button>
                            <button className='btn btn-primary' disabled={disabled} onClick={() => {
                                let modPrice = currentlySelectedItem?.price!
                                if (purchaseOption === standAloneMoutpieceOptions[1]) {
                                    modPrice = modPrice + 100
                                }
                                if (upchargeList.includes(itemStyle)) {
                                    console.log(itemStyle)
                                    if (itemStyle.split("").includes("R")) {
                                        modPrice = modPrice + 50
                                    } else {
                                        modPrice = modPrice + 35
                                    }
                                    if (itemStyle === "MP-66") {
                                        modPrice = modPrice + 60
                                    } else {
                                        modPrice = modPrice + 35
                                    }
                                }

                                if (itemBitEndsWith.includes("+")) {
                                    modPrice = modPrice + 60
                                }
                                console.log(name)
                                quantity && addToCart({ name: currentlySelectedItem?.name!, purchaseOption: purchaseOption, finish: itemFinish, style: itemStyle, price: modPrice, quantity, width: itemWidth, movement: itemMovement, angle: itemAngle, copper: itemCopperOnSpoon, bracePosition: itemPositionOfBraces, height: itemHeight, description: currentlySelectedItem?.name.includes("MP") ? `Width: ${itemWidth ? itemWidth : "N/A"}, Movement: ${itemMovement ? itemMovement : "N/A"}, Angle: ${itemAngle ? itemAngle : "N/A"}, Copper on spoon: ${itemCopperOnSpoon ? itemCopperOnSpoon : "N/A"}, Position of braces: ${itemPositionOfBraces ? itemPositionOfBraces : "N/A"}, Height: ${itemHeight ? itemHeight : "N/A"}, Finish: ${itemFinish ? itemFinish : "N/A"}, Mouthpiece Style: ${itemStyle ? itemStyle : "N/A"}` : "" })
                                setPurchaseOption("Purchase seperately")
                                setItemWidth(`4-3/4" (Arabian)`)
                                setItemStyle("MP-1")
                                setItemMovement("Loose jaw")
                                setItemAngle("Solid (Welded)")
                                setItemCopperOnSpoon("No copper on spade")
                                setItemHeight("3")
                                setItemBitEndsWIth("Leave as is")
                                setItemPositionOfBraces("Position A (Center of Cheek)")
                                setItemFinish("Stainless Steel with .925 Silver Overlay (SOS)")
                                setPurchaseOption("Purchase seperately")
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