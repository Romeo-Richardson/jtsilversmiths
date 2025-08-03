import Image, { StaticImageData } from 'next/image'
import React from 'react'

const BigDaisyDisplayCard = ({ image, title, text }: { image: StaticImageData, title: string, text: string }): React.ReactNode => {
    return (
        <div className="card text-primary-content lg:card-side bg-base-100 shadow-sm">
            <figure>
                <Image src={image} alt=''></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    )
}

export default BigDaisyDisplayCard