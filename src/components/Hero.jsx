import React from "react";

export default function Herofront() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div>
          <div className="">
            <div className="">
              <img className="mb-8" src="/images/image_loraine.jpg" />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              class="mr-14 mb-8 text-jade bg-white border border-jade font-montserrat rounded-lg text-[18px] px-5 py-2.5"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto ml-5 -translate-y-60">
        <li className="list-none uppercase text-[20px] font-montserrat font-medium text-jade ">
          Wellbeing with
        </li>
        <li className=" list-none uppercase text-[30px] font-cinzel text-jade">
          Loraine
        </li>
      </div>
    </>
  );
}
