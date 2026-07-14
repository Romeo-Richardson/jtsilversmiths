"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  // Replace this with your real database/auth provider check
  if (email !== "jtsilversmiths@yahoo.com" || password !== "713Jts2026") {
    redirect("/login?error=invalid");
  }

  const cookieStore = await cookies();

  cookieStore.set("session", "demo-session-token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/adminpanel");
}
