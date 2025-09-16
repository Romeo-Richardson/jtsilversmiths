import prisma from "@/prisma"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        await prisma.$connect()
        const { firstName, lastName, email, subject, message } = await req.json()
        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json({ error: "Failed to recieve inquiry" }, { status: 500 })
        }
        const newInquiry = await prisma.inquiry.create({ data: { firstName, lastName, email, subject, message } })
        if (!newInquiry) {
            return NextResponse.json({ error: "Failed to create new inquiry" }, { status: 500 })
        }
        return NextResponse.json({ data: newInquiry }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error }, { status: 500 })
    }
}