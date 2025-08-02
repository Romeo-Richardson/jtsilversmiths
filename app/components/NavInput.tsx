"use client"

import React from 'react'
import { useMainStore } from '../utils/global'
import setQuery from '../utils/setQuery'
import { useQuery } from '@tanstack/react-query'
import { getItems } from '../utils/apiCalls'

const NavInput = (): React.ReactNode => {
    const { setSearchQueryInput, setCurrentlySelectedQuery, setupQuery } = useMainStore()
    const { data } = useQuery({ queryKey: ["items"], queryFn: getItems })
    return (
        <form className='my-4' onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            setCurrentlySelectedQuery(null)
            setSearchQueryInput(formData.get("searchQuery"))
            setupQuery(data.data)
        }}>
            <label className="input">
                <button type="submit">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                </button>
                <input name='searchQuery' type="search" className="grow" placeholder="Search" />
            </label>
        </form>
    )
}

export default NavInput