"use client"

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getInquiries } from '../utils/apiCalls'
import Inquiry from '../components/Inquiry'

const page = (): React.ReactNode => {
    const { data, isFetched } = useQuery({ queryKey: ["Inquiries"], queryFn: () => getInquiries() })

    if (isFetched) {
        console.log(data)
    }
    return (
        <div className='flex flex-col items-center p-8 gap-8'>
            {
                data && data.data.map((item: any, key: number) => {
                    return <Inquiry key={key} id={item.id} firstName={item.firstName} lastName={item.lastName} email={item.email} subject={item.subject} message={item.message}></Inquiry>
                })
            }
        </div>
    )
}

export default page