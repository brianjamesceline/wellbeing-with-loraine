import React from "react";

export default function Quote() {
  return (
    <div className="relative">
      <img src="/images/quote-image1.jpg"></img>
      <div className="absolute top-10 left-10 right-0 px-4 py-2">
        <h1 className="font-montserrat font-light text-[56px] text-black">
          "The key to your wellbeing is YOU"
        </h1>
        <h2 className="pl-10 font-montserrat font-light text-[30px] text-jade">
          Loraine Stewart
        </h2>
      </div>
    </div>
  );
}

