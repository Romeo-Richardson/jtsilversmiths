import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req: NextRequest) => {
    try {
        await prisma.$connect()
        const allItems = await prisma.items.findMany()
        if (!allItems) {
            return NextResponse.json({ error: "Failed to get item" }, { status: 500 })
        }
        allItems.forEach(async (item) => {
            console.log(item)
            if (item.categories.includes("Bit") || item.categories.includes("Bits")) {
                await prisma.items.update({ where: { name: item.name }, data: { categories: { push: "Horse Bit" } } })
            }
        })
        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}