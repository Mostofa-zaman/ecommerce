const ProductSkeleton = () => {
  return (
    <div className="p-5 border border-gray_50 max-w-[240px] rounded animate-pulse">
      <div className="flex flex-col items-start gap-y-3">
        
        {/* HOT badge */}
        <div className="w-12 h-6 bg-gray-200 rounded"></div>

        {/* Image */}
        <div className="w-[202px] h-[172px] bg-gray-200 rounded"></div>

        {/* Rating */}
        <div className="flex items-center gap-x-2 mt-2">
          <div className="w-20 h-4 bg-gray-200 rounded"></div>
          <div className="w-8 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Title */}
        <div className="w-full h-4 bg-gray-200 rounded"></div>

        {/* Price */}
        <div className="flex gap-x-3">
          <div className="w-10 h-4 bg-gray-200 rounded"></div>
          <div className="w-12 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
