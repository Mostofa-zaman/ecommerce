import React, { useState } from "react";

const SearchTab = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", searchValue);
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <form  className="max-w-md mx-auto" onSubmit={(e)=> e.preventDefault()}>
        <label
          htmlFor="search"
          className="block mb-2.5 text-sm font-medium text-heading sr-only"
        >
          Search
        </label>

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
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          />

          <button
            type="button"
            onClick={()=> console.log("Searching:", searchValue)}
            className="absolute end-1.5 bottom-1.5 text-white bg-black hover:bg-brand-strong border border-transparent shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5"
          >
            Search
          </button>
        </div>
      </form>

      {/* Dropdown */}
      <div className="relative inline-block">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="inline-flex items-center justify-center text-white bg-black hover:bg-brand-strong shadow-xs font-medium rounded-base text-sm px-4 py-2.5"
        >
          Dropdown button
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
          <div className="absolute mt-2 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
            <ul className="p-2 text-sm text-body font-medium">
              <li>
                <button className="w-full text-left p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                  Dashboard
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                  Settings
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                  Earnings
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTab;