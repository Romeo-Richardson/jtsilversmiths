import React from 'react'

const OptionalNotificationBanner = (): React.ReactNode => {
    return (
        <div className='bg-black max-[700px]:px-6 max-[390px]:text-xs text-white flex items-center justify-center h-12'>
            <span>
                <a href='https://liveyounger.com/josefinatellechea'>Look and feel young again</a>
                <a href="https://liveyounger.com/josefinatellechea" className='underline'>Click to learn more</a>
            </span>

        </div>
    )
}

export default OptionalNotificationBanner