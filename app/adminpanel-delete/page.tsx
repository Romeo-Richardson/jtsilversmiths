"use client"

import axios from 'axios'
import React from 'react'

const page = (): React.ReactNode => {

    const deleteItem = async (name: FormDataEntryValue | null) => {
        const { data } = await axios.post("/api/delete-item", { name })
        data ? console.log(data) : console.log("Failed to delete item")
    }
    return (
        <form className='flex flex-col items-center justify-center min-h-screen gap-3' onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData()
            const item = formData.get("item")
            deleteItem(item)
        }}>
            <p>Item Name</p>
            <input className='input' name="item" type="text" />
            <button className='btn btn-primary' type='submit'>Delete Item</button>
        </form>
    )
}

export default page