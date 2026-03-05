import React from "react";
import { Virtuoso } from "react-virtuoso";

const CategoryItemList = ({ cItem = [],Caregoryfn }) => {

  return (
    <div className="h-[400px]">
      <p className="pt-6 pb-4">CATEGORY</p>
      <Virtuoso
        style={{ height: "100%" }}
        data={cItem}
        components={{
          Scroller: React.forwardRef((props, ref) => (
            <div
              {...props}
              ref={ref}
              className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            />
          )),
        }}
        itemContent={(_, item) => (
          <div className="flex items-center gap-x-3 py-2 px-2 cursor-pointer" key={item} onClick={()=> Caregoryfn (item)}>
            <input
              type="radio"
              id={item}
              name="citem"
              className="w-5 h-5"
            />
            <label
              htmlFor={item}
              className="body_sm_400 text-gray_600"
            >
              {item || "Computer Accessories"}
            </label>
          </div>
        )}
      />
    </div>
  );
};

export default CategoryItemList;
