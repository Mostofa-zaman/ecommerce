import instance from "./axios";

/**
 * Get all categories
 */
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


/**
 * Get all products
 */
const getAllProduct = async () => {
  try {
    const { data, status, statusText } = await instance.get("/products");

    return { data, status, statusText };
  } catch (error) {
    console.error("product network request failed ", error);
  }
};


/**
 * Get product by category
 */
const getProductbyCategory = async (categoryName = "furniture") => {
  try {
    const { data, status, statusText } = await instance.get(
      `/products/category/${categoryName}`
    );

    return { data, status, statusText };
  } catch (error) {
    console.error("product network request failed ", error);
  }
};


/**
 * Get best products using limit & skip
 */
const getProductbyLimit = async () => {
  try {
    const { data, status, statusText } = await instance.get(
      `/products?limit=12&skip=0`
    );

    return { data, status, statusText };
  } catch (error) {
    console.error("product network request failed", error);
    throw error;
  }
};

// get single product
const SingleProduct = async (id) => {
  try {
    const { data, status, statusText } = await instance.get(
      `/products/${id}`
    );

    return { data, status, statusText };
  } catch (error) {
    console.error("product network request failed", error);
    throw error;
  }
};

export {
  getCategory,
  getAllProduct,
  getProductbyCategory,
  getProductbyLimit,
  SingleProduct,
};