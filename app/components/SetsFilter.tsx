"use client";

import React, { useEffect, useState } from "react";
import { useMainStore } from "../utils/global";
import { useQuery } from "@tanstack/react-query";
import setQuery from "../utils/setQuery";
import { items } from "@prisma/client";
import { getItems } from "../utils/apiCalls";

const SetsFilter = (): React.ReactNode => {
  const [style, setStyle] = useState<string>("1 Strand");
  const [color, setColor] = useState<string>("Black");

  const styles: string[] = ["Round", "Tiny Bosalita", "Tiny Tassel"];

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

  const { setEarringFilter, setupQuery, currentlySelectedQuery, mainCategory } =
    useMainStore();

  const isDisabled = () => {
    if (!style || !color) {
      return false;
    } else return true;
  };

  useEffect(() => {
    isDisabled();
  }, [style, color]);

  return (
    <form className="flex items-center justify-evenly gap-20 bg-base-100 py-4 px-2">
      <div className="flex flex-col w-1/5">
        <p>Select Style</p>
        <select
          className="select"
          name="Diameter"
          defaultValue={"1 Strand"}
          onChange={(e) => {
            setStyle(e.currentTarget.value);
          }}
        >
          {styles.map((item, key) => {
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
          console.log({ style, color });
          setEarringFilter({ style, color });
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
          setStyle("");
          setEarringFilter(null);
          setupQuery(data?.data);
        }}
      >
        Reset Filter
      </button>
    </form>
  );
};

export default SetsFilter;
