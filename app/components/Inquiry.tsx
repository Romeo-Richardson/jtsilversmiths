import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getInquiries } from '../utils/apiCalls'
import { inquiry } from '@prisma/client'

const Inquiry = ({ firstName, lastName, email, subject, message }: inquiry): React.ReactNode => {

    return (
        <div className='bg-base-100 text-primary-content w-4/5 h-auto p-8 flex flex-col  rounded shadow-sm shadow-gray-400'>
            <p><strong>Name:</strong> {`${firstName} ${lastName}`}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Message:</strong> {message}</p>
        </div>
    )
}

export default Inquiry