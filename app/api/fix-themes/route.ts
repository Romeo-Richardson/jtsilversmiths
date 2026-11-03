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

    allItems.forEach(async (x) => {
      if (x.categories.includes("Split Reins")) {
        await prisma.items.update({
          where: { id: x.id },
          data: { categories: { push: "Diameter 3/8" } },
        });
      }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
