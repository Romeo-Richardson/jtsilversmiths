import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Failed to recieve message" },
        { status: 500 },
      );
    }
    await prisma.$connect();
    const findItem = await prisma.inquiry.findFirst({
      where: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });
    if (!findItem) {
      return NextResponse.json({ error: "Failed to fiind inquiry" });
    }
    const deleteItem = await prisma.inquiry.delete({
      where: { id: findItem.id },
    });
    if (!deleteItem) {
      return NextResponse.json(
        { error: "Failed to delete item" },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { success: true, data: deleteItem },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
