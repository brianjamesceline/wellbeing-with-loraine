import React from "react";

export default function Herofront() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="">
          <div className="flex justify-end">
            <img className="" src="/images/image_loraine.jpg" />
          </div>
          <div className="transform -translate-y-60 lg:-translate-y-96 lg:translate-x-20">
            <li className="list-none uppercase pl-6 text-[20px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-montserrat xl:font-bold text-jade ">
              Wellbeing with
            </li>
            <li className="font-cinzel-decorative uppercase list-none pl-6 text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] xl:font-bold text-jade">
              Loraine
            </li>
          </div>
        </div>
        <div className="flex justify-end -translate-y-16 mr-5 md:-translate-y-24 xl:-translate-y-24">
          <button
            type="button"
            class="mb-8 text-jade bg-white border border-jade font-montserrat rounded-lg text-[18px] px-5 py-2.5"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </>
  );
}
