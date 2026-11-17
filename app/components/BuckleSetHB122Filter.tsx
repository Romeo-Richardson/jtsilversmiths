"use client";

import React, { useEffect, useState } from "react";
import { useMainStore } from "../utils/global";
import { useQuery } from "@tanstack/react-query";
import setQuery from "../utils/setQuery";
import { items } from "@prisma/client";
import { getItems } from "../utils/apiCalls";

const BuckleSetsHB122Filter = (): React.ReactNode => {
  const [color, setColor] = useState<string>("All");

  const colors: string[] = ["All", "Yellow", "Pink", "Blue", "Red", "Green"];

  const { data } = useQuery<any>({
    queryKey: ["Items"],
    queryFn: () => getItems(),
  });

  const {
    setReinFilter,
    setupQuery,
    setBuckSetHB122Filter,
    currentlySelectedQuery,
    mainCategory,
  } = useMainStore();

  const isDisabled = () => {
    if (!color) {
      return false;
    } else return true;
  };

  useEffect(() => {
    isDisabled();
  }, [color]);

  return (
    <form className="flex items-center justify-evenly gap-20 bg-base-100 py-4 px-2">
      <div className="flex flex-col w-1/5"></div>

      <div className="flex flex-col w-1/5">
        <p>Select Stone Color</p>
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

      <button
        className="btn btn-primary"
        disabled={!isDisabled()}
        onClick={(e) => {
          e.preventDefault();
          console.log({ color });
          setBuckSetHB122Filter({ color });
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
          setBuckSetHB122Filter(null);
          setupQuery(data?.data);
        }}
      >
        Reset Filter
      </button>
    </form>
  );
};

export default BuckleSetsHB122Filter;
