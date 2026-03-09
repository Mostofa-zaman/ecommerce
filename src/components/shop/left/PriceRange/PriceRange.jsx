import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceRange = ({ priceRange, setPriceRange }) => {
  const [value, setValue]= useState(30,60);
  const[debouncedValue, setDebouncedValue] = useState(value);
  const priceRanges = [
    { label: "All Price", range: [0, 1000] },
    { label: "Under $20", range: [0, 20] },
    { label: "$25 to $100", range: [25, 100] },
    { label: "$100 to $300", range: [100, 300] },
    { label: "$300 to $500", range: [300, 500] },
    { label: "$500 to $1,000", range: [500, 1000] },
  ];
  // debounced effect 3 second
useEffect(()=>{
  const timer = setTimeout(()=>{
  setDebouncedValue(value);
  console.log("debounced value" ,value)
  },3000)
  return () => clearTimeout(timer); 
},[value])
console.log(value)

  const handleSlider = (value) => {
    setPriceRange(value);
  };

  const handleRadio = (range) => {
    setPriceRange(range);
  };

  return (
    <div className="pt-20 flex flex-col gap-y-4">
      <h2 className="pb-4 font-semibold">PRICE RANGE</h2>

      <RangeSlider
        min={0}
        max={1000}
        step={10}
        value={priceRange}
        onInput={handleSlider}
      />

    <div className="flex justify-between text-lg font-medium text-gray-700">
  <span>Min: ${priceRange[0]}</span>
  <span>Max: ${priceRange[1]}</span>
</div>

      <ul className="flex flex-col gap-y-3 cursor-pointer">
        {priceRanges.map((price, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <input
              type="radio"
              name="priceRange"
              onChange={() => handleRadio(price.range)}
            />
            <label>{price.label}</label>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PriceRange;