import Star from "./Star";
import ProductSkeleton from "../Skeletion/ProductSkeleton";
import Container from "./Container";

const Product = ({ productInfo, isLoading, isError, partialItemLoad = 8 }) => {
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
    return (
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl lg:text-9xl font-extrabold text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p className="mb-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Something's missing.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can't find that page. You'll find lots to explore on the home page.
              </p>
              <a
                href="#"
                className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
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
    <div className="flex flex-wrap gap-4 mt-10">
      {productInfo?.data?.products?.slice(0, partialItemLoad).map((product) => (
        <div
          key={product.id}
          className="w-[calc(25%-1rem)] hover:shadow-lg rounded-2xl transition-shadow duration-300 bg-white relative"
        >
          <div className="p-5 border border-gray_50 rounded-2xl">
            <div className="flex flex-col items-start justify-start gap-y-3 relative">
              {/* Discount / HOT badge */}
              <span className="absolute top-3 left-3 bg-danger_500 text-white text-sm py-1 px-2 rounded z-10">
                {product.discount ? `${product.discount}% OFF` : "HOT"}
              </span>

              {/* Image container */}
              <div className="relative w-[202px] h-[172px]">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="w-full h-full object-cover bg-gray-100 rounded"
                />
                {/* Hover overlay buttons */}
                <div className="absolute inset-0 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-opacity-30 rounded">
                  <button className="bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-200 font-medium">
                    Add to Cart
                  </button>
                  <button className="bg-black text-red-500 px-3 py-2 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-200">
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
        </div>
      ))}
    </div>
  );
};

export default Product;