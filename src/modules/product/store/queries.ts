import { useQuery } from "react-query";
import { ProductsApi } from "./api";

export function useProductQueries(id?: string) {
  const { isLoading: isBeautyProductsLoading, data: beauty } = useQuery(
    "beauty",
    () => ProductsApi.fetchProductsByCategory("beauty"),
  );

  const { isLoading: isFragranceProductsLoading, data: fragrance } = useQuery(
    "fragrance",
    () => ProductsApi.fetchProductsByCategory("fragrance"),
  );

  const { isLoading: isProductDetailsLoading, data: productDetails } = useQuery(
    ["product", id],
    () => {
      if (id) {
        ProductsApi.fetchProductDetails(id);
      }
    },
    { enabled: !!id },
  );

  return {
    isBeautyProductsLoading,
    beautyProducts: beauty?.products,
    isFragranceProductsLoading,
    fragranceProducts: fragrance?.products,
    isProductDetailsLoading,
    productDetails,
  };
}
