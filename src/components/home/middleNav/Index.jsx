import React, { useState } from 'react'
import Container from '../../commonComponent/Container'
import { imagesProvider } from '../../../helpers/imgProvider'
import { icons } from '../../../helpers/iconProvider'
import Button from '../../commonComponent/Button'

const MiddleNav = () => {
  const [showSearchIcons, setshowSearchIcons] = useState(true)

  const { logoMiddle } = imagesProvider;
  const { Search, FiShoppingCart, FaHeartbeat, FiUsers } = icons;
  const utisIcons = [
    {
    id: 1,
    to : "/cart",
    icon : FiShoppingCart,
  },
    {
    id: 2,
    to : "/wishlist",
    icon : FaHeartbeat,
  },
    {
    id: 1,
    to : "/user",
    icon : FiUsers,
  },
]
  // * todo : handletyping function implement
  // * params :(event){}
  // * return : void
  const handleTyping = (event) => {
    if (event.target.value.length > 0) {
      setshowSearchIcons(false)

    } else {
      setshowSearchIcons(true)
    }

  }
  return (
 <section className='bg-secondary_700 py-5 border-t border-t-gray_100'>
  <Container>
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      
      {/* Logo */}
      <picture>
        <img src={logoMiddle} alt="logo" className="w-32 lg:w-auto" />
      </picture>

      {/* Search */}
      <div className="relative w-full lg:w-[500px]">
        <input
          type="search"
          onChange={handleTyping}
          className="bg-gray_00 py-3 px-3 w-full outline-0 rounded"
          placeholder="Search for anything..."
        />

        {showSearchIcons ? (
          <span className="absolute top-1/2 -translate-y-1/2 right-4 text-gray_900">
            <Search size={18} />
          </span>
        ) : (
          <div className="absolute top-1/2 -translate-y-1/2 right-2">
            <Button className="bg-warning_500 py-1 px-3">
              <span className="body_sm_400">Search</span>
            </Button>
          </div>
        )}
      </div>

      {/* Icons */}
      <div className="flex gap-5 items-center justify-end">
        {utisIcons?.map((icon, index) =>
          icon.to === "/cart" ? (
            <div key={index} className="relative">
              <span className="text-gray_00">
                <icon.icon size={20} />
              </span>
              <span className="w-4 h-4 absolute -top-2 -right-2 bg-gray_50 flex justify-center items-center text-xs rounded-full">
                2
              </span>
            </div>
          ) : (
            <span key={index} className="text-gray_00">
              <icon.icon size={20} />
            </span>
          )
        )}
      </div>

    </div>
  </Container>
</section>
  )
}

export default MiddleNav