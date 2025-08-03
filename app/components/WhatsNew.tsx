import React from 'react'
import BigDaisyDisplayCard from './BigDaisyDisplayCard'

const WhatsNew = (): React.ReactNode => {
    return (
        <div className='h-auto py-16 bg-neutral flex items-center justify-center px-8 gap-8 '>
            <BigDaisyDisplayCard></BigDaisyDisplayCard>
            {/* <BigDaisyDisplayCard></BigDaisyDisplayCard> */}
        </div>
    )
}

export default WhatsNew