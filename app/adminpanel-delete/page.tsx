"use client"

import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import { useClerk, useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect } from 'react'

const page = (): React.ReactNode => {

    const { signOut } = useClerk()

    const { isSignedIn, user } = useUser()

    useEffect(() => {
        if (isSignedIn && !(user.id === "user_3C2V9rtJsMvQJUiufTNdnd6bSpf" || user.id === "user_2yCOu54baLL57crreJsy8nxRKra")) {
            signOut()
        }
    }, [user])

    const deleteItem = async (name: FormDataEntryValue | null) => {
        const { data } = await axios.post("/api/delete-item", { name })
        data ? console.log(data) : console.log("Failed to delete item")
    }
    return (
        <>
            <SignedIn>
                <form className='flex flex-col items-center justify-center min-h-screen gap-3' onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const item = formData.get("item")
                    deleteItem(item)
                }}>
                    <p>Item Name</p>
                    <input className='input' name="item" type="text" />
                    <button className='btn btn-primary' type='submit'>Delete Item</button>
                </form>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn></RedirectToSignIn>
            </SignedOut>
        </>

    )
}

export default page