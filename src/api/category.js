import instance from "./axios";

const getCategory = async () => {
  try {
    const { data, status, statusText } = await instance.get(
      "/products/category-list"
    );

    return { data, status, statusText };
  } catch (error) {
    console.error("category network request failed ", error);
  }
};

const getAllProduct = async () => {
  try {
    const { data, status, statusText } = await instance.get("/products");

    return { data, status, statusText };
  } catch (error) {
    console.error("product network request failed ", error);
  }
};

// get product by category

const getProductbyCategory = async (categroyName = "furniture") => {
  try {
    const { data, status, statusText } = await instance.get(`/products/category/${categroyName}`  );
   
    return { data, status, statusText };
  } catch (error) {
    console.error("product network request failed ", error);
  }
};
// best product using limit & skip

const getProductbylimit = async (skip = 0 , limit= 0) => {
  try {
    const { data, status, statusText } = await instance.get(`/products?limit=${limit}&skip=${skip}`  );
   
    return { data, status, statusText };
  } catch (error) {
    console.error("product network request failed ", error);
  }
};
export { getCategory, getAllProduct, getProductbyCategory, getProductbylimit };
