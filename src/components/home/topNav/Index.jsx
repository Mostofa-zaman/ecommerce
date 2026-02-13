import React from 'react'
import Container from '../../commonComponent/Container'
import { icons } from '../../../helpers/iconProvider'

const TopNav = () => {
  const { topNav } = icons

  return (
    <section className='bg-secondary_700'>
      <Container>
        <div className="
          flex 
          flex-col sm:flex-row 
          justify-between 
          items-center 
          gap-y-2 sm:gap-y-0
          py-2 sm:py-0
        ">
          
          {/* left text */}
          <h2 className='
            label3 
            text-gray_00 
            py-2 sm:py-4 
            text-center sm:text-left
            text-xs sm:text-sm md:text-base
          '>
            Welcome to Clicon online eCommerce store.
          </h2>

          {/* right section */}
          <div className="
            flex 
            items-center 
            gap-x-2 sm:gap-x-3
            flex-wrap
            justify-center sm:justify-end
          ">
            <h2 className='
              body_sm_400 
              text-gray_00 
              text-xs sm:text-sm
            '>
              Follow us:
            </h2>

            <div className="flex gap-x-2">
              {topNav.map((item) => (
                <span 
                  key={item.id} 
                  className='cursor-pointer'
                >
                  <item.name 
                    size={16} 
                    className="sm:w-[18px] sm:h-[18px]" 
                    color='#ffffff' 
                  />
                </span>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default React.memo(TopNav)
