import { useQuery } from "react-query";
import { ProductsApi } from "./api";

export function useProductQueries(id = "") {
  const { isLoading: isBeautyProductsLoading, data: beauty } = useQuery(
    "beauty",
    () => ProductsApi.fetchProductsByCategory("beauty"),
  );

  const { isLoading: isBagProductsLoading, data: bags } = useQuery("bags", () =>
    ProductsApi.fetchProductsByCategory("womens-bags"),
  );

  const { isLoading: isProductDetailsLoading, data: productDetails } = useQuery(
    ["product", id],
    () => ProductsApi.fetchProductDetails(id),
    { enabled: !!id },
  );

  return {
    isBeautyProductsLoading,
    beautyProducts: beauty?.products,
    isBagProductsLoading,
    bagProducts: bags?.products,
    isProductDetailsLoading,
    productDetails,
  };
}
