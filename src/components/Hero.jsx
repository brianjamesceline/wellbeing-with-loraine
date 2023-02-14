import React from "react";

export default function Herofront() {
  return (
    <>
      <div className="w-full">
        <div className="">
          <div className="ml-5 translate-y-96">
            <li className="list-none uppercase text-[20px] font-montserrat font-medium text-jade ">
              Wellbeing with
            </li>

            <li className=" list-none uppercase text-[30px] font-cinzel text-jade">
              Loraine
            </li>
          </div>
          <div className="">
            <img className="w-[700px] mb-2" src="/images/image_loraine.jpg" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              class="mr-3 mb-8 text-jade bg-white border border-jade font-montserrat rounded-lg text-[18px] px-5 py-2.5"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
