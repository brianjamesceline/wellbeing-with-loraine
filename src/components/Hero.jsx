import React from "react";

export default function Herofront() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
          <div className="">
            <div className="flex justify-end">
              <img className="mb-0" src="/images/image_loraine.jpg" />
            </div>
            <div className="justify-center -translate-y-60">
              <li className="list-none uppercase text-[20px] font-montserrat font-medium text-jade ">
                Wellbeing with
              </li>
              <li className=" list-none uppercase text-[30px] font-cinzel text-jade">
                Loraine
              </li>
            </div>
          </div>
          <div className="flex justify-center">
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
