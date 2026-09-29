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
      where: {
        asIsSize: `3/8" wide. TWO Tassels. Hitch knot allows adjusting the size of hat band.`,
      },
      data: {
        asIsSize: `3/8" wide. TWO 3-1/2" Tassels. 1/2" Hitch knot allows adjusting the size of hat band.`,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
