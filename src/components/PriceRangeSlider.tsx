import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import type { FC } from "react";

type Props = {
  value: [number, number];
  onChange: (val: [number, number]) => void;
};

const PriceRangeSlider: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-md px-4">
      <label className="block font-montserratm text-[15px] mb-2">Price Range</label>
      <Slider
        range
        min={0}
        max={35000}
        step={100}
        defaultValue={value}
        onChange={(val) => onChange(val as [number, number])}
        trackStyle={[{ backgroundColor: "#000" }]}
        handleStyle={[{ borderColor: "#000" }, { borderColor: "#000" }]}
        railStyle={{ backgroundColor: "#ccc" }}
      />
      <div className="flex justify-between font-montserratr text-[15] mt-1">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;