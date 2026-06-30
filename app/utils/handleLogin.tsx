"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  // Replace this with your real database/auth provider check
  if (email !== "admin@example.com" || password !== "password123") {
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
