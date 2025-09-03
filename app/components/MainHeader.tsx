import React from 'react'

export type MainHeaderType = { name: string, subtext?: string, paddingT?: string, paddingB?: string, underSubText?: string }

const MainHeader = ({ name, subtext, paddingB, paddingT, underSubText }: MainHeaderType): React.ReactNode => {
    return (
        <div className={`${paddingB ? paddingB : "pb-16"} ${paddingT ? paddingT : "pt-16"} flex flex-col text-center items-center justify-center text-primary-content bg-base-200 `}>
            <h1 className='text-5xl'>{name}</h1>
            <p className='text-primary-content mt-4'>{subtext}</p>
            <p className='text-primary-content mt-1'>{underSubText}</p>
        </div>
    )
}

export default MainHeader