"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const TanstackProvider = ({ children }: { children: any }) => {

    const [client] = useState(new QueryClient())
    return (
        <>
            <QueryClientProvider client={client}>
                <Toaster>
                    {children}
                </Toaster>
            </QueryClientProvider>
        </>
    )
}

export default TanstackProvider