"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useTransition } from "react";
import { getInquiries } from "../utils/apiCalls";
import Inquiry from "../components/Inquiry";

import { useMainStore } from "../utils/global";
import authenticationLayer from "../utils/authLayer";

const page = (): React.ReactNode => {
  const [isPending, startTransition] = useTransition();
  const { data, isFetched, refetch } = useQuery({
    queryKey: ["Inquiries"],
    queryFn: () => getInquiries(),
  });

  const { setReloadMessages, reloadMessages } = useMainStore();

  if (isFetched) {
    console.log(data);
  }

  useEffect(() => {
    startTransition(async () => {
      try {
        await authenticationLayer();
      } catch {
        console.log("error");
      }
    });
  }, []);

  useEffect(() => {
    if (reloadMessages) {
      refetch();
      setReloadMessages(false);
    }
  }, [reloadMessages]);
  return (
    <>
      <div className="flex flex-col items-center p-8 gap-8">
        {data &&
          data.data.map((item: any, key: number) => {
            return (
              <Inquiry
                key={key}
                id={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                subject={item.subject}
                message={item.message}
                phoneNumber={item.phoneNumber}
                date={item.date}
              ></Inquiry>
            );
          })}
      </div>
    </>
  );
};

export default page;
