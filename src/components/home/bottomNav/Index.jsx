import React from 'react'
import Container from '../../commonComponent/Container'
import { CiLocationOn } from 'react-icons/ci'
import { FaExclamation, FaPhoneVolume } from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'
import { BsHeadphones } from "react-icons/bs";

const BottomNav = () => {
    return (
        <section className='py-3 border-b border-b-gray_200'>
            <Container>
             <div className=" flex items-center justify-between">
                 <div className="flex items-center gap-x-8">
                  <div className="">
                    <select name="" id="" className='bg-gray_50 px-5 py-3 outline-0 border-2 border-secondary_100 body_sm_500 text-gray_900'>
                        <option value="AllCattegory">AllCattegory</option>
                        <option value="Fasion">Fasion</option>
                        <option value="Sports">Sports</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Fruts">Fruts</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>
                {/* ---------------userNavigation----------- */}
                <div className=" flex items-center gap-x-8">
                    <div className="flex items-center gap-x-1 label3 text-gray_600">
                        <CiLocationOn size={20}/>
                        <span>Track Order</span>
                    </div>
                    <div className="flex items-center gap-x-1 label3 text-gray_600">
                        <IoGitCompare size={18}/>
                        <span>Compare</span>
                    </div>
                    <div className="flex items-center gap-x-1 label3 text-gray_600">
                        <BsHeadphones size={20}/>
                        <span>Customer Support</span>
                    </div>
                    <div className="flex items-center gap-x-1 label3 text-gray_600">
                        <FaExclamation size={16 }/>
                        <span>Need Help</span>
                    </div>
                </div>
                
              </div>
               <div className="flex items-center gap-x-1 label3 text-gray_600">
                        <FaPhoneVolume size={16 }/>
                        <span>+1-202-555-0104</span>
                    </div>
             </div>
            </Container>
        </section>
    )
}

export default BottomNav