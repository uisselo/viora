import { useParams } from "react-router";
import { useProductQueries } from "./store";

export function useProduct() {
  const { id } = useParams();
  const { productDetails, bagProducts } = useProductQueries(id);

  return {
    productDetails,
    bagProducts,
  };
}
