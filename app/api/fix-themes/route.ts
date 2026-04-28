import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await prisma.$connect();
    const allItems = await prisma.items.findMany();
    if (!allItems) {
      return NextResponse.json(
        { error: "Failed to get item" },
        { status: 500 },
      );
    }

    await prisma.items.updateMany({
      where: { categories: { has: "12 Inch Length" } },
      data: { categories: { push: "Tassel Style 1" } },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
