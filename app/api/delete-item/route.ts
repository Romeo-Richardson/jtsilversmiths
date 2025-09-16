import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"


const POST = async (req: NextRequest) => {
    try {
        const { name } = await req.json()
        if (!name) {
            return NextResponse.json({ error: "Failed to get item info" }, { status: 500 })
        }
        await prisma.$connect()
        const deletedItem = await prisma.items.delete({ where: { name: name } })
        if (!deletedItem) {
            return NextResponse.json({ success: true, deletedItem }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}