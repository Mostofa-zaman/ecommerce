import BreadCrumb from "../components/commonComponent/BreadCrumb";
import Container from "../components/commonComponent/Container";
import CategoryItemList from "../components/shop/left/category/CategoryItemList";
import CategoryList from "../components/shop/left/category/CategoryList";
import PopularBrand from "../components/shop/left/PopularBrand/PopularBrand";
import PopularTags from "../components/shop/left/PopularTag/PopularTags";
import PriceRange from "../components/shop/left/PriceRange/PriceRange";
import SearchTab from "../components/shop/right/SearchTab";
import { imagesProvider } from "../helpers/imgProvider";
import { useCategory } from "../hooks/useCategory";
import { FaCross } from "react-icons/fa";

const Shop = () => {
  const {
    isPending: categoryListPending,
    error: categoryListError,
    data: categoryListData,
  } = useCategory();
  if (categoryListPending) {
    return <h1>loading</h1>;
  }
  if (categoryListError) {
    return <h1>error</h1>;
  }
  return (
    <div>
      <div>
        <BreadCrumb />
      </div>
      <Container>
        <div className="grid grid-cols-[30%70%] ">
          <div className=" h-full">
            <CategoryList>
              <CategoryItemList cItem={[...categoryListData.data]} />
            </CategoryList>

            {/* price range */}

            <PriceRange />
            {/* popular brand */}
            <PopularBrand />
            {/* popular tags */}
            <PopularTags />
            {/* watch img */}
            <div className="bg-gray_100 w-full my-4 ">
              <img
                src={imagesProvider.shopleftimg}
                alt="watch"
                className="w-full  object-cover"
              />
            </div>
          </div>
          <div className=" h-full ">
            <SearchTab />
            <div className="flex items-center bg-gray_50 py-4 px-4">
              <div className="flex items-center gap-x-4">
                <span>Active Filters:</span>
                {["Electronics Devices", "5 Star Rating"].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-x-2 bg-white px-2 py-1 rounded"
                  >
                    <span>{item}</span>
                    <span>
                      <FaCross />
                    </span>
                  </div>
                ))}
              </div>
              <div className="ml-auto">
                <span>65,867 Results found.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
