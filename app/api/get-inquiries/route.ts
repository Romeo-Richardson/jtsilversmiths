import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
    try {
        await prisma.$connect()
        const inquiries = await prisma.inquiry.findMany()
        if (!inquiries) {
            return NextResponse.json({ error: "Failed to get inquiries" }, { status: 500 })
        }
        else return NextResponse.json({ success: true, data: inquiries }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}