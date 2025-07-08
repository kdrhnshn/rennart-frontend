import axios from "axios";
import type { Product } from "../types/Product";

type FilterParams = {
  minPrice?: string;
  maxPrice?: string;
  minRating?: string;
  maxRating?: string;
};

export const getProducts = async (filters?: FilterParams): Promise<Product[]> => {
  const params = new URLSearchParams();

  if (filters?.minPrice) params.append("minPrice", filters.minPrice);
  if (filters?.maxPrice) params.append("maxPrice", filters.maxPrice);
  if (filters?.minRating) params.append("minRating", filters.minRating);
  if (filters?.maxRating) params.append("maxRating", filters.maxRating);

  const response = await axios.get<Product[]>(
    `http://localhost:3000/products?${params.toString()}`
  );

  return response.data;
};