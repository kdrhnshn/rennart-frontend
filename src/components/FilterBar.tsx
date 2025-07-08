import React, { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import StarRatingSelector from "./StarRatingSelector";

type FilterValues = {
  minPrice?: string;
  maxPrice?: string;
  minRating?: string;
  maxRating?: string;
};

type FilterBarProps = {
  onApply: (filters: FilterValues) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onApply }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 35000]);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);

  const handleApply = () => {
    onApply({
      minPrice: priceRange[0].toString(),
      maxPrice: priceRange[1].toString(),
      minRating: minRating.toString(),
      maxRating: maxRating.toString()
    });
  };

  return (
    <div className="mb-6 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 px-4 py-4 shadow-lg rounded-2xl border border-gray-100 bg-white">
        <PriceRangeSlider value={priceRange} onChange={setPriceRange} />
        
        <StarRatingSelector label="Min Rating" value={minRating} onChange={setMinRating} />
        <StarRatingSelector label="Max Rating" value={maxRating} onChange={setMaxRating} />
        <button
          onClick={handleApply}
          className="bg-black text-white px-4 py-2 rounded-md font-montserratr text-[14px]"
        >
          Apply Filters
        </button>
    </div>
    
  );
};

export default FilterBar;