"use client";

import React, { useEffect, useState } from "react";
import { useMainStore } from "../utils/global";
import { useQuery } from "@tanstack/react-query";
import setQuery from "../utils/setQuery";
import { items } from "@prisma/client";
import { getItems } from "../utils/apiCalls";

const MecateFilter = (): React.ReactNode => {
  const [length, setLength] = useState<string>("");
  const [diameter, setDiameter] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const lengths: string[] = ["22 Feet", "24 Feet"];

  const diameters = [
    `Diameter 1/4`,
    `Diameter 3/8`,
    `Diameter 1/2`,
    `Diameter 5/8`,
    `Diameter 3/4`,
  ];

  const colors = [
    "Black",
    "Gray",
    "Brown (Sorrel)",
    "White",
    "Blue",
    "Green",
    "Pink",
    "Purple",
    "Red",
    "Yellow",
    "Tan",
  ];

  const { data } = useQuery<any>({
    queryKey: ["Items"],
    queryFn: () => getItems(),
  });

  const { setMecateFilter, setupQuery, currentlySelectedQuery, mainCategory } =
    useMainStore();

  const isDisabled = () => {
    if (!length || !diameter || !color) {
      return false;
    } else return true;
  };

  return (
    <form className="flex items-center justify-center gap-12 bg-base-100 py-4 px-2">
      <select
        className="select"
        defaultValue={""}
        name="Plait"
        onClick={(e) => {
          setLength(e.currentTarget.value);
        }}
      >
        {lengths.map((item, key) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <select
        className="select"
        name="Diameter"
        defaultValue={""}
        onClick={(e) => {
          setDiameter(e.currentTarget.value);
        }}
      >
        {diameters.map((item, key) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <select
        className="select"
        name="Color"
        defaultValue={""}
        onClick={(e) => {
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
      <button
        className="btn btn-primary"
        disabled={!isDisabled()}
        onClick={(e) => {
          e.preventDefault();
          console.log({ length, diameter, color });
          setMecateFilter({ length, diameter, color });
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
          setDiameter("");
          setLength("");
          setMecateFilter(null);
          setupQuery(data?.data);
        }}
      >
        Reset Filter
      </button>
    </form>
  );
};

export default MecateFilter;
