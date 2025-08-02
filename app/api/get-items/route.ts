import prisma from "@/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await prisma.$connect()
        const items = await prisma.items.findMany()
        if (!items) {
            return NextResponse.json({ error: "Failed to get items" }, { status: 500 })
        }
        return NextResponse.json({ data: items }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}