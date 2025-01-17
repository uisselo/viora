import { API_URL } from "@Config";
import type { ProductCategoryResponse, ProductItem } from "./types";

const PREFIX = `${API_URL}/products`;

async function fetchProductsByCategory(
  payload: string,
): Promise<ProductCategoryResponse> {
  const response = await fetch(`${PREFIX}/category/${payload}`);

  if (!response.ok) throw new Error(`Error fetching ${payload} products.`);
  return response.json();
}

async function fetchProductDetails(payload: string): Promise<ProductItem> {
  const response = await fetch(`${PREFIX}/${payload}`);

  if (!response.ok)
    throw new Error(`Error fetching product with ID ${payload}.`);
  return response.json();
}

export const ProductsApi = {
  fetchProductsByCategory,
  fetchProductDetails,
};
