import React, { useState } from "react";
import Container from "../../commonComponent/Container";
import { imagesProvider } from "../../../helpers/ImgProvider";
import {
  useCategory,
  usegetproductbycategory,
  useProduct,
} from "../../../hooks/useCategory";
import Product from "../../commonComponent/Product";

const ProductVariant = () => {
  const { data } = useCategory();
  const {
    isPending: isproductLoading,
    error: producterror,
    data: productData,
  } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    isPending: iscategoryLoading,
    error: categoryerror,
    data: categoryData,
  } = usegetproductbycategory(selectedCategory);

  //  onclick menu
  const handleCategoryMenu = (item) => {
    setSelectedCategory(item);
  };
  // console.log('categoryData',categoryData?.data?.products)

  return (
    <section>
      <Container>
        <div className="grid grid-cols-[22%75%] justify-between gap-4">
          <div className="w-full  ">
            <picture className="w-full ">
              <img
                src={imagesProvider.ProductVariant}
                alt="Product Variant"
                className="w-full  object-cover"
              />
            </picture>
          </div>

          <div className=" ">
            {/* head part */}
            <div className=" cursor-pointer body_sm_600 flex  items-center justify-between">
              <h2>Featured Products</h2>
              <div className="flex gap-x-4 items-center  ">
                <h2 className="cursor-pointer body_sm_600">All Product</h2>
                {data?.data?.slice(0, 8).map((item) => (
                  <h3
                    className="cursor-pointer body_sm_600"
                    onClick={() => handleCategoryMenu(item)}
                  >
                    {item}
                  </h3>
                ))}
              </div>
            </div>
            {/* tail part */}
            <div className="flex flex-wrap justify-between  ">
              {selectedCategory ? (
                <Product
                  isloading={iscategoryLoading}
                  isError={categoryerror}
                  productInfo={categoryData}
                />
              ) : (
                <Product
                  isloading={isproductLoading}
                  isError={producterror}
                  productInfo={productData}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductVariant;
