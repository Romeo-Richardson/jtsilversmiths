"use client";

import axios from "axios";
import React, { useEffect, useTransition } from "react";
import toast from "react-hot-toast";
import authenticationLayer from "../utils/authLayer";

const page = (): React.ReactNode => {
  const [isPending, startTransition] = useTransition();
  const deleteItem = async (name: FormDataEntryValue | null) => {
    const { data } = await axios.post("/api/delete-item", { name });
    data ? console.log(data) : console.log("Failed to delete item");
  };

  useEffect(() => {
    startTransition(async () => {
      try {
        await authenticationLayer();
      } catch {
        console.log("error");
      }
    });
  }, []);

  return (
    <>
      <form
        className="flex flex-col items-center justify-center min-h-screen gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const item = formData.get("item");
          toast.promise(deleteItem(item), {
            success: "Item Deleted",
            loading: "Deleting item...",
            error: "Failed to delete item",
          });
        }}
      >
        <p>Item Name</p>
        <input className="input" name="item" type="text" />
        <button className="btn btn-primary" type="submit">
          Delete Item
        </button>
      </form>
    </>
  );
};

export default page;
