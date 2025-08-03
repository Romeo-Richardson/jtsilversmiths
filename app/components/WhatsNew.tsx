import React from 'react'
import BigDaisyDisplayCard from './BigDaisyDisplayCard'
import websc from "../assets/smartsnap_8-2-2025_at_21-21-15 (1).png"

const WhatsNew = (): React.ReactNode => {
    return (
        <div className='h-[80vh] bg-neutral flex items-center justify-center gap-8 '>
            <BigDaisyDisplayCard image={websc} title='Welcome to our new website' text='This will be some sort of information.'></BigDaisyDisplayCard>
            {/* <BigDaisyDisplayCard></BigDaisyDisplayCard> */}
        </div>
    )
}

export default WhatsNew