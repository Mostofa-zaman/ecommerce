import React from 'react'
import Container from '../../commonComponent/Container'
import { imagesProvider } from '../../../helpers/ImgProvider'
import Button from '../../commonComponent/Button'
import { FaArrowRight } from 'react-icons/fa'


const Header = () => {
    return (
        <section className='bg-gray_900 py-[18px]'>
            <Container>
               <div className="flex items-center justify-between">
                 {/* logo */}
                <picture>
                    <img src={imagesProvider.logo} alt="" />
                </picture>
                {/* middle part */}
                <div className=" flex items-center gap-x-4">
                    <h3 className='lable3 text-gray_00'>Up to</h3>
                    <span className='display4 text-warning_500 '>59%</span>
                    <h3 className='body_xl_600 text-gray_00'>OFF</h3>
                </div>
                {/* button */}
                <Button className={`bg-warning_500`}>
                        <span className='heading7 text-gray_900 flex items-center gap-x-3'>Shop now <FaArrowRight /> </span>
                </Button>
               </div>
            </Container>
        </section>
    )
}

export default React.memo(Header) || Header