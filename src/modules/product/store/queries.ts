import { useQuery } from "react-query";
import type { ProductCategoryResponse, ProductItem } from "./types";

const fetchProducts = async (category: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
};

const fetchProduct = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) throw new Error("Error fetching product.");
  return response.json();
};

export function useProductQueries(id?: string) {
  const { isLoading: isBeautyDataLoading, data: beauty } =
    useQuery<ProductCategoryResponse>("beauty", () => fetchProducts("beauty"));

  const { isLoading: isProductLoading, data: productData } =
    useQuery<ProductItem>(["product", id], () => fetchProduct(id!), {
      enabled: !!id,
    });

  return {
    isBeautyDataLoading,
    beautyData: beauty?.products,
    isProductLoading,
    productData,
  };
}
