import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";
import type { Product } from "./types/Product";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";


// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleApplyFilters = (filters: {
    minPrice?: string;
    maxPrice?: string;
    minRating?: string;
    maxRating?: string;
  }) => {
    getProducts(filters)
      .then(setProducts)
      .catch(err => console.error("Filtreli ürünler alınamadı:", err));
  };

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => console.error("Ürünler alinamadi:", err));
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="font-avenirb text-[45px] mb-6 text-center">Product List</h1>
         <FilterBar onApply={handleApplyFilters} />
        {/* Swiper Container */}
      
      <div className="relative">
        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          slidesOffsetBefore={100}  // Sol kenar boşluğu (pixel)
          slidesOffsetAfter={16}   // Sağ kenar boşluğu (pixel)
          modules={[Navigation]}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrow buttons */}
        <div className="swiper-button-prev absolute top-1/2 -left-4 z-10 cursor-pointer select-none text-black text-2xl font-light"></div>
        <div className="swiper-button-next absolute top-1/2 -right-4 z-10 cursor-pointer select-none text-black text-2xl font-light"></div>  
      
      </div>

    </div>
  );
};

export default App;