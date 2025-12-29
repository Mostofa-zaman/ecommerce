import React from 'react'
import Container from '../../commonComponent/Container'
import { usegetproductbylimit } from '../../../hooks/useCategory'
import ErrorPage from '../../commonComponent/error/Error'

const BestProduct = () => {

    const {isPending, error, data ,refetch} = usegetproductbylimit()
    if(error){
        return(
            <ErrorPage error={error} onRefetch={refetch}/>
        )
    }
  return (
   <section className='py-40'>
    <Container>
     <div className="grid grid-cols-4 gap-x-4 items-center justify-between">
           {[... new Array(4)].map((_,imdex)=>(


       <div className="">
             <h1 className='body_md_600 text-gray_900 mb-5'>FLASH SALE TODAY</h1>
            {/* product details */}

            <div className="grid grid-cols-[30%70%] border border-gray_500 px-2 py-3">
                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" className='w-[80px] h-[80px] object-cover' alt="" />
                <div className="">
                    <h3 className='body_sm_400 text-gray_900'> Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h3>
                    <p>$1,500</p>
                </div>
            </div>
       </div>
        ))}
     </div>
       
        
    </Container>
   </section>
  )
}

export default BestProduct