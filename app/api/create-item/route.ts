import prisma from "@/prisma"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        await prisma.$connect()
        const { name, price, image } = await req.json()
        const newItem = await prisma.items.create({ data: { name, price, image } })
        if (!newItem) {
            return NextResponse.json({ error: "Failed to create new item" }, { status: 500 })
        }
        return NextResponse.json({ ...newItem }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}