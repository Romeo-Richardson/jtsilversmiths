"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'



const page = () => {

    const [file, setFile] = useState<File | null>(null)

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const [itemDetails, setItemDetails] = useState({})
    const [applicableCategories, setApplicableCategories] = useState<{ name: string, status: boolean }[]>([{ name: "Bit", status: false }, { name: "Mouthpiece", status: false }, { name: "Snaffle", status: false }, { name: "Loose Ring - One Ring", status: false }, { name: "Loose Ring - Two Ring", status: false }, { name: "Dee Ring - One Ring", status: false }, { name: "Dee Ring - Two Ring", status: false }, { name: "Low Port", status: false }, { name: "Medium Port", status: false }, { name: "High Port", status: false }, { name: "Chileno Ring Bit Mouthpiece", status: false }, { name: "Frog", status: false }, { name: "Half Breed", status: false }, { name: "Mona Lisa", status: false }, { name: "Polo", status: false }, { name: "Ported Snaffle", status: false }, { name: "Salinas", status: false }, { name: "Spade", status: false }, { name: "Santa Barbara", status: false }, { name: "Other", status: false }])

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
    {
        inputLabel: "Item Height", inputName: "height", value: ''
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
                            applicableCategories.map((item, key) => {
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