import React from 'react'

const PopularBrand = () => {
    const popularBrands = [
  { name: "Apple", checked: true },
  { name: "Google", checked: true },
  { name: "Microsoft", checked: true },
  { name: "Samsung", checked: false },
  { name: "Dell", checked: false },
  { name: "HP", checked: true },
  { name: "Symphony", checked: false },
  { name: "Xiaomi", checked: false },
  { name: "Sony", checked: false },
  { name: "Panasonic", checked: true },
  { name: "LG", checked: true },
  { name: "Intel", checked: false },
  { name: "One Plus", checked: false },
];
  return (
    <div className="pt-10">
      <h2 className="pb-4">POPULAR BRAND</h2>
    <ul className="grid grid-cols-2 gap-y-3 cursor-pointer">
  {popularBrands.map((brand) => (
    <div key={brand.name} className="flex items-center gap-x-2">
      <input
        type="radio"
        id={brand.name}
        name="popularBrand"
   
      />
      <label
        htmlFor={brand.name}
         name="popularBrand"
        className="body_sm_600 text-gray_600 cursor-pointer"
      >
        {brand.name}
      </label>
    </div>
  ))}
</ul>
    </div>
  )
}

export default PopularBrand