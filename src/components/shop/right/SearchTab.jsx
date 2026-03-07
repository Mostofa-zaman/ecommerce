import React, { useState } from "react";


const SearchTab = ({setSearch}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center justify-between gap-6 flex-wrap">
      
      {/* Search */}
      <form
        className="w-full max-w-md  m-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative ">
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
            className="block w-full  p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          />

          <button
            type="button"
            onClick={() => console.log("Searching:", searchValue)}
            className="absolute end-1.5 bottom-1.5 text-white bg-black shadow-xs font-medium rounded text-xs px-3 py-1.5"
          >
            Search
          </button>
        </div>
      </form>

      {/* Dropdown */}
      <div className="relative">
        <div className="flex items-center gap-2">
          <p className="text-sm">Sort by:</p>

          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center justify-center text-white bg-black shadow-xs font-medium rounded-base text-sm px-4 py-2.5"
          >
            Dropdown
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
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 z-50">
            <ul className="p-2 text-sm text-body font-medium">
              <li>
                <button className="w-full text-left p-2 hover:bg-neutral-tertiary-medium rounded">
                  Dashboard
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 hover:bg-neutral-tertiary-medium rounded">
                  Settings
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 hover:bg-neutral-tertiary-medium rounded">
                  Earnings
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 hover:bg-neutral-tertiary-medium rounded">
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