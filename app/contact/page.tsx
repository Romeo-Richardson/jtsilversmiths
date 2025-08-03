import React from 'react'
import MainHeader from '../components/MainHeader'

const page = (): React.ReactNode => {
    return (
        <div className='min-h-[85vh] bg-base-200 flex flex-col'>
            <div className='bg-neutral py-2 pl-4'>
                <h1 className='text-3xl text-white'>Contact us</h1>
            </div>
            <MainHeader name='Contact' subtext='(209)-492-0114 | example@example.com'></MainHeader>
            <div className='flex items-center justify-center'>
                <div className='w-[40vw] max-[700]:w-3/4 flex flex-col gap-6'>
                    <div className='flex items-center justify-center max-[500px]:flex-col max-[500px]:w-full gap-4'>
                        <input className='input input-neutral' type="text" placeholder='First Name' />
                        <input className='input input-neutral' type="text" placeholder='Last Name' />
                    </div>
                    <div className='flex'>
                        <input className='input  input-neutral grow' type="email" placeholder='Email' />
                    </div>
                    <div className='flex'>
                        <input className='input input-neutral grow' type="text" placeholder='Subject' />
                    </div>
                    <div className='flex'>
                        <textarea className='grow textarea textarea-neutral' name="Inquiry" placeholder='Inquiry'></textarea>
                    </div>
                    <button className='btn btn-primary mb-2'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default page