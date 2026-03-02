const ProductSkeleton = () => {
  return (
    <div className="p-4 border border-gray_50 w-full rounded-lg animate-pulse">
      <div className="flex flex-col gap-y-3">
        
        {/* HOT badge */}
        <div className="w-12 h-6 bg-gray-200 rounded-md"></div>

        {/* Image */}
        <div className="w-full aspect-[4/3] bg-gray-200 rounded-md"></div>

        {/* Rating */}
        <div className="flex items-center gap-x-2 mt-2">
          <div className="w-20 h-4 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-4 bg-gray-200 rounded-md"></div>
        </div>

        {/* Title */}
        <div className="w-full h-4 bg-gray-200 rounded-md"></div>

        {/* Price */}
        <div className="flex gap-x-3">
          <div className="w-12 h-4 bg-gray-200 rounded-md"></div>
          <div className="w-14 h-4 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;