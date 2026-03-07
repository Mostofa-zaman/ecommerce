import React, { useState } from "react";

const SearchTab = ({ setSearch }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const menuItems = [
    { label: "Dashboard", onClick: () => console.log("Dashboard clicked") },
    { label: "Settings", onClick: () => console.log("Settings clicked") },
    { label: "Earnings", onClick: () => console.log("Earnings clicked") },
    { label: "Sign out", onClick: () => console.log("Sign out clicked") },
  ];

  return (
    <div className="flex items-center justify-between gap-6 flex-wrap">

      {/* Search */}
      <form
        className="w-full max-w-md m-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-body"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          />

          <button
            type="button"
            onClick={() => setSearch(searchValue)}
            className="absolute end-1.5 bottom-1.5 text-white bg-black shadow-xs font-medium rounded text-xs px-3 py-1.5"
          >
            Search
          </button>
        </div>
      </form>

      {/* Dropdown */}
    <div className="relative flex items-center gap-2">
  <p className="text-sm mb-2">Sort by  :</p>

  <button
    type="button"
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className="inline-flex items-center justify-center text-white bg-black shadow-xs font-medium rounded-base text-sm px-4 py-2 rounded"
  >
    Menu
    <svg
      className="w-4 h-4 ms-1.5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 9-7 7-7-7"
      />
    </svg>
  </button>

  {dropdownOpen && (
    <div className="absolute top-full start-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200 ease-out">
      <ul className="py-1 text-sm  font-medium">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => {
                item.onClick();
                setDropdownOpen(false); // close dropdown after click
              }}
              className="w-full mr-20 px-4 py-2 hover:bg-gray-100 focus:bg-gray-100
               rounded-md"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
    </div>
  );
};

export default SearchTab;