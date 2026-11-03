"use client";

import React, { useEffect, useState } from "react";
import { useMainStore } from "../utils/global";
import { useQuery } from "@tanstack/react-query";
import setQuery from "../utils/setQuery";
import { items } from "@prisma/client";
import { getItems } from "../utils/apiCalls";

const ReinsFilter = (): React.ReactNode => {
  const [diameter, setDiameter] = useState<string>("All");
  const [color, setColor] = useState<string>("All");
  const [style, setStyle] = useState<string>("All");

  const diameterOptions: string[] = [
    "All",
    "Diameter 3/8",
    "Diameter 1/2",
    "Diameter 5/8",
  ];

  const colors: string[] = [
    "All",
    "Black",
    "Gray",
    "Brown (Sorrel)",
    "White",
    "Tan",
    "Blue",
    "Red",
  ];

  const styles: string[] = [
    "All",
    "w/ Rawhide Connector",
    "w/ Slobber Straps",
    "w/ Snaps",
  ];

  const { data } = useQuery<any>({
    queryKey: ["Items"],
    queryFn: () => getItems(),
  });

  const { setReinFilter, setupQuery, currentlySelectedQuery, mainCategory } =
    useMainStore();

  const isDisabled = () => {
    if (!diameter || !color) {
      return false;
    } else return true;
  };

  useEffect(() => {
    isDisabled();
  }, [diameter, color]);

  return (
    <form className="flex items-center justify-evenly gap-20 bg-base-100 py-4 px-2">
      <div className="flex flex-col w-1/5">
        <p>Select Diameter</p>
        <select
          className="select"
          name="Diameter"
          defaultValue={"All"}
          onChange={(e) => {
            setDiameter(e.currentTarget.value);
          }}
        >
          {diameterOptions.map((item, key) => {
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
          defaultValue={"All"}
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

      <div className="flex flex-col w-1/5">
        <p>Select Style</p>
        <select
          className="select"
          name="Color"
          defaultValue={"All"}
          onChange={(e) => {
            setColor(e.currentTarget.value);
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

      <button
        className="btn btn-primary"
        disabled={!isDisabled()}
        onClick={(e) => {
          e.preventDefault();
          console.log({ diameter, color });
          setReinFilter({ diameter, color, style });
          setupQuery(data?.data);
        }}
      >
        Filter
      </button>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          setColor("All");
          setDiameter("All");
          setReinFilter(null);
          setupQuery(data?.data);
        }}
      >
        Reset Filter
      </button>
    </form>
  );
};

export default ReinsFilter;
