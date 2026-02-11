import React from "react";

const CategoryItemList = ({ cItem = [] }) => {
  return (
    <div >
      {cItem?.map((item) => (
        <div className="flex items-center gap-x-3 py-1  px-1 cursor-pointer" key={item}>
          <input type="radio" id={item} name="citem" className="w-5 h-5 bg-primary_500" />
          <label for={item} name="citem" className="body_sm_400 text-gray_600">{item || "Computer Accessories"}</label>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemList;
