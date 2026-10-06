"use client";

import React, { useEffect } from "react";
import { logout } from "../utils/handleLogin";
import { redirect } from "next/navigation";

const page = (): React.ReactNode => {
  useEffect(() => {
    logout();
    redirect("/");
  }, []);
  return <div>Logging out...</div>;
};

export default page;
