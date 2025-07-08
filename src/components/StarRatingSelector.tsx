import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  value: number;
  onChange: (value: number) => void;
  label: string;
};

const StarRatingSelector: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="font-montserratm text-[15px] mb-1">{label}</span>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((r) => (
          <FaStar
            key={r}
            className={`text-2xl cursor-pointer ${
              value >= r ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => onChange(r)}
          />
        ))}
      </div>
    </div>
  );
};
export default StarRatingSelector;