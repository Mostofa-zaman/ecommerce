import { Virtuoso } from "react-virtuoso";

const CategoryItemList = ({ cItem = [], Caregoryfn, activeCategory }) => {
  return (
    <div className="h-[400px]">
      <p className="pt-6 pb-4">CATEGORY</p>

      <Virtuoso
        style={{ height: "100%" }}
        data={cItem}
        itemContent={(_, item) => (
          <div
            className="flex items-center gap-x-3 py-2 px-2 cursor-pointer"
            onClick={() => Caregoryfn(item)}
          >
            <input type="radio" checked={activeCategory === item} readOnly />

            <label className="body_sm_400 text-gray_600">{item}</label>
          </div>
        )}
      />
    </div>
  );
};

export default CategoryItemList;
