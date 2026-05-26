"use client";

import React, { useEffect, useState } from "react";
import { useMainStore } from "../utils/global";
import { useQuery } from "@tanstack/react-query";
import setQuery from "../utils/setQuery";
import { items } from "@prisma/client";
import { getItems } from "../utils/apiCalls";

const RowelFilter = (): React.ReactNode => {
  const [rowelType, setRowelType] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const rowelTypes = [
    "Clover leaf rowels",
    "w/ Silver on outside the points",
    "w/ Silver dots on outside the points",
    "w/ Chevron Stripes + matching jingle bobs",
    "w/ Stripes engraved on points (w/o Silver)",
    "Lots & point",
    "Regular Rowels",
  ];

  const sizes = ["10 Inch Length", "12 Inch Length"];

  const colors = ["Black", "White"];

  const { data } = useQuery<any>({
    queryKey: ["Items"],
    queryFn: () => getItems(),
  });

  const { setRowelFilter, setupQuery, currentlySelectedQuery, mainCategory } =
    useMainStore();

  const isDisabled = () => {
    if (!rowelType || !size || !color) {
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
          setRowelType(e.currentTarget.value);
        }}
      >
        {rowelTypes.map((item, key) => {
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
          setSize(e.currentTarget.value);
        }}
      >
        {sizes.map((item, key) => {
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
          console.log({ rowelType, size, color });
          setRowelFilter({ rowelType, size, color });
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
          setSize("");
          setRowelType("");
          setRowelFilter(null);
          setupQuery(data?.data);
        }}
      >
        Reset Filter
      </button>
    </form>
  );
};

export default RowelFilter;
