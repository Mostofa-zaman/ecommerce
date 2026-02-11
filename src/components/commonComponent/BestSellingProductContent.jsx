import React from "react";

export const BestSellingProductContent = ({productlist , title}) => {
  return (
  <div className="">
      <div className="flex flex-col gap-y-4">
      <h1 className="body_md_600 text-gray_900 mb-5 uppercase ">{title}</h1>
      {/* product details */}
    {productlist.map((p)=>(
         <div className="grid grid-cols-[30%70%] border border-gray_50 px-3 py-2">
        <img
        loading="lazy"
          src={p.images [0]}
          className="w-[80px] h-[80px] object-center object-cover bg-blend-color-dodge"
          alt=""
        />
        <div className="">
          <h3 className="body_sm_400 text-gray_900 w-fit truncate">
            {p.title}
           
          </h3>
          <p>{p.price}</p>
        </div>
      </div>
    ))}
     
    </div>
  </div>
  );
};
