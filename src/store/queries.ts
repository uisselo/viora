import { useQuery } from "react-query";
import type { ProductCategoryResponse } from "./types";

const fetchProducts = async (category: string) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
};

export function useProductQueries() {
  const { isLoading: isBeautyDataLoading, data: beauty } =
    useQuery<ProductCategoryResponse>("beauty", () => fetchProducts("beauty"));

  return {
    isBeautyDataLoading,
    beautyData: beauty?.products,
  };
}
