"use client"

import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { getInquiries } from '../utils/apiCalls'
import Inquiry from '../components/Inquiry'
import { RedirectToSignIn, SignedIn, SignedOut, useClerk, useUser } from '@clerk/nextjs'

const page = (): React.ReactNode => {
    const { data, isFetched } = useQuery({ queryKey: ["Inquiries"], queryFn: () => getInquiries() })

    const { signOut } = useClerk()

    const { isSignedIn, user } = useUser()

    if (isFetched) {
        console.log(data)
    }

    useEffect(() => {
        if (isSignedIn && !(user.id === "user_3C2V9rtJsMvQJUiufTNdnd6bSpf" || user.id === "user_2yCOu54baLL57crreJsy8nxRKra")) {
            signOut()
        }
    }, [user])
    return (
        <>
            <SignedIn>
                <div className='flex flex-col items-center p-8 gap-8'>
                    {
                        data && data.data.map((item: any, key: number) => {
                            return <Inquiry key={key} id={item.id} firstName={item.firstName} lastName={item.lastName} email={item.email} subject={item.subject} message={item.message} phoneNumber={item.phoneNumber} date={item.date}></Inquiry>
                        })
                    }
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn></RedirectToSignIn>
            </SignedOut>
        </>

    )
}

export default page