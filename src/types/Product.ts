export interface Product {
  name: string;
  popularityScore: number;
  weight: number;
  images: {
    yellow: string;
    white: string;
    rose: string;
  };
  priceUSD?: string;
  rating?: string;
}