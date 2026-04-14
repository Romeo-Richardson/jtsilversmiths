import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getInquiries } from "../utils/apiCalls";
import { inquiry } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import { useMainStore } from "../utils/global";

const Inquiry = ({
  firstName,
  lastName,
  email,
  subject,
  message,
  phoneNumber,
  date,
}: inquiry): React.ReactNode => {
  const deleteItem = async () => {
    const { data } = await axios.post("/api/delete-message", {
      firstName,
      lastName,
      email,
      subject,
      message,
      phoneNumber,
      date,
    });
    setReloadMessages(true);
    console.log(data);
  };

  const { setReloadMessages } = useMainStore();

  return (
    <div className="bg-base-100 text-primary-content w-4/5 h-auto p-8 flex flex-col  rounded shadow-sm shadow-gray-400">
      <p>
        <strong>Name:</strong> {`${firstName} ${lastName}`}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
      <button
        className=" btn btn-primary mt-4 p-2"
        onClick={() => {
          toast.promise(deleteItem(), {
            success: "Message Deleted",
            error: "Failed to delete message",
            loading: "Deleting item...",
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Inquiry;
