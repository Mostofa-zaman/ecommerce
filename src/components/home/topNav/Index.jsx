import React from "react";
import Container from "../../commonComponent/Container";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const topNav = [
  { id: 1, icon: FaFacebookF },
  { id: 2, icon: FaTwitter },
  { id: 3, icon: FaInstagram },
  { id: 4, icon: FaYoutube },
];

const TopNav = () => {
  return (
    <section className="bg-secondary_700">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2 py-2">

          <h2 className="text-white text-xs sm:text-sm md:text-base text-center sm:text-left">
            Welcome to Clicon online eCommerce store.
          </h2>

          <div className="flex items-center gap-x-3 flex-wrap justify-center sm:justify-end">
            <h2 className="text-white text-xs sm:text-sm">
              Follow us:
            </h2>

            <div className="flex gap-x-2">
              {topNav.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.id} className="cursor-pointer">
                    <Icon size={16} color="#fff" />
                  </span>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TopNav;