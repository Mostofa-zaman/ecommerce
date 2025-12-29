import React from 'react'
import Container from '../../commonComponent/Container'
import { icons } from '../../../helpers/iconProvider'

const TopNav = () => {
  const { topNav } = icons


  return (
    <section className='bg-secondary_700'>
      <Container>
        <div className="flex justify-between items-center">
          <h2 className='label3 text-gray_00 py-4'>Welcome to Clicon online eCommerce store. </h2>

          <div className="flex items-center gap-x-2">
            <h2 className='body_sm_400 text-gray_00'>Follow us:</h2>
            <div className="flex gap-x-2">

              {topNav.map((item) => (
                <span key={item.id} className='cursor-pointer'>
                  {<item.name size={18} color='#ffffff' />}
                  </span>
              ))}
            </div>
            </div>
          </div>
      </Container>
    </section>
  )
}

export default TopNav