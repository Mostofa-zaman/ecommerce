import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const PriceRange = () => {
  const [value, setValue] = useState([30, 60]);
  const priceRanges = [
    { label: "All Price", value: "all" },
    { label: "Under $20", value: "under_20" },
    { label: "$25 to $100", value: "25_100" },
    { label: "$100 to $300", value: "100_300" },
    { label: "$300 to $500", value: "300_500" },
    { label: "$500 to $1,000", value: "500_1000" },
    { label: "$1,000 to $10,000", value: "1000_10000" },
  ];
  return (
    <div className="pt-4 flex flex-col gap-y-4">
      <h2 className="pb-4">Price Range</h2>
      <RangeSlider id="range-slider-yellow" />
      {/* button */}
      <div className="flex justify-between items-center mt-4">
        <button className="border border-gray_100 grow mr-2 py-2 cursor-pointer">
          Min price
        </button>
        <button className="border border-gray_100 grow ml-2 py-2 cursor-pointer">
          Max price
        </button>
      </div>
      {/* price list */}

      <ul className="flex flex-col gap-y-3 cursor-pointer">
        {priceRanges?.map((price) => (
          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              value={price.value}
              id={price.label}
              name="priceRange"
            />
            <label
              className="body_sm_600 text-gray_600 cursor-pointer"
              htmlFor={price.label}
              name="priceRange"
            >
              {price.label}
            </label>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PriceRange;
