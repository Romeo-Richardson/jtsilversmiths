"use client";

import React, { useEffect } from "react";
import { logout } from "../utils/handleLogin";
import { redirect } from "next/navigation";
import { useMainStore } from "../utils/global";

const page = (): React.ReactNode => {
    const {} = useMainStore()
  useEffect(() => {
    logout();
    redirect("/");
  }, []);
  return <div>Logging out...</div>;
};

export default page;
