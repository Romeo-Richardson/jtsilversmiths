import prisma from "@/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await prisma.$connect()
        const getItems = await prisma.items.updateMany({ where: { asIsWithCopperHoodAndCricket: "Yes" }, data: { price: 90 } })
        if (!getItems) {
            return NextResponse.json({ error: "Failed to change price" }, { status: 500 })
        }
        return NextResponse.json({ data: getItems }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}