import { useState } from "react";
import BreadCrumb from "../components/commonComponent/BreadCrumb";
import Container from "../components/commonComponent/Container";
import Product from "../components/commonComponent/Product";
import CategoryItemList from "../components/shop/left/category/CategoryItemList";
import CategoryList from "../components/shop/left/category/CategoryList";
import PopularBrand from "../components/shop/left/PopularBrand/PopularBrand";
import PopularTags from "../components/shop/left/PopularTag/PopularTags";
import PriceRange from "../components/shop/left/PriceRange/PriceRange";
import SearchTab from "../components/shop/right/SearchTab";
import { imagesProvider } from "../helpers/imgProvider";
import { useCategory, usegetproductbycategory, useProduct } from "../hooks/useCategory";
import ErrorPage from "../components/commonComponent/error/Error";
import ProductSkeleton from "../components/Skeletion/ProductSkeleton";

const Shop = () => {
  const [searchitemCategory, setSearchitemCategory] = useState(null);
  const [category, setCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState(null);
  const [search, setSearch] = useState("");

  const {
    isPending: categoryListPending,
    error: categoryListError,
    data: categoryListData,
  } = useCategory();

  const {
    isPending: productPending,
    error: productError,
    data: productData,
  } = useProduct();
  const {isPending:filterPending, error:filterError, data:filterData, refetch }=usegetproductbycategory(searchitemCategory)

   const handleCategory = ( item)=>{
    setSearchitemCategory(item)
  }



  if (categoryListPending || productPending) {
    return <ProductSkeleton />;
  }

  if (categoryListError) {
    return <ErrorPage  massage={categoryListError.massage} onRefetch={refetch}/>;
  }

  // all products
  const products = productData?.data?.products || [];

  // filtering system
  const filteredProducts = products
    ?.filter((item) => {
      if (!category) return true;
      return item.category === category;
    })
    ?.filter((item) => {
      return item.price >= priceRange[0] && item.price <= priceRange[1];
    })
    ?.filter((item) => {
      if (!rating) return true;
      return item.rating >= rating;
    })
    ?.filter((item) => {
      if (!search) return true;
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
  console.log(category);
  console.log(filterData);


  return (
    <div>
      <BreadCrumb />
      <Container>
        <div className="grid grid-cols-[25%75%] gap-6">
          {/* LEFT SIDE */}
          <div>
            <CategoryList>
              <CategoryItemList
                cItem={[...categoryListData.data]}
                Caregoryfn={handleCategory}
              />
            </CategoryList>
            <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
            {/* Rating */}
            <div className="pt-10">
              <h2 className="pb-3 font-semibold">Rating</h2>
              {[5, 4, 3, 2].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer"
                  onClick={() => setRating(item)}
                >
                  ⭐ {item} Star & Up
                </div>
              ))}
            </div>
            <PopularBrand />
            <PopularTags />
            <div className="bg-gray_100 w-full my-6">
              <img
                src={imagesProvider.shopleftimg}
                alt="watch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div>
            <SearchTab setSearch={setSearch} />

            {/* Active Filters */}
            <div className="flex items-center bg-gray_50 py-4 px-4">
              <div className="flex items-center gap-x-4">
                {category && (
                  <div className="flex gap-x-2 bg-white px-2 py-1">
                    Category: {category}
                    <span
                      className="cursor-pointer"
                      onClick={() => setCategory(null)}
                    >
                      ❌
                    </span>
                  </div>
                )}

                {rating && (
                  <div className="flex gap-x-2 bg-white px-2 py-1">
                    Rating: {rating} Star
                    <span
                      className="cursor-pointer"
                      onClick={() => setRating(null)}
                    >
                      ❌
                    </span>
                  </div>
                )}

                <div className="flex gap-x-2 bg-white px-2 py-1">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>

              <div className="ml-auto">
                <span>{filteredProducts.length} Results found</span>
              </div>
            </div>

            {/* Products */}
            <Product
              productInfo={filterData ?? productData}
              isLoading={productPending}
              isError={productError}
              partialItemLoad={30}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
