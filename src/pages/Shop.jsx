
import BreadCrumb from '../components/commonComponent/BreadCrumb'
import Container from '../components/commonComponent/Container'
import CategoryItemList from '../components/shop/left/category/CategoryItemList';
import CategoryList from '../components/shop/left/category/CategoryList';
import { useCategory } from '../hooks/useCategory'

const Shop = () => {
  const {isPending:categoryListPending, error:categoryListError, data:categoryListData } = useCategory(); 
  if(categoryListPending){
    return <h1>loading</h1>
  }
  if(categoryListError){
    return <h1>error</h1>
  }
  return (
    <div>
       <div >
         <BreadCrumb/>
       </div>
     <Container>
        <div className="grid grid-cols-[30%70%] h-screen" >
         <div className="bg-secondary_500 h-full">

          <CategoryList>
           <CategoryItemList  cItem = {[...categoryListData.data]}/>
           
          </CategoryList>
         </div>
        <div className="bg-primary_600 h-full ">2</div>
       </div>
     </Container>
    </div>
  )
}

export default Shop