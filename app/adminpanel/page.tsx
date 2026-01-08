"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'



const page = () => {

    const [file, setFile] = useState<File | null>(null)

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const [itemDetails, setItemDetails] = useState({})
    const [applicableCategories, setApplicableCategories] = useState<{ name: string, status: boolean }[]>([{ name: "Bit", status: false }, { name: "Horse Bit", status: false }, { name: "Mouthpiece", status: false }, { name: "Charro Reins", status: false }, { name: "Snaffle", status: false }, { name: "Loose Ring - One Ring", status: false }, { name: "Loose Ring - Two Ring", status: false }, { name: "Dee Ring - One Ring", status: false }, { name: "Dee Ring - Two Ring", status: false }, { name: "Low Port", status: false }, { name: "Medium Port", status: false }, { name: "High Port", status: false }, { name: "Chileno Ring Bit Mouthpiece", status: false }, { name: "Frog", status: false }, { name: "Half Breed", status: false }, { name: "Mona Lisa", status: false }, { name: "Polo", status: false }, { name: "Ported Snaffle", status: false }, { name: "Salinas", status: false }, { name: "Spade", status: false }, { name: "Santa Barbara", status: false }, { name: "Other", status: false }, { name: "Barrette", status: false }, { name: "Hair Clip", status: false }, { name: "Pony Tail Holder", status: false }, { name: "Comb", status: false }, { name: "Hair Accessorie", status: false }, { name: "Argentine Snaffles", status: false }, { name: "Arizona Cheek", status: false }, { name: "Baby Doll Bit", status: false }, { name: "Calvary Pattern Shank", status: false }, { name: "Charras", status: false }, { name: "Chileno Ring Bit", status: false }, { name: "Gag Snaffle", status: false }, { name: "Las Cruces", status: false }, { name: "Nevada", status: false }, { name: "Number 7", status: false }, { name: "Rod Iron Cheek (de Varilla)", status: false }, { name: "Santa Lucia", status: false }, { name: "Santa Paula", status: false }, { name: "Santa Susanna", status: false }, { name: "Sonora", status: false }, { name: "U.S. Calvary Style", status: false }, { name: "Acorn", status: false }, { name: "Arrow", status: false }, { name: "Back Bones (de Espinazo)", status: false }, { name: "Butterfly", status: false }, { name: "Card Suit Motiff", status: false }, { name: "Chevron Stripes", status: false }, { name: "Crescent Moon", status: false }, { name: "Daisy Concho", status: false }, { name: "Dragon Horse", status: false }, { name: "Eagle", status: false }, { name: "Filigree", status: false }, { name: "Hearts", status: false }, { name: "Horseshoe", status: false }, { name: "Indian Head", status: false }, { name: "Pistol Bits", status: false }, { name: "Round Concho", status: false }, { name: "Shield", status: false }, { name: "Snake", status: false }, { name: "Special Bits", status: false }, { name: "Special Projects", status: false }, { name: "Star", status: false }, { name: "Sunflower (Flower)", status: false }, { name: "Trophy (Ideal for personalizing)", status: false }, { name: "Wagon Wheel", status: false }, { name: "Engraved Stainless Steel", status: false }, { name: "Engraved Steel", status: false }, { name: "German Silver", status: false }, { name: "Mexican Style Stainless", status: false }, { name: "Working Horse Bits", status: false }, { name: "Western Silver Show Bits w/ BRAND", status: false }, { name: "Custom Western Silver Show Bits", status: false }, { name: "8 Plait", status: false }, { name: "12 Plait", status: false }, { name: "16 Plait", status: false }, { name: "Diameter 3/4", status: false }, { name: "Diameter 5/8", status: false }, { name: "Diameter 1/2", status: false }, { name: "Latigo w/ Black", status: false }, { name: "Diameter 3/8", status: false }, { name: "Tie Down Nose Band", status: false }, { name: "Diameter 1/4", status: false }, { name: "Chocolate", status: false }, { name: "Latigo", status: false }, { name: "Rawhide", status: false }, { name: "Black", status: false }, { name: "Latigo w/ Rawhide", status: false }, { name: "Western SIlver Show Bits w/o SILVER", status: false }, { name: "Rawhide w/ Latigo", status: false }, { name: "Rawhide w/ Black", status: false }, { name: "Black w/ Rahide", status: false }, { name: "Chocolate w/ Rawhide", status: false }, { name: "Rawhide w/ Chocolate", status: false }, { name: "Rawhide w/ Chocolate w/ Rawhide Detail", status: false }, { name: "Rawhide w/ Chocolate w/ Turquoise", status: false }, { name: "Rawhide w/ Chocolate w/ Red Detail", status: false }, { name: "Rawhide w/ Black & Red Detail", status: false }, { name: "Spacer", status: false }, { name: "Pear + Spacer", status: false }, { name: "Pear", status: false }, { name: "Noseband Round", status: false }, { name: "Noseband Flat", status: false }, { name: "Bosals", status: false }, { name: "Belts", status: false }, { name: "Double Rope", status: false }, { name: "Bosal Hanger", status: false }, { name: "GDR & Bosal Hanger", status: false }, { name: "Bosalitas", status: false }, { name: "Broken Nose Bosalitas", status: false }, { name: "Indian Hackamore", status: false }, { name: "Bull Whip or Latigo", status: false }, { name: "Chin Straps", status: false }, { name: "Headstalls", status: false }, { name: "Hondo - Rawhide", status: false }, { name: "Quirt (Whip)", status: false }, { name: "Rein Connectors", status: false }, { name: "Riata", status: false }, { name: "Reins", status: false }, { name: "Straps", status: false }, { name: "Big Concho", status: false }, { name: "Rawhide & Leather", status: false }])

    const [inputOptions, setInputOptions] = useState<{ inputLabel: string, inputName: string, value: string }[]>([{
        inputLabel: "Item Name", inputName: "itemName",
        value: ''
    }, {
        inputLabel: "Item Price", inputName: "itemPrice",
        value: ''
    }, {
        inputLabel: "Size Cheek", inputName: "sizeCheek",
        value: ''
    }, {
        inputLabel: "Theme", inputName: "theme",
        value: ''
    }, {
        inputLabel: "Style", inputName: "style",
        value: ''
    }, {
        inputLabel: "Pictured With", inputName: "picturedWith",
        value: ''
    }, {
        inputLabel: "Finish", inputName: "finish",
        value: ''
    }, {
        inputLabel: "Mouthpiece Style", inputName: "mouthpieceStyle",
        value: ''
    }, {
        inputLabel: "Mouthpiece Height", inputName: "mouthpieceHeight",
        value: ''
    }, {
        inputLabel: "Copper Hood & Cricket", inputName: "chc",
        value: ''
    }, {
        inputLabel: "Tongue Relief", inputName: "tongueRelief",
        value: ''
    }, {
        inputLabel: "Mouthpiece Angle", inputName: "mouthpieceAngle",
        value: ''
    }, {
        inputLabel: "Bit Movement", inputName: "bitMovement",
        value: ''
    }, {
        inputLabel: "Bit Ends", inputName: "bitEnds",
        value: ''
    },
    // {
    //     inputLabel: "Item Height", inputName: "height", value: ''
    // },
    {
        inputLabel: "Size", inputName: "size", value: ''
    },
    {
        inputLabel: "Material", inputName: "material", value: ''
    },
    {
        inputLabel: "Color", inputName: "color", value: ''
    }
    ])

    useEffect(() => {
        console.log(itemDetails)
    }, [itemDetails])

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log(formData.get('image'))
        // console.log(applicableCategories)
        // const { data } = await axios.post("/api/upload-image", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        // console.log(data)

        // inputOptions.forEach((item) => {
        //     formData.append(item.inputName, item.value)
        // })

        inputOptions.forEach((item) => {
            setItemDetails(prev => prev = { ...prev, [item.inputName]: item.value })
        })
    }

    const postImage = async (itemDetails: any) => {
        const formData = new FormData()
        const { data } = await axios.post("/api/upload-image", { filename: file?.name, contentType: file?.type, itemDetails }, { headers: { 'Access-Control-Allow-Origin': '*' } })
        console.log(data)
        Object.entries(data.fields).forEach(([key, value]) => {
            formData.append(key, value as string)
        })
        if (file) {
            formData.append('file', file)
        }
        console.log(data.url)
        const { data: imageData } = await axios.post(data.url, formData)
        console.log(imageData)
        const { data: catData } = await axios.post("/api/update-categories", { categories: selectedCategories, name: inputOptions[0].value })
        console.log(catData)
    }

    useEffect(() => {
        if (file) {
            postImage(itemDetails)
        }
    }, [itemDetails])

    useEffect(() => {
        console.log(inputOptions)
    }, [inputOptions])

    return (
        <div className='flex flex-col items-center justify-center'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border my-4 p-4">
                <legend className="fieldset-legend">Upload new item</legend>
                <form className='flex flex-col gap-4 mb-6' onSubmit={(e) => {
                    // e.preventDefault()
                    // const formData = new FormData()
                    // formData.append("image", file)
                    // inputOptions.forEach((item) => {
                    //     formData.append(item.inputName, item.value)
                    // })

                    // console.log(formData.get("itemPrice"))
                    // submit(formData)
                    submit(e)
                }}>
                    {
                        inputOptions.map((item, key) => {
                            return <div className='flex flex-col gap-2' key={key}>
                                <p>{item.inputLabel}</p>
                                <input className='input w-full' name={item.inputName} onChange={(e) => {
                                    const value = e.currentTarget.value
                                    setInputOptions(prev => {
                                        const copy = [...prev]
                                        copy[copy.indexOf(item)].value = value
                                        return prev = [...copy]
                                    })
                                }} type="text" />
                            </div>
                        })
                    }
                    <div><p>Applicable Categories</p></div>
                    <div className='flex flex-wrap gap-3'>
                        {
                            applicableCategories.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" })).map((item, key) => {
                                return <span className={`badge hover:cursor-pointer badge-primary ${!selectedCategories.includes(item.name) && "badge-outline"}`} key={key} onClick={() => {
                                    if (selectedCategories.includes(item.name)) {
                                        console.log("delete")
                                        setSelectedCategories(catPrev => {
                                            const catCopy = [...catPrev]
                                            catCopy.splice(catCopy.indexOf(item.name), 1)
                                            return catPrev = [...catCopy]
                                        })
                                    } else {
                                        setSelectedCategories(catPrev => catPrev = [...catPrev, item.name])
                                    }
                                }}>{item.name}</span>
                            })
                        }

                    </div>
                    <div>
                        <p>Upload Image</p>
                        <input className='file-input file-input-primary' onChange={(e) => { e.target.files && setFile(e.target.files[0]) }} name='image' type="file" accept='image/*' />
                    </div>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </form>
            </fieldset>
        </div>
    )
}

export default page