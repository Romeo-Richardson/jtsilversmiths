"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const authenticationLayer = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) {
    redirect("/login");
  }
};

export default authenticationLayer;
