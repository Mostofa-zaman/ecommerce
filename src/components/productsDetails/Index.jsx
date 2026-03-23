import { useEffect, useState } from "react";
import BreadCrumb from "../commonComponent/BreadCrumb";
import { useParams } from "react-router";
import { usegetSingleproduct } from "../../hooks/useCategory";
// import { addTocart } from "../../features/counter/counterSlice";
import { useSelector, useDispatch } from 'react-redux'
import { addTocart } from "../../features/addtocart";

const ProductsDetailsPge = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const { id } = useParams();
  const { isPending, error, data } = usegetSingleproduct(id);

  useEffect(() => {
    if (data?.data) {
      setProduct(data.data);
      setMainImage(data.data.images?.[0]);
    }
  }, [data]);

  // // 🛒 Add to cart handler
  //  const handleAddToCart = () => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];

  //   const existing = cart.find((item) => item.id === product.id);

  //   if (existing) {
  //     existing.quantity += 1;
  //   } else {
  //     cart.push({ ...product, quantity: 1 });
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   alert("Product added to cart ✅");
  // };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  const handleAddToCart = (product)=>{ 
    dispatch(addTocart(product))
  }
useSelector((cart)=>console.log(cart.cartStore ))
  if (!product) return null;

  // 💰 price calc
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div>
      <BreadCrumb />

      <div className="bg-gray_50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={mainImage}
                alt="product"
                className="w-full rounded-lg shadow-md mb-4"
              />

              <div className="flex gap-4 justify-center overflow-x-auto">
                {product.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    onClick={() => setMainImage(img)}
                    className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer border ${
                      mainImage === img ? "border-primary_500" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 px-4">
              {/* Title */}
              <h2 className="heading3 text-gray_900 mb-2">{product.title}</h2>

              {/* SKU */}
              <p className="body_sm_400 text-gray_500 mb-2">
                SKU: {product.sku}
              </p>

              {/* Brand */}
              <p className="body_sm_400 text-gray_500 mb-4">
                Brand: {product.brand}
              </p>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="heading3 text-primary_500">
                  ${discountedPrice}
                </span>

                <span className="body_md_400 text-gray_400 line-through">
                  ${product.price}
                </span>

                <span className="text-green-500 text-sm">
                  -{product.discountPercentage}%
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="text-warning_500 text-xl">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                </div>

                <span className="ml-2 body_sm_400 text-gray_600">
                  {product.rating} ({product.reviews?.length || 0} reviews)
                </span>
              </div>

              {/* Stock */}
              <p
                className={`mb-4 font-medium ${
                  product.stock > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.availabilityStatus} ({product.stock} left)
              </p>

              {/* Description */}
              <p className="body_md_400 text-gray_700 mb-6">
                {product.description}
              </p>

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
                <button
                  // onClick={handleAddToCart}
                  className="bg-primary_500 text-white px-6 py-2 rounded-md hover:bg-primary_600 transition"onClick={()=> handleAddToCart(product)}
                >
                  Add to Cart
                </button>

                <button className="bg-gray_200 px-6 py-2 rounded-md hover:bg-gray_300">
                  Wishlist
                </button>
              </div>

              {/* Extra Info */}
              <div className="bg-white rounded-xl shadow-sm p-5 mt-5 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  Product Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📦</span>
                    <div>
                      <p className="text-base font-semibold text-gray-800">
                        Shipping
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.shippingInformation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔁</span>
                    <div>
                      <p className="text-base font-semibold text-gray-800">
                        Return Policy
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.returnPolicy}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🛡</span>
                    <div>
                      <p className="text-base font-semibold text-gray-800">
                        Warranty
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.warrantyInformation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <p className="text-base font-semibold text-gray-800">
                        Minimum Order
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.minimumOrderQuantity} pcs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {product.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPge;
