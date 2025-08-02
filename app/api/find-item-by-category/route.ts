import prisma from "@/prisma"
import { error } from "console"
import { NextResponse } from "next/server"


export const POST = async (req: Request) => {
    try {
        await prisma.$connect()
        const { category } = await req.json()
        if (!category) {
            return NextResponse.json({ error: "Category not provided" })
        }
        const items = await prisma.items.findMany()
        if (!items) {
            return NextResponse.json({ error: "Failed to get items" }, { status: 500 })
        }
        console.log(items)
        const findItems = items.map((item) => {
            if (item.categories.includes(category)) {
                return item
            }
        })
        console.log(findItems)
        return NextResponse.json({ data: findItems }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}