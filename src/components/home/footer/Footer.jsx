import { icons } from "../../../helpers/iconProvider";
import { imagesProvider } from "../../../helpers/imgProvider";
import Container from "../../commonComponent/Container";

const Footer = () => {
  // Top Category
  const topCategory = [
    { id: 1, name: "Computer & Laptop" },
    { id: 2, name: "SmartPhone" },
    { id: 3, name: "Headphone" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Camera & Photo" },
    { id: 6, name: "TV & Homes" },
    { id: 7, name: "Browse All Product" },
  ];

  // Quick Links
  const quickLinks = [
    { id: 1, name: "Shop Product" },
    { id: 2, name: "Shopping Cart" },
    { id: 3, name: "Wishlist" },
    { id: 4, name: "Compare" },
    { id: 5, name: "Track Order" },
    { id: 6, name: "Customer Help" },
    { id: 7, name: "About Us" },
  ];

  // Popular Tags
  const popularTags = [
    { id: 1, name: "Game" },
    { id: 2, name: "iPhone" },
    { id: 3, name: "TV" },
    { id: 4, name: "Asus Laptops" },
    { id: 5, name: "SSD" },
    { id: 6, name: "Graphics Card" },
    { id: 7, name: "Power Bank" },
    { id: 8, name: "Smart TV" },
    { id: 9, name: "Speaker" },
    { id: 10, name: "Tablet" },
    { id: 11, name: "Microwave" },
    { id: 12, name: "Samsung" },
  ];

  return (
    <footer className="bg-gray_900">
      <div className="py-[72px]">
        <Container>
          <div className="grid grid-cols-7 gap-x-6">
            {/* Logo & Contact */}
            <div className="col-span-2">
              <img
                src={imagesProvider.footerlogo}
                alt="Kinbo footer logo"
                className="w-[177px]"
              />

              <div className="pt-4 flex flex-col gap-y-3">
                <div>
                  <p className="sm_400 text-gray_500">Customer Supports:</p>
                  <p className="lg_500 text-gray_00">(629) 555-0129</p>
                </div>

                <p className="md_400 text-gray_300 w-[240px]">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>

                <p className="md_500 text-gray_00">info@kinbo.com</p>
              </div>
            </div>

            {/* Top Category */}
            <div>
              <h2 className="labe2 text-gray_00 mb-3">Top Category</h2>
              <ul className="flex flex-col gap-y-2">
                {topCategory.map((item) =>
                  item.name === "Browse All Product" ? (
                    <li
                      key={item.id}
                      className="flex items-center gap-x-2 text-warning_500"
                    >
                      <span className="sm_500">{item.name}</span>
                      <span className="text-lg">{icons.BsArrowRight}</span>
                    </li>
                  ) : (
                    <li
                      key={item.id}
                      className="group flex items-center gap-x-2 cursor-pointer relative overflow-hidden"
                    >
                      <span className="absolute left-[-40px] w-[30px] h-[3px] bg-warning_500 rounded transition-all duration-300 group-hover:left-0" />
                      <span className="body_sm_500 text-gray-400 group-hover:text-gray_00 transition-all duration-300 group-hover:translate-x-[36px] whitespace-nowrap">
                        {item.name}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="labe2 text-gray_00 mb-3">Quick Links</h2>
              <ul className="flex flex-col gap-y-2">
                {quickLinks.map((item) => (
                  <li
                    key={item.id}
                    className="group flex items-center gap-x-2 cursor-pointer relative overflow-hidden"
                  >
                    <span className="absolute left-[-40px] w-[30px] h-[3px] bg-warning_500 rounded transition-all duration-300 group-hover:left-0" />
                    <span className="sm_500 text-gray_400 group-hover:text-gray_00 transition-all duration-300 transform group-hover:translate-x-[36px] whitespace-nowrap">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h2 className="labe2 text-gray_00 mb-3">Download App</h2>
              <div className="flex flex-col gap-y-3">
                <img
                  src={imagesProvider.footerone}
                  alt="Download on App Store"
                />
                <img
                  src={imagesProvider.footertwo}
                  alt="Get it on Google Play"
                />
              </div>
            </div>

            {/* Popular Tags */}
            <div className="col-span-2">
              <h2 className="labe2 text-gray_00 mb-3">Popular Tag</h2>
              <div className="flex gap-2 flex-wrap">
                {popularTags.map((tag) => (
                  <button
                    key={tag.id}
                    className="sm_500 text-gray_00 border border-gray_800 hover:bg-gray_800 hover:border-gray_00 transition duration-300 py-[6px] px-3 rounded"
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-gray_600 text-center">
        <p className="sm_400 text-gray_300">
          Kinbo - eCommerce Template © 2025. Design by Templatecookie, modified by
          Wasim
        </p>
      </div>
    </footer>
  );
};

export default Footer;
