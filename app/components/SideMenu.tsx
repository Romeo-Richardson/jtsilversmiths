"use client"

import React, { useState } from 'react'
import NavInput from './NavInput'
import { useMainStore } from '../utils/global'
import setQuery from '../utils/setQuery'
import { useQuery } from '@tanstack/react-query'
import { getItems } from '../utils/apiCalls'

type MenuItemType = {
    name: string,
    link: "/",
    status?: boolean
}

type ExtendedMenuItemType<T> = MenuItemType & {
    subItems?: T[]
}

type SubMenuType = MenuItemType & {
    items: ExtendedMenuItemType<MenuItemType>[]
}


const SideMenu = () => {

    const { data } = useQuery({ queryKey: ["items"], queryFn: getItems })

    const [exampleData, setExampleData] = useState<SubMenuType[]>([
        {
            name: "Bits",
            link: "/",
            status: false,
            items: [
                // {
                //     name: "Western Silver Show Bits by STYLE",
                //     link: "/",
                //     subItems: [{
                //         name: "Layer 3",
                //         link: "/"
                //     }]
                // },
                {
                    name: "Western Silver Show Bits by MOUTHPIECE",
                    link: "/",
                    subItems: [
                        {
                            name: `Low Port`,
                            link: "/",
                        },
                        {
                            name: `Medium Port`,
                            link: "/",
                        },
                        {
                            name: `High Port`,
                            link: "/",
                        },
                        {
                            name: `Chileno Ring Bit Mouthpiece`,
                            link: "/",
                        },
                        {
                            name: `Frog`,
                            link: "/",
                        },
                        {
                            name: `Half Breed`,
                            link: "/",
                        },
                        {
                            name: `Mona Lisa`,
                            link: "/",
                        },
                        {
                            name: `Polo`,
                            link: "/",
                        },
                        {
                            name: `Ported Snaffle`,
                            link: "/",
                        },
                        {
                            name: "Snaffle",
                            link: "/"
                        },
                        {
                            name: `Salinas`,
                            link: "/",
                        },
                        {
                            name: `Spade`,
                            link: "/",
                        },
                        {
                            name: `Other (All)`,
                            link: "/",
                        },
                    ]
                },
                // {
                //     name: "Western Silver Show Bits by THEME",
                //     link: "/",
                //     subItems: [{
                //         name: "Layer 3",
                //         link: "/"
                //     }]
                // },
                // {
                //     name: "Western Silver Show Bits by BRAND",
                //     link: "/",
                //     subItems: [{
                //         name: "Layer 3",
                //         link: "/"
                //     }]
                // },
                // {
                //     name: "Horse bits without silver",
                //     link: "/",
                //     subItems: [{
                //         name: "Layer 3",
                //         link: "/"
                //     }]
                // }
            ]
        },
        {
            name: "Mouthpieces",
            link: "/",
            status: false,
            items: [
                {
                    name: `Low Port`,
                    link: "/",
                },
                {
                    name: `Medium Port`,
                    link: "/",
                },
                {
                    name: `High Port`,
                    link: "/",
                },
                {
                    name: `Chileno Ring Bit Mouthpiece`,
                    link: "/",
                },
                {
                    name: `Frog`,
                    link: "/",
                },
                {
                    name: `Half Breed`,
                    link: "/",
                },
                {
                    name: `Mona Lisa`,
                    link: "/",
                },
                {
                    name: `Polo`,
                    link: "/",
                },
                {
                    name: `Ported Snaffle`,
                    link: "/",
                },
                {
                    name: "Snaffle",
                    link: "/"
                },
                {
                    name: `Salinas`,
                    link: "/",
                },
                {
                    name: `Spade`,
                    link: "/",
                },
                {
                    name: `Other (All)`,
                    link: "/",
                },
            ]
        },
        // {
        //     name: "Snaffles",
        //     link: "/",
        //     items: [
        //         {
        //             name: "Loose Ring - One Ring",
        //             link: "/",
        //         },
        //         {
        //             name: "Loose Ring - Two Ring",
        //             link: "/",
        //         },
        //         {
        //             name: "Dee Ring - One Ring",
        //             link: "/",
        //         },
        //         {
        //             name: "Dee Ring - Two Ring",
        //             link: "/",
        //         }
        //     ]
        // }
    ])


    const { setSearchQueryInput, setCurrentlySelectedQuery, setupQuery, setMainCategory } = useMainStore()

    return (
        <ul className="menu bg-base-200 rounded-b-2xl max-[700px]:hidden  min-w-80">
            <NavInput></NavInput>
            {/* <li>
                <details open={false}>
                    <summary>Parent</summary>
                    <ul>
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        <li>
                            <details open={false}>
                                <summary>Parent</summary>
                                <ul>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li> */}

            {
                exampleData.map((menuItem, menuItemKey) => menuItem.items.length === 0 ? <li key={menuItemKey + 100}><a>{menuItem.name}</a></li> :
                    <li key={menuItemKey} onClick={() => {
                        if (!menuItem.status) {
                            console.log(menuItem.name)
                            setMainCategory(menuItem.name)
                            setExampleData(prev => {
                                let copy = [...prev]
                                copy.forEach((i) => {
                                    if (i !== menuItem) {
                                        i.status = false
                                    } else {
                                        i.status = true
                                    }
                                })
                                return prev = [...copy]
                            })
                        }
                    }}>
                        <details open={menuItem.status}>
                            <summary>{menuItem.name}</summary>
                            <ul>
                                {
                                    menuItem.items.map((subMenuItem, subMenuItemKey) => !subMenuItem.subItems ? <li key={subMenuItemKey} onClick={(e) => {
                                        e.preventDefault()
                                        setSearchQueryInput(null)
                                        setCurrentlySelectedQuery(subMenuItem.name)
                                        console.log(data.data)
                                        setupQuery(data.data)
                                    }}><a href="">{subMenuItem.name}</a></li> :
                                        <li key={subMenuItemKey}>
                                            <details open={false}>
                                                <summary>{subMenuItem.name}</summary>
                                                {
                                                    subMenuItem.subItems?.map((item, key) => <ul key={key}><li onClick={(e) => {
                                                        e.preventDefault()
                                                        setSearchQueryInput(null)
                                                        setCurrentlySelectedQuery(item.name)
                                                        console.log(data.data)
                                                        setupQuery(data.data)
                                                    }}><a>{item.name}</a></li></ul>)
                                                }
                                            </details>
                                        </li>
                                    )
                                }
                            </ul>
                        </details>
                    </li>
                )
            }
        </ul>
    )
}

export default SideMenu