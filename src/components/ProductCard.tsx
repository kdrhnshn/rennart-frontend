import { useState } from "react";
import type { Product } from "../types/Product";
import {FaStar, FaRegStar, FaStarHalfAlt} from "react-icons/fa";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [selectedColor, setSelectedColor] = useState<"yellow" | "rose" | "white">("yellow");

  const colorOptions: {
    key: "yellow" | "rose" | "white";
    label: string;
    hex: string;
  }[] = [
    { key: "yellow", label: "Yellow Gold", hex: "#E6CA97" },
    { key: "white", label: "White Gold", hex: "#D9D9D9" },
    { key: "rose", label: "Rose Gold", hex: "#E1A4A9" },
  ];

  return (
    <div className="w-[300px] bg-white p-4 mb-4 rounded-xl  hover:shadow-lg transition duration-200">
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />

      <p className="font-montserratm text-[15px] mb-1">{product.name}</p>
      <p className="font-montserratr text-[15px] mb-1">${product.priceUSD} USD</p>


      {/* Renk seçici */}
      <div className="flex items-center gap-[8px] mb-2">
        {colorOptions.map((color) => (
          <button
            key={color.key}
            onClick={() => setSelectedColor(color.key)}
            className={`w-[18px] h-[18px] m-[2px] rounded-full
               ring-1 ring-offset-2 transition duration-150 ${
              selectedColor === color.key ? "ring-[1px] ring-black shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]r" : "ring-transparent"
            }`}
            style={{ backgroundColor: color.hex }}
          ></button>
        ))}
      </div>

      <p className="font-avenirb text-[12px]">{colorOptions.find(c => c.key === selectedColor)?.label}</p>

      <div className="flex items-center text-[14px] gap-1 mt-2 text-yellow-400">
        {[...Array(5)].map((_, i) => {
          const filled = i < Math.floor(product.rating);
          const half = i === Math.floor(product.rating) && product.rating % 1 >= 0.5;

          return (
            <span key={i}>
              {filled ? (
                <FaStar />
              ) : half ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </span>
          );
        })}
        <span className="text-black font-medium ml-1 mt-0">{product.rating}/5</span>
      </div>


    </div>
  );
};

export default ProductCard;