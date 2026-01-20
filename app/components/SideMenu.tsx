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
            name: "Horse Bits",
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
                {
                    name: "Western Silver Show Bits by STYLE",
                    link: "/",
                    subItems: [
                        {
                            name: `Argentine Snaffles`,
                            link: "/",
                        },
                        {
                            name: `Arizona Cheek`,
                            link: "/",
                        },
                        {
                            name: `Baby Doll Bit`,
                            link: "/",
                        },
                        {
                            name: `Big Concho`,
                            link: "/",
                        },
                        {
                            name: `Calvary Pattern Shank`,
                            link: "/",
                        },
                        {
                            name: `Charras`,
                            link: "/",
                        },
                        {
                            name: `Chileno Ring Bit Mouthpiece`,
                            link: "/",
                        },
                        {
                            name: `Gag Snaffle`,
                            link: "/",
                        },
                        {
                            name: `Las Cruces`,
                            link: "/",
                        },
                        {
                            name: "Nevada",
                            link: "/"
                        },
                        {
                            name: `Number 7`,
                            link: "/",
                        },
                        {
                            name: `Rod Iron Cheek (de Varilla)`,
                            link: "/",
                        },
                        {
                            name: `Santa Barbara`,
                            link: "/",
                        },
                        {
                            name: `Santa Lucia`,
                            link: "/",
                        },
                        {
                            name: `Santa Paula`,
                            link: "/",
                        },
                        {
                            name: `Santa Susanna`,
                            link: "/",
                        },
                        {
                            name: `Sonora`,
                            link: "/",
                        },
                        {
                            name: `U.S. Calvary Style`,
                            link: "/",
                        },
                    ]
                },
                {
                    name: "Western Silver Show Bits by THEME",
                    link: "/",
                    subItems: [
                        {
                            name: `Acorn`,
                            link: "/",
                        },
                        {
                            name: `Arrow`,
                            link: "/",
                        },
                        {
                            name: `Back bones (de Espinazo)`,
                            link: "/",
                        },
                        {
                            name: `Butterfly`,
                            link: "/",
                        },
                        {
                            name: `Card Suit Motiff`,
                            link: "/",
                        },
                        {
                            name: `Chevron Stripes`,
                            link: "/",
                        },
                        {
                            name: `Crescent Moon`,
                            link: "/",
                        },
                        {
                            name: `Daisy Concho`,
                            link: "/",
                        },
                        {
                            name: `Dragon Horse`,
                            link: "/",
                        },
                        {
                            name: "Eagle",
                            link: "/"
                        },
                        {
                            name: `Filigree`,
                            link: "/",
                        },
                        {
                            name: `Hearts`,
                            link: "/",
                        },
                        {
                            name: `Horseshoe`,
                            link: "/",
                        },
                        {
                            name: `Indian Head`,
                            link: "/",
                        },
                        {
                            name: `Pistol Bits`,
                            link: "/",
                        },
                        {
                            name: `Round Concho`,
                            link: "/",
                        },
                        {
                            name: `Shield`,
                            link: "/",
                        },
                        {
                            name: `Snake`,
                            link: "/",
                        },
                        {
                            name: `Special Bits`,
                            link: "/",
                        },
                        {
                            name: `Special Projects`,
                            link: "/",
                        },
                        {
                            name: `Star`,
                            link: "/",
                        },
                        {
                            name: `Sunflower (Flower)`,
                            link: "/",
                        },
                        {
                            name: `Trophy (Ideal for personalizing)`,
                            link: "/",
                        },
                        {
                            name: `Wagon Wheel`,
                            link: "/",
                        },
                    ]
                },
                {
                    name: "Western Silver Show Bits w/ BRAND",
                    link: "/",
                },
                {
                    name: "Custom Western Silver Show Bits",
                    link: "/",
                },
                {
                    name: "Western Silver Show Bits w/o SILVER",
                    link: "/",
                    subItems: [
                        {
                            name: `Engraved Stainless Steel`,
                            link: "/",
                        },
                        {
                            name: `Engraved Steel`,
                            link: "/",
                        },
                        {
                            name: `German Silver`,
                            link: "/",
                        },
                        {
                            name: `Mexican Style Stainless`,
                            link: "/",
                        },
                        {
                            name: `Working Horse Bits`,
                            link: "/",
                        },
                    ]
                },
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
                    name: `Other`,
                    link: "/",
                },
                {
                    name: `All`,
                    link: "/",
                },
            ]
        },
        {
            name: "Snaffles",
            link: "/",
            items: [
                {
                    name: "Loose Ring - One Ring",
                    link: "/",
                },
                {
                    name: "Loose Ring - Two Ring",
                    link: "/",
                },
                {
                    name: "Dee Ring - One Ring",
                    link: "/",
                },
                {
                    name: "Dee Ring - Two Ring",
                    link: "/",
                }
            ]
        },
        {
            name: "Hair Accessories",
            link: "/",
            items: [
                {
                    name: "Barrettes",
                    link: "/",
                },
                {
                    name: "Hair Clips",
                    link: "/",
                },
                {
                    name: "Point Tail Holders",
                    link: "/",
                },
                {
                    name: "Combs",
                    link: "/",
                }
            ]
        },
        {
            name: "Spurs",
            link: "/",
            items: [
                {
                    name: "Accessories",
                    link: "/",
                },
                {
                    name: "For Cutting Horses",
                    link: "/",
                },
                {
                    name: "Best Sellers",
                    link: "/",
                },
                {
                    name: "Western Pleasure",
                    link: "/",
                },
                {
                    name: "w/o Silver",
                    link: "/",
                }
            ]
        },
        {
            name: "Rawhide & Leather",
            link: "/",
            items: [
                {
                    name: "Belts",
                    link: "/",
                },
                {
                    name: "Bosals",
                    link: "/",
                    subItems: [
                        {
                            name: "Double Rope",
                            link: "/",
                        },
                        {
                            name: "Tie Down Nose Band",
                            link: "/",
                        },
                        {
                            name: "Bosal Hanger",
                            link: "/",
                        },
                        {
                            name: "GDR & Hanger",
                            link: "/",
                        },
                        {
                            name: "Bosals",
                            link: "/"
                        },
                        {
                            name: "Bosalitas",
                            link: "/",
                        },
                        {
                            name: "Broken Nose Bosalitas",
                            link: "/",
                        },
                        {
                            name: "Indian Hackamore",
                            link: "/",
                        },
                    ]
                },
                {
                    name: "Bull Whip or Latigo",
                    link: "/",
                },
                {
                    name: "Headstalls",
                    link: "/",
                },
                {
                    name: "Hondo - Rawhide",
                    link: "/",
                },
                {
                    name: "Indian Hackamore",
                    link: "/",
                },
                {
                    name: "Quirt (Whip)",
                    link: "/",
                },
                {
                    name: "Rein Connectors",
                    link: "/",
                },
                {
                    name: "Riata",
                    link: "/",
                },
                {
                    name: "Reins",
                    link: "/",
                    subItems: [
                        {
                            name: "Charro Reins",
                            link: "/",
                        },
                        {
                            name: "Romal Reins",
                            link: "/",
                        },
                        {
                            name: "Roping Reins",
                            link: "/",
                        },
                        {
                            name: "Split Reins",
                            link: "/",
                        },

                    ]
                },
                {
                    name: "Shoofly/Tassel",
                    link: "/",
                },
                {
                    name: "Straps",
                    link: "/",
                    subItems: [
                        {
                            name: "Curb Straps",
                            link: "/",
                        },
                        {
                            name: "Chin Straps",
                            link: "/",
                        },
                        {
                            name: "Slobber Straps",
                            link: "/",
                        },
                    ]
                },
            ]
        },
        {
            name: "Horse Hair",
            link: "/",
            items: [
                {
                    name: "Hat Bands",
                    link: "/",
                    subItems: [
                        {
                            name: "2 Strands",
                            link: "/",
                        },
                        {
                            name: "3 Strands",
                            link: "/",
                        },
                        {
                            name: "4 Strands",
                            link: "/",
                        },
                        {
                            name: "5 Strands",
                            link: "/",
                        },
                        {
                            name: "6 Strands",
                            link: "/",
                        },
                    ]
                },
                {
                    name: "Cinch",
                    link: "/",
                },
                {
                    name: "Fiador",
                    link: "/",
                },
                {
                    name: "Get Down Ropes",
                    link: "/",
                    subItems: [
                        {
                            name: "16 Feet",
                            link: "/",
                        },
                        {
                            name: "14 Feet",
                            link: "/",
                        },
                    ]
                },
                {
                    name: "Key Chains",
                    link: "/",
                },
                {
                    name: "Jewlery",
                    link: "/",
                    subItems: [
                        {
                            name: "Bracelets",
                            link: "/",
                        },
                        {
                            name: "Earrings",
                            link: "/",
                        },
                        {
                            name: "Sets",
                            link: "/",
                        },
                    ]
                },
                {
                    name: "Mecates (Mane Horse Hair)",
                    link: "/",
                    subItems: [
                        {
                            name: "4 Strands",
                            link: "/",
                        },
                        {
                            name: "6 Strands",
                            link: "/",
                        },
                        {
                            name: "8 Strands",
                            link: "/",
                        },
                    ]
                },
            ]
        },

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