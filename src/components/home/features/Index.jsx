import React, { useState } from 'react'
import Container from '../../commonComponent/Container'
import { icons } from '../../../helpers/iconProvider'

const Features = () => {
    const { FaCcPaypal, CiTrophy, MdOutlinePayment, BsHeadphones } = icons
    const [data, setdata] = useState([
        {
            id: 1,
            icon: FaCcPaypal  ,
            title: "Fasted Delivery",
            description: "Delivery in 24/H",

        },
        {
            id: 2,
            icon: CiTrophy  ,
            title: "24 Hours Return",
            description: "100% money-back guarantee",

        },
        {
            id: 3,
            icon: MdOutlinePayment  ,
            title: "Your money is safe",
            description: "Secure Payment",

        },
        {
            id: 4,
            icon: BsHeadphones  ,
            title: "Support 24/7",
            description: "Live contact/message",

        },
    ])
    return (
        <section className=''>
            <Container>
                <div className="border border-gray_100 grid grid-cols-4 py-8 px-4 rounded">
                    {data?.map((item)=>(
                         <div className="flex items-center gap-x-4 border-r border-r-gray_200 px-10 cursor-pointer transition-transform duration-300 hover:scale-110 ease-in-out">
                        <span>
                            <item.icon color='text-gray_600 ' size={40} />
                        </span>
                        <div className="">
                            <h1  className='body_sm_400 text-gray_900'>{item.title}</h1>
                            <p className='text-gray_600 label3 '>{item.description}</p>
                        </div>
                    </div>
                    ))}
                   
                </div>
            </Container>
        </section>
    )
}

export default Features