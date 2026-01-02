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
<<<<<<< Updated upstream
            if (item.categories.includes("Diamter 1/2") && item.categories.includes("Latigo")) {
                await prisma.items.update({ where: { name: item.name }, data: { asIsSize: "~ 11 1/2 x 5 1/2" } })
=======
            console.log(item)
            // if (item.categories.includes("Bosalitas")) {
            //     await prisma.items.update({ where: { name: item.name }, data: { categories: { push: "Diameter 1/4" } } })
            // }
            if (item.asIsSize?.includes("(inside measurement)")) {
                await prisma.items.update({ where: { name: item.name }, data: { asIsSize: "" } })
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            }
        })
        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}