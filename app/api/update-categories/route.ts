
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
    try {
        const { name, categories } = await req.json()

        console.log(name)
        console.log(categories)
        if (!categories) {
            return NextResponse.json({ error: "Failed to get catgories" }, { status: 500 })
        }
        await prisma.$connect()
        const updateCategories = await prisma.items.update({ where: { name: name }, data: { categories: [...categories] } })
        if (!updateCategories) {
            return NextResponse.json({ error: "Failed to get categories" }, { status: 500 })
        }
        return NextResponse.json({ success: true, data: updateCategories }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}