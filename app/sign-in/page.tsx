"use client"

import { RedirectToSignIn } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useUser } from '@clerk/nextjs'

const page = (): React.ReactNode => {
    const { push } = useRouter()
    const { isSignedIn } = useUser()
    useEffect(() => {
        isSignedIn && push("/")
    })
    return !isSignedIn && <RedirectToSignIn></RedirectToSignIn>
}

export default page