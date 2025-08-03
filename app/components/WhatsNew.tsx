import React from 'react'
import BigDaisyDisplayCard from './BigDaisyDisplayCard'

const WhatsNew = (): React.ReactNode => {
    return (
        <div className='h-[80vh] bg-neutral flex items-center justify-center gap-8 '>
            <BigDaisyDisplayCard></BigDaisyDisplayCard>
            {/* <BigDaisyDisplayCard></BigDaisyDisplayCard> */}
        </div>
    )
}

export default WhatsNew