import React from "react";
import Container from "../../commonComponent/Container";
import { usegetproductbylimit } from "../../../hooks/useCategory";
import ErrorPage from "../../commonComponent/error/Error";
import { BestSellingProductContent } from "../../commonComponent/BestSellingProductContent";

const BestProduct = () => {
  const { isPending, error, data, refetch } = usegetproductbylimit();
  if (error) {
    return <ErrorPage error={error} onRefetch={refetch} />;
  }
  if (isPending) {
    return <div className="">loading...</div>;
  }
  const bestproduct = [
    {
      id: 1,
      start: 0,  
      end: 3,
      title: "FLASH SALE TODAY",
    },
    {
      id: 2,
      start: 3,
      end: 6,
      title: "BEST SELLER",
    },
    {
      id: 3,
      start: 6,
      end: 9,
      title: "TOP RATED",
    },
    {
      id: 4,
      start: 9,
      end: 12,
      title: "NEW ARRIVALS",
    },
  ];
  return (
    <section className="py-40">
      <Container>
        <div className="grid grid-cols-4 gap-x-4 items-center justify-between">
            {bestproduct?.map((item)=>( 
                <div key={item.id}>
                <BestSellingProductContent productlist={data.data.products.slice(item.start , item.end)}
            title={ item.title || `FLASH SALE TODAY`}
          />
                </div>
            ))}
            
        
        </div>
      </Container>
    </section>
  );
};

export default BestProduct;
