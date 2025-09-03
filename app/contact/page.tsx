"use client"
import React, { useState } from 'react'
import MainHeader from '../components/MainHeader'
import axios from 'axios'
import toast from 'react-hot-toast'



const page = (): React.ReactNode => {

    const [isMessageSent, setIsMessageSent] = useState(false)

    const createInquiry = async (firstName: FormDataEntryValue | null, lastName: FormDataEntryValue | null, email: FormDataEntryValue | null, subject: FormDataEntryValue | null, message: FormDataEntryValue | null) => {
        const { data } = await axios.post("https://www.jtsilversmiths.com/api/create-inquiry", {
            firstName,
            lastName,
            email,
            subject,
            message
        })

        if (data) {
            setIsMessageSent(true)
        }
        console.log(data.data)
    }

    return (
        <div className='min-h-[85vh] bg-base-200 flex flex-col'>
            <div className='bg-neutral py-2 pl-4'>
                <h1 className='text-3xl text-white'>Contact us</h1>
            </div>
            <MainHeader name='Contact' subtext={`jtsilversmiths@yahoo.com`} underSubText={`(209) 492-0114`}></MainHeader>
            {
                isMessageSent ? <div className='flex items-center justify-center'><h1 className='font-bold text-3xl'>Thank you for contacting us, we will follow up with you soon!</h1></div> : <form className='flex items-center justify-center' onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const firstName = formData.get("firstName")
                    const lastName = formData.get("lastName")
                    const email = formData.get("email")
                    const subject = formData.get("subject")
                    const message = formData.get("message")
                    toast.promise(createInquiry(firstName, lastName, email, subject, message), {
                        success: "Message sent",
                        error: "Failed to send message",
                        loading: "Sending Message..."
                    })

                }}>
                    <div className='w-[40vw] max-[700]:w-3/4 flex flex-col gap-6'>
                        <div className='flex items-center justify-center max-[500px]:flex-col max-[500px]:w-full gap-4'>
                            <input className='input input-neutral' type="text" name='firstName' placeholder='First Name' />
                            <input className='input input-neutral' type="text" name='lastName' placeholder='Last Name' />
                        </div>
                        <div className='flex'>
                            <input className='input  input-neutral grow' type="email" required name='email' placeholder='Email' />
                        </div>
                        <div className='flex'>
                            <input className='input input-neutral grow' type="text" name='subject' placeholder='Subject' />
                        </div>
                        <div className='flex'>
                            <textarea className='grow textarea textarea-neutral' required name="message" placeholder='Inquiry'></textarea>
                        </div>
                        <button className='btn btn-primary mb-2' type='submit'>Submit</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default page