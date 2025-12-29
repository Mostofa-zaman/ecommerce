import React, { useState } from 'react'
import Container from '../../commonComponent/Container'
import { imagesProvider } from '../../../helpers/ImgProvider'
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
        <div className="flex justify-between">
          <picture>
            <img src={logoMiddle} alt={logoMiddle} />
          </picture>


          <div className="relative">
            <input type="search"
              name=' '
              id=''
              onChange={handleTyping}
              className='bg-gray_00 py-3  
            px-3 placeholder:text-gray_300 placeholder:body_sm_400
            w-[600px] outline-0 rounded' placeholder='Search for anything...' />
            {showSearchIcons == true ? (
              <span className='etxt-gray_900 absolute top-1/2 -translate-1/2 right-4'><Search size={18} />
              </span>
            ) : (
              null
            )}
            {showSearchIcons == false && (<div className="absolute top-1/2 -translate-1/2 right-0">
              <Button className={`bg-warning_500 py-1`}>
                <span className='body_sm_400'>Search</span>
              </Button>
            </div>
          )}

          </div>
          {/*--------- all icons--------------  */}
         <div className="flex gap-5 items-center">
           {utisIcons ?.map((icon) => (
            icon.to === "/cart" ? (
            <div className="realtive">
              <span className=' text-gray_00'>
              <icon.icon size={20}/>
            </span> 
            <span className='w-4 h-4 absolute bg-gray_50 top-40 right-30 justify-center items-center flex text-[15px] rounded-full'>2</span>
            </div>
            ):(
              <span className=' text-gray_00'>
              <icon.icon size={20}/>
            </span> 
            )
          ))}
         </div>


        </div>
      </Container>
    </section>
  )
}

export default MiddleNav