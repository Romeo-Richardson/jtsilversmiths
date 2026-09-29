"use client";

import React, { useEffect, useState } from "react";
import { useMainStore } from "../utils/global";
import { useQuery } from "@tanstack/react-query";
import setQuery from "../utils/setQuery";
import { items } from "@prisma/client";
import { getItems } from "../utils/apiCalls";

const BraceletsFilter = (): React.ReactNode => {
  const [strands, setStrands] = useState<string>("1 Strand");
  const [color, setColor] = useState<string>("Black");

  const strandOptions: string[] = [
    "1 Strand",
    "2 Strands",
    "3 Strands",
    "4 Strands",
    "5 Strands",
  ];

  const colors: string[] = [
    "Black",
    "Gray",
    "Brown (Sorrel)",
    "White",
    "Tan",
    "Blue",
    "Red",
  ];

  const { data } = useQuery<any>({
    queryKey: ["Items"],
    queryFn: () => getItems(),
  });

  const {
    setBraceletFilter,
    setupQuery,
    currentlySelectedQuery,
    mainCategory,
  } = useMainStore();

  const isDisabled = () => {
    if (!strands || !color) {
      return false;
    } else return true;
  };

  useEffect(() => {
    isDisabled();
  }, [strands, color]);

  return (
    <form className="flex items-center justify-evenly gap-20 bg-base-100 py-4 px-2">
      <div className="flex flex-col w-1/5">
        <p>Strands</p>
        <select
          className="select"
          name="Diameter"
          defaultValue={"1 Strand"}
          onChange={(e) => {
            setStrands(e.currentTarget.value);
          }}
        >
          {strandOptions.map((item, key) => {
            return (
              <option key={key} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col w-1/5">
        <p>Select Color</p>
        <select
          className="select"
          name="Color"
          defaultValue={"Black"}
          onChange={(e) => {
            setColor(e.currentTarget.value);
          }}
        >
          {colors.map((item, key) => {
            return (
              <option key={key} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <button
        className="btn btn-primary"
        disabled={!isDisabled()}
        onClick={(e) => {
          e.preventDefault();
          console.log({ strands, color });
          setBraceletFilter({ strands, color });
          setupQuery(data?.data);
        }}
      >
        Filter
      </button>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          setColor("");
          setStrands("");
          setBraceletFilter(null);
          setupQuery(data?.data);
        }}
      >
        Reset Filter
      </button>
    </form>
  );
};

export default BraceletsFilter;
