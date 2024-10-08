import { ArrowDown } from "lucide-react";
import React from "react";

const Picks = ({ top, paragrapg }) => {
  return (
    <div className="py-3 cursor-pointer">
      <h1 className="font-medium text-[14px]  uppercase">{top}</h1>
      <h1 className="font-semibold text-[18px] text-blue-800 font-sans underline hover:no-underline">
        {paragrapg}
      </h1>
      <div className="flex items-center">
        <ArrowDown className="text-blue-800" size={18} />
        <p className="text-lg hover:underline">Jump to Review</p>
      </div>
    </div>
  );
};

export default Picks;
