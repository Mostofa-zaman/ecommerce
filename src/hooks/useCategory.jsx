import React from 'react'
import { getAllProduct, getCategory, getProductbyCategory, getProductbylimit } from '../api/category'
import { useQuery } from '@tanstack/react-query'

const useCategory = () => {
   const { isPending, error, data  } = useQuery({
    queryKey: ["Category"],
    queryFn: getCategory,
      
  })
  return { isPending ,error , data }
}

const useProduct = ()=>{
   const { isPending, error, data  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
      
  })
  return { isPending ,error , data }
}
 
const usegetproductbycategory = (categoryName) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["categoryproduct", categoryName],
    queryFn: () => getProductbyCategory(categoryName),
    enabled: !!categoryName ,
  });

  return { isPending, error, data };
};
// best product using limit & skip
const usegetproductbylimit = (skip=0) => {
  const { isPending, error, data,refetch } = useQuery({
    queryKey: ["productsskiplimit", skip],
    queryFn: () => getProductbylimit(categoryName),
    enabled: !!skip  ,
  });

  return { isPending, error, data,refetch  };
};
export {useCategory , useProduct,usegetproductbycategory ,usegetproductbylimit}