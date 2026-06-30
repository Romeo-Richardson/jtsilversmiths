"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const authCheck = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) {
    return false;
  } else return true;
};

export default authCheck;
