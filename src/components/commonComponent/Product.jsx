import Star from "./Star";
import { useVirtualizer } from "@tanstack/react-virtual";
import ProductSkeleton from "../Skeletion/ProductSkeleton";
import Container from "./Container";
import { useRef } from "react";
import { Link } from "react-router";

const Product = ({ productInfo, isLoading, isError }) => {
  const products = productInfo?.data?.products || productInfo?.products || [];

  if (isLoading) {
    return (
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          {[...new Array(8)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </Container>
    );
  }

  if (isError) {
    return <div>Error Loading Products</div>;
  }

  const parentRef = useRef(null);
  // const products = productInfo?.data?.products || [];

  const columns = 4;
  const rows = Math.ceil(products.length / columns);

  const rowVirtualizer = useVirtualizer({
    count: rows,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 360,
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: " 1200px",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
          width: "100%",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {

          const rowIndex = virtualRow.index;
          const items = products.slice(
            rowIndex * columns,
            rowIndex * columns + columns
          );

          return (
            <div
             key={`row-${virtualRow.index}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualRow.start}px)`
              }}
              className="flex gap-4 mt-4"
            >
              {items.map((product) => (
                <div
                  key={product.id}
                  className="w-[calc(25%-1rem)] hover:shadow-lg rounded-2xl transition-shadow duration-300 bg-white relative"
                >
                 <Link to={`/product/1${product.id}`} >
                  <div className="p-5 border border-gray_50 rounded-2xl">
                    <div className="flex flex-col items-start justify-start gap-y-3 relative">

                      <span className="absolute top-3 left-3 bg-red-500 text-white text-sm py-1 px-2 rounded z-10">
                        {product.discount ? `${product.discount}% OFF` : "HOT"}
                      </span>

                      <div className="relative w-[202px] h-[172px]">
                        <img
                          src={product.images?.[0]}
                          alt={product.title}
                          className="w-full h-full object-cover bg-gray-100 rounded"
                        />

                        <div className="absolute inset-0 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-black text-white px-4 py-2 rounded-full">
                            Add to Cart
                          </button>
                          <button className="bg-black text-red-500 px-3 py-2 rounded-full">
                            ❤️
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-x-1 mt-2">
                        <Star rating={product.rating} />
                        <span>({product.reviews?.length || 0})</span>
                      </div>

                      <h2 className="w-full truncate">{product.title}</h2>

                      <div className="flex gap-x-3">
                        <del>$1600</del>
                        <span>${product.price}</span>
                      </div>

                    </div>
                  </div>
                 
                 </Link>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;