import React, { useState } from "react";
import Container from "../../commonComponent/Container";
import { imagesProvider } from "../../../helpers/imgProvider";
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

  // onclick menu
  const handleCategoryMenu = (item) => {
    setSelectedCategory(item);
  };

  return (
    <section>
      <Container>
        <div className="grid grid-cols-[23%_75%] justify-between gap-4">
          {/* Left image/banner */}
          <div className="w-full h-[820px]">
            <picture className="w-full h-full">
              <img
                src={imagesProvider.ProductVariant}
                alt="Product Variant"
                className="w-full h-full"
              />
            </picture>
          </div>

          {/* Right content */}
          <div>
            {/* Header */}
            <div className="cursor-pointer body_sm_600 flex items-center justify-between mb-6">
              <h2>Featured Products</h2>
              <div className="flex items-center gap-x-4">
                <h2
                  className="cursor-pointer body_sm_600"
                  onClick={() => setSelectedCategory("")}
                >
                  All Products
                </h2>

                {data?.data?.slice(0, 8).map((item, index) => (
                  <h3
                    key={`category-${index}`}
                    className="cursor-pointer body_sm_600"
                    onClick={() => handleCategoryMenu(item)}
                  >
                    {item}
                  </h3>
                ))}
              </div>
            </div>

            {/* Product grid */}
            <Product
              isLoading={
                selectedCategory ? iscategoryLoading : isproductLoading
              }
              isError={selectedCategory ? categoryerror : producterror}
              productInfo={{
                products: selectedCategory
                  ? categoryData?.products || []
                  : productData?.products || [],
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductVariant;
