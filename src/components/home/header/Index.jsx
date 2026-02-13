import React from 'react'
import Container from '../../commonComponent/Container'
import { imagesProvider } from '../../../helpers/imgProvider'
import Button from '../../commonComponent/Button'
import { FaArrowRight } from 'react-icons/fa'

const Header = () => {
    return (
        <section className='bg-gray_900 py-[18px]'>
            <Container>
                <div className="
                    flex 
                    flex-col sm:flex-row 
                    items-center 
                    justify-between 
                    gap-y-4 sm:gap-y-0
                ">
                    
                    {/* logo */}
                    <picture className='flex justify-center sm:justify-start'>
                        <img 
                            src={imagesProvider.logo} 
                            alt="logo" 
                            className='w-[120px] sm:w-auto'
                        />
                    </picture>

                    {/* middle part */}
                    <div className="
                        flex 
                        items-center 
                        gap-x-2 sm:gap-x-4
                        text-center
                    ">
                        <h3 className='lable3 text-gray_00 text-sm sm:text-base'>
                            Up to
                        </h3>
                        <span className='display4 text-warning_500 text-lg sm:text-2xl'>
                            59%
                        </span>
                        <h3 className='body_xl_600 text-gray_00 text-sm sm:text-base'>
                            OFF
                        </h3>
                    </div>

                    {/* button */}
                    <Button className="bg-warning_500 w-full sm:w-auto">
                        <span className='heading7 text-gray_900 flex items-center justify-center gap-x-3 text-sm sm:text-base'>
                            Shop now <FaArrowRight />
                        </span>
                    </Button>

                </div>
            </Container>
        </section>
    )
}

export default React.memo(Header)
