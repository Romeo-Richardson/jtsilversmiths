"use client"

import React, { useEffect, useState } from 'react'
import { useMainStore } from '../utils/global'
import { useQuery } from '@tanstack/react-query'
import setQuery from '../utils/setQuery'
import { items } from '@prisma/client'
import { getItems } from '../utils/apiCalls'

const BosalFilter = (): React.ReactNode => {
    const [plait, setPlait] = useState<string>("")
    const [diameter, setDiameter] = useState<string>("")
    const [color, setColor] = useState<string>("")

    const plaits = ["8 Plait", "12 Plait", "16 Plait"]

    const diameters = [`Diameter 1/4`, `Diameter 3/8`, `Diameter 1/2`, `Diameter 5/8`, `Diameter 3/4`]

    const colors = ["Rawhide w/ Black", "Rawhide w/ Chocolate", "Rawhide w/ Black & Red Detail"]

    const { data } = useQuery<any>({ queryKey: ["Items"], queryFn: () => getItems() })

    const { setBosalFilter, setupQuery } = useMainStore()




    return (
        <form className='flex items-center justify-center gap-12 bg-base-100 py-4'>
            <select className='select' name="Plait" onClick={(e) => { setPlait(e.currentTarget.value) }}>
                {
                    plaits.map((item, key) => {
                        return <option key={key} value={item}>{item}</option>
                    })
                }
            </select>
            <select className='select' name="Diameter" onClick={(e) => { setDiameter(e.currentTarget.value) }}>
                {
                    diameters.map((item, key) => {
                        return <option key={key} value={item}>{item}</option>
                    })
                }
            </select>
            <select className='select' name="Color" onClick={(e) => { setColor(e.currentTarget.value) }}>
                {
                    colors.map((item, key) => {
                        return <option key={key} value={item}>{item}</option>
                    })
                }
            </select>
            <button onClick={(e) => {
                e.preventDefault()
                setBosalFilter({ plait, diameter, color })
                setupQuery(data?.data)
            }}>Filter</button>
        </form>
    )
}

export default BosalFilter