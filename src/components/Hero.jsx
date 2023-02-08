import React from "react";

export default function Herofront() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="place-self-center translate-x-60">
            <li className="list-none uppercase text-[30px] font-montserrat font-medium text-jade ">
              Wellbeing with
            </li>

            <li className=" list-none uppercase text-[100px] font-cinzel text-jade">
              Loraine
            </li>
          </div>
          <img className="w-[700px]" src="/images/image_loraine.jpg" />
        </div>
        <div>
          <button
            type="button"
            class="absolute right-0 mt-5 text-jade bg-white border border-jade focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat rounded-lg text-[30px] px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </>
  );
}
