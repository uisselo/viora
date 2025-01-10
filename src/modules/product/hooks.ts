import { useParams } from "react-router";
import { useProductQueries } from "./store";

export function useProduct() {
  const { id } = useParams();
  const { productDetails, beautyProducts, bagProducts } = useProductQueries(id);

  return {
    productDetails,
    beautyProducts,
    bagProducts,
  };
}
