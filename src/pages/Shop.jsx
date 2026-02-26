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
            <SearchTab/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
