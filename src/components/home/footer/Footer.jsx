import { icons } from "../../../helpers/iconProvider";
import { imagesProvider } from "../../../helpers/imgProvider";
import Container from "../../commonComponent/Container";

const Footer = () => {
  /* ===================== DATA ===================== */

  const topCategory = [
    { id: 1, name: "Computer & Laptop" },
    { id: 2, name: "SmartPhone" },
    { id: 3, name: "Headphone" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Camera & Photo" },
    { id: 6, name: "TV & Homes" },
    { id: 7, name: "Browse All Product", highlight: true },
  ];

  const quickLinks = [
    { id: 1, name: "Shop Product" },
    { id: 2, name: "Shopping Cart" },
    { id: 3, name: "Wishlist" },
    { id: 4, name: "Compare" },
    { id: 5, name: "Track Order" },
    { id: 6, name: "Customer Help" },
    { id: 7, name: "About Us" },
  ];

  const popularTags = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  /* ===================== COMPONENT ===================== */

  return (
    <footer className="bg-gray_900 text-white">
      {/* ===================== TOP SECTION ===================== */}
      <div className="py-12 md:py-[72px]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">

            {/* Logo & Contact */}
            <div className="lg:col-span-2 space-y-4">
              <img
                src={imagesProvider.footerlogo}
                alt="Kinbo footer logo"
                className="w-[160px] md:w-[177px]"
              />

              <div className="space-y-3">
                <div>
                  <p className="text-gray_500 text-sm">Customer Supports:</p>
                  <p className="text-white font-medium">(629) 555-0129</p>
                </div>

                <p className="text-gray_300 text-sm max-w-[240px]">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>

                <p className="text-white text-sm">info@kinbo.com</p>
              </div>
            </div>

            {/* Top Category */}
            <FooterList
              title="Top Category"
              items={topCategory}
              showArrow
            />

            {/* Quick Links */}
            <FooterList
              title="Quick Links"
              items={quickLinks}
            />

            {/* Download App */}
            <div>
              <h2 className="font-semibold mb-4">Download App</h2>

              <div className="flex flex-col gap-3">
                <img
                  src={imagesProvider.footerone}
                  alt="App store"
                  className="w-[140px]"
                />
                <img
                  src={imagesProvider.footertwo}
                  alt="Google play"
                  className="w-[140px]"
                />
              </div>
            </div>

            {/* Popular Tags */}
            <div className="lg:col-span-2">
              <h2 className="font-semibold mb-4">Popular Tag</h2>

              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    className="text-sm border border-gray_700 hover:bg-gray_800 hover:border-white transition px-3 py-[6px] rounded"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* ===================== COPYRIGHT ===================== */}
      <div className="border-t border-gray_700 py-5 text-center">
        <p className="text-gray_400 text-sm">
          Kinbo - eCommerce Template © 2025. Design by Templatecookie,
          modified by Wasim
        </p>
      </div>
    </footer>
  );
};


/* ===================== REUSABLE LIST COMPONENT ===================== */

const FooterList = ({ title, items, showArrow }) => {
  return (
    <div>
      <h2 className="font-semibold mb-4">{title}</h2>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={`group flex items-center gap-2 cursor-pointer relative overflow-hidden ${
              item.highlight ? "text-warning_500" : ""
            }`}
          >
            {!item.highlight && (
              <span className="absolute left-[-40px] w-[30px] h-[3px] bg-warning_500 rounded transition-all duration-300 group-hover:left-0" />
            )}

            <span
              className={`text-sm transition-all duration-300 ${
                !item.highlight &&
                "text-gray-400 group-hover:text-white group-hover:translate-x-[36px]"
              }`}
            >
              {item.name}
            </span>

            {item.highlight && showArrow && (
              <span className="text-lg">{icons.BsArrowRight}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;