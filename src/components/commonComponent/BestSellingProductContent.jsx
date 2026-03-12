import React from "react";

export const BestSellingProductContent = ({ productlist, title }) => {
  if (!productlist || productlist.length === 0) {
    return (
      <div>
        <h1 className="body_md_600 text-gray_900 mb-5 uppercase">{title}</h1>
        <p className="text-gray_500">No products available</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <h1 className="body_md_600 text-gray_900 mb-5 uppercase">{title}</h1>

        {/* product details */}
        {productlist.map((p, index) => (
          <div
            key={index}
            className="grid grid-cols-[30%_70%] border border-gray_50 px-3 py-2"
          >
            <img
              loading="lazy"
              src={p.images?.[0]}
              className="w-[80px] h-[80px] object-cover object-center bg-blend-color-dodge"
              alt={p.title || "product"}
            />

            <div>
              <h3 className="body_sm_400 text-gray_900 w-fit truncate">
                {p.title}
              </h3>
              <p>${p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};