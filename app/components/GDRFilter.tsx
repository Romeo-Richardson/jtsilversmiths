"use client";

import React, { useEffect, useState } from "react";
import { useMainStore } from "../utils/global";
import { useQuery } from "@tanstack/react-query";
import setQuery from "../utils/setQuery";
import { items } from "@prisma/client";
import { getItems } from "../utils/apiCalls";

const GDRFilter = (): React.ReactNode => {
  const [diameter, setDiameter] = useState<string>("All");
  const [color, setColor] = useState<string>("All");

  const diameters = ["All", "Diameter 1/4", "Diameter 3/8"];

  const colors = ["All", "Black", "Gray", "Brown (Sorrel)", "White", "Tan"];

  const { data } = useQuery<any>({
    queryKey: ["Items"],
    queryFn: () => getItems(),
  });

  const { setGDRFilter, setupQuery, currentlySelectedQuery, mainCategory } =
    useMainStore();

  const isDisabled = () => {
    if (!diameters || !color) {
      return false;
    } else return true;
  };

  return (
    <form className="flex items-center justify-evenly gap-20 bg-base-100 py-4 px-2">
      <div className="flex flex-col w-1/5">
        <p>Select Diameter</p>
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
      </div>
      <div className="flex flex-col w-1/5">
        <p>Select Color</p>
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
      </div>

      <button
        className="btn btn-primary"
        disabled={!isDisabled()}
        onClick={(e) => {
          e.preventDefault();
          console.log({ diameter, color });
          setGDRFilter({ diameter, color });
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
          setGDRFilter(null);
          setupQuery(data?.data);
        }}
      >
        Reset Filter
      </button>
    </form>
  );
};

export default GDRFilter;
