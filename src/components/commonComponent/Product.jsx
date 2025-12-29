import React from "react";
import { FaStar } from "react-icons/fa";
import Star from "./Star";
import ProductSkeleton from "../Skeletion/ProductSkeleton";
import Container from "./Container";

const Product = ({ productInfo, isloading,isError }) => {
  if (isloading) {
    return (
      <Container>
        <div className="">
       <div className="flex flex-wrap justify-between  items-center">
        {[...new Array(8)].map((_,index)=>(
          
          <div key={index}>
           <ProductSkeleton />
        </div>
        ))}
       </div>
      </div>
      </Container>
    );
  }
  if (isError) {
    return (
      <div>
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Something's missing.
              </p>
              <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can't find that page. You'll find lots to explore on
                the home page.{" "}
              </p>
              <a
                href="#"
                class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                >
                Back to Homepage
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
  <div className="flex flex-wrap gap-4 mt-10 ">
  {productInfo.data.products.slice(0,8).map((product) => (
    <div
      key={product.id}
      className="  w-[calc(25%-1rem)] hover:shadow-lg hover: rounded-2xl transition-shadow duration-300 bg- "
    >
      <div className="p-5 border border-gray_50 rounded-2xl">
        <div className="flex flex-col items-start justify-start gap-y-3">
          <span className="py-1.5 px-2.5 bg-danger_500 text-white text-sm">
            HOT
          </span>

          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-[202px] h-[172px] object-cover bg-gray-100 rounded"
          />

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
    </div>
  ))}
</div>


  );
};

export default Product;
