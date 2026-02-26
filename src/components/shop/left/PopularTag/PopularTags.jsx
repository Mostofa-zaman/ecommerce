import React from 'react'

const PopularTags = () => {
    const popularTags = [
  { name: "Game", selected: false },
  { name: "iPhone", selected: false },
  { name: "TV", selected: false },
  { name: "Asus Laptops", selected: false },
  { name: "Macbook", selected: false },
  { name: "SSD", selected: false },
  { name: "Graphics Card", selected: true },
  { name: "Power Bank", selected: false },
  { name: "Smart TV", selected: false },
  { name: "Speaker", selected: false },
  { name: "Tablet", selected: false },
  { name: "Microwave", selected: false },
  { name: "Samsung", selected: false },
];
  return (
    <div className="pt-4">
      <h2 className="pb-4">Popular Tags</h2>
     <ul className="flex flex-wrap gap-x-3 gap-y-3 cursor-pointer">
  {popularTags.map((tag) => (
    <div key={tag.name} className="flex items-center gap-x-2 border border-gray_100 rounded-sm p-4">
     
      <label
        htmlFor={tag.name}
          name="popularTag"
        className="body_sm_600 text-gray_600 cursor-pointer"
      >
        {tag.name}
      </label>
    </div>
  ))}
</ul>
    </div>
  )
}

export default PopularTags