import React from 'react'
import SideMenu from '../components/SideMenu'
import ShopDisplay from '../components/ShopDisplay'

const page = (): React.ReactNode => {
    return (
        <div className='min-h-screen flex'>
            <SideMenu></SideMenu>
            <ShopDisplay></ShopDisplay>
        </div>
    )
}

export default page