
import prisma from "@/prisma"
import { Prisma } from "@prisma/client"
import { NextResponse } from "next/server"



export const GET = async () => {
    try {
        await prisma.$connect()
        const prices = await prisma.item_prices.findMany()
        if (!prices) {
            return NextResponse.json({ error: "Failed to get prices" }, { status: 500 })
        }
        prices.forEach(async (item) => {
            if (item.Product_Id && await prisma.items.findFirst({ where: { Product_Id: item.Product_Id } })) {
                await prisma.items.update({ where: { Product_Id: item.Product_Id }, data: { Product_Price: item.Product_Price } })
            }
        })
        const updatedItems = await prisma.items.findMany()
        if (!updatedItems) {
            return NextResponse.json({ error: "Failed" }, { status: 500 })
        }
        return NextResponse.json({ prices }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 200 })
    }
}