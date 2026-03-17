import { useEffect, useState } from "react";
import BreadCrumb from "../commonComponent/BreadCrumb";
import { useParams } from "react-router";
import { usegetSingleproduct } from "../../hooks/useCategory";

const ProductsDetailsPge = () => {
  const [product, setproduct] = useState("");
  const [mainImage, setMainImage] = useState("");
  const {id} = useParams()
 const {isPending, error, data,refetch  } = usegetSingleproduct(id);
 useEffect(()=>{
  if(data?.data){
    setproduct(data.data);
    setMainImage(data.data.images[0] );
  }
 },[data])
 if(isPending)
  return <div>Loading...</div>;
if(error)
  return <div>Error: {error.message}</div>;



  return (
    <div>
      <BreadCrumb />

      <div className="bg-gray_50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">

            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={mainImage || data?.data?.images[0]}
                alt="product"
                className="w-full rounded-lg shadow-md mb-4"
              />

              <div className="flex gap-4 justify-center overflow-x-auto">
                {data?.data?.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`thumbnail${index}`}
                    onClick={() => setMainImage(img)}
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition"
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">

              <h2 className="heading3 text-gray_900 mb-2">
                Premium Wireless Headphones
              </h2>

              <p className="body_sm_400 text-gray_500 mb-4">
                SKU: WH1000XM4
              </p>

              <div className="flex items-center gap-3 mb-4">
                <span className="heading3 text-primary_500">$349.99</span>
                <span className="body_md_400 text-gray_400 line-through">
                  $399.99
                </span>
              </div>

              {/* rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-warning_500 text-xl">★★★★★</div>
                <span className="ml-2 body_sm_400 text-gray_600">
                  4.5 (120 reviews)
                </span>
              </div>

              <p className="body_md_400 text-gray_700 mb-6">
                Experience premium sound quality and industry-leading noise
                cancellation with these wireless headphones. Perfect for music
                lovers and frequent travelers.
              </p>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="label2 text-gray_900 mb-2">Color</h3>

                <div className="flex gap-3">
                  <button className="w-8 h-8 bg-black rounded-full border"></button>
                  <button className="w-8 h-8 bg-gray_300 rounded-full border"></button>
                  <button className="w-8 h-8 bg-blue-500 rounded-full border"></button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="label3 text-gray_700 block mb-1">
                  Quantity
                </label>

                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="w-16 text-center border border-gray_200 rounded-md py-1"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mb-6">

                <button className="flex items-center gap-2 bg-primary_500 text-white px-6 py-2 rounded-md hover:bg-primary_600 transition">
                  Add to Cart
                </button>

                <button className="flex items-center gap-2 bg-gray_200 text-gray_800 px-6 py-2 rounded-md hover:bg-gray_300 transition">
                  Wishlist
                </button>

              </div>

              {/* Features */}
              <div>
                <h3 className="label2 text-gray_900 mb-2">
                  Key Features
                </h3>

                <ul className="list-disc list-inside body_md_400 text-gray_700 space-y-1">
                  <li>Industry-leading noise cancellation</li>
                  <li>30-hour battery life</li>
                  <li>Touch sensor controls</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPge;