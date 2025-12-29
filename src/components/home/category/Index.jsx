import React from 'react'
import Container from '../../commonComponent/Container'
import {useCategory} from '../../../hooks/useCategory';
import CategoryItem from '../../commonComponent/CategoryItem';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';


const Category = () => {
  
  const { isPending, islooding, error, data } = useCategory();
  if(isPending){
    return(
      <div className="">
        <Container>
          <div className="">
           loading..
          </div>
        </Container>
      </div>
    )
  }
  console.log(data?.data)
  return (
    <section className='py-10'>
      <Container>
      

      <div className="pb-8">
        <h2 className=' heading1 justify-center flex'>Shop with Categorys </h2>
      </div>
      

         
       

     <Swiper navigation={true} modules={[Navigation]} className="myswiper "
       slidesPerView={6}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
       
     >
     {data?.data?.map((item ,index)=>(

       <div key={index}>
         <SwiperSlide> 
        
          
           <CategoryItem item={item}/>
        </SwiperSlide>
       </div>
      ))} 
       
      </Swiper>                
       

        {/* </div> */}
      </Container>
    </section>

  )
}

export default Category;