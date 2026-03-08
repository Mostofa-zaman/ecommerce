const ProductSkeleton = () => {
  return (
    <div className="p-4 border border-gray-50 w-full rounded-lg animate-pulse">
      <div className="flex flex-col gap-3">
        {/* HOT badge */}
        <div className="w-1/4 sm:w-1/5 h-6 bg-gray-200 rounded-md"></div>

        {/* Image */}
        <div className="w-full aspect-[4/3] bg-gray-200 rounded-md"></div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="w-1/2 sm:w-1/3 h-4 bg-gray-200 rounded-md"></div>
          <div className="w-1/6 sm:w-1/5 h-4 bg-gray-200 rounded-md"></div>
        </div>

        {/* Title */}
        <div className="w-full h-4 bg-gray-200 rounded-md"></div>

        {/* Price */}
        <div className="flex gap-3">
          <div className="w-1/4 sm:w-1/6 h-4 bg-gray-200 rounded-md"></div>
          <div className="w-1/3 sm:w-1/4 h-4 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;