import React from "react";

export default function Quote() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative mb-0 ">
        <img src="/images/quote-image1.jpg"></img>
        <div className="absolute top-3 left-3 right-0 px-4 py-2">
          <h1 className="md:text-6xl font-montserrat font-light text-[28px] text-black">
            "The key to your wellbeing is YOU"
          </h1>
          <h2 className="md:text-4xl pl-5 pt-5 font-montserrat font-normal text-[24px] text-jade">
            Loraine Stewart
          </h2>
        </div>
      </div>
    </div>
  );
}

