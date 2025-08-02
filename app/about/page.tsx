import React from 'react'
import MainHeader from '../components/MainHeader'
import jtlogo from "../assets/jtlogo1.png"
import Image from 'next/image'

const page = (): React.ReactNode => {
    return (
        <div className=' bg-base-200'>
            <div className='bg-neutral py-2 pl-4'>
                <h1 className='text-3xl text-white'>About</h1>
            </div>
            <div className='bg-base-200 pt-6 flex flex-col py-24 items-center justify-center'>
                <Image alt='' src={jtlogo}></Image>
                <MainHeader name='JTSilversmiths' subtext='Delivering quality since *YEAR*' paddingT='py-2'></MainHeader>
                <div className=' bg-base-100 text-primary-content w-4/5 h-auto py-8 flex justify-center rounded shadow-sm shadow-gray-400'>
                    <p className='w-3/5 wrap-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium voluptatum, rem itaque sapiente hic! Laborum voluptatibus, possimus vitae molestiae, dolorem odio veniam, et ad eos eaque sit dolore nobis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam officia sed suscipit iusto quas eius quo alias nisi eveniet, quos minus ullam nemo autem expedita sunt modi tempora quaerat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, molestias, culpa voluptatum officiis porro quidem fugiat dolor debitis enim tempora, optio officia libero deserunt commodi. Aperiam qui unde accusamus. Sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aspernatur distinctio laudantium rem molestias! Iste quis officiis earum, pariatur amet, voluptate ipsa quas blanditiis veritatis corrupti nostrum animi at vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium voluptatum, rem itaque sapiente hic! Laborum voluptatibus, possimus vitae molestiae, dolorem odio veniam, et ad eos eaque sit dolore nobis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam officia sed suscipit iusto quas eius quo alias nisi eveniet, quos minus ullam nemo autem expedita sunt modi tempora quaerat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, molestias, culpa voluptatum officiis porro quidem fugiat dolor debitis enim tempora, optio officia libero deserunt commodi. Aperiam qui unde accusamus. Sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aspernatur distinctio laudantium rem molestias! Iste quis officiis earum, pariatur amet, voluptate ipsa quas blanditiis veritatis corrupti nostrum animi at vero!</p>
                </div>
            </div>
        </div>
    )
}

export default page