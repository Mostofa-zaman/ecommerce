import React, { useState } from "react";

const PopularTags = () => {
  const [activeTag, setActiveTag] = useState(null); // no tag selected initially

  const popularTags = [
    { name: "Game" },
    { name: "iPhone" },
    { name: "TV" },
    { name: "Asus Laptops" },
    { name: "Macbook" },
    { name: "SSD" },
    { name: "Graphics Card" },
    { name: "Power Bank" },
    { name: "Smart TV" },
    { name: "Speaker" },
    { name: "Tablet" },
    { name: "Microwave" },
    { name: "Samsung" },
  ];

  return (
    <div className="pt-10 pb-6">
      <h2 className="pb-4 font-semibold">POPULAR TAGS</h2>

      <ul className="flex flex-wrap gap-3">
        {popularTags.map((tag) => {
          const isActive = activeTag === tag.name;

          return (
            <li key={tag.name}>
              <button
                onClick={() => setActiveTag(tag.name)}
                className={`px-4 py-2 rounded-sm border text-sm transition-all duration-200
                ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-black hover:text-white"
                }`}
              >
                {tag.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PopularTags; 