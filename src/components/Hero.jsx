import React from "react";

export default function Herofront() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-end">
          <img className="" src="/images/image_loraine.jpg" />
        </div>
        <div className="transform -translate-y-60 md:-translate-y-96 lg:-translate-y-[25rem] lg:translate-x-20 xl:-translate-y-[30rem]">
          <p className="uppercase pl-6 text-[18px] md:text-[26px] lg:text-[40px] xl:text-[40px] font-montserrat font-light text-jade">
            Wellbeing with
          </p>
          <div className="w-[600px]">
            <img
              className="pl-6 w-[300px] md:w-[400px] lg:w-[450px]"
              src="/images/Loraine.png"
            />
            <div className="pl-20 pt-2">
              <p className="text-[12px] md:text-[16px] xl:translate-x-32 text-slate font-montserrat">
                Certified Wellbeing Coach and
              </p>
              <p className="text-[12px] md:text-[16px] xl:translate-x-36 pl-5 text-slate font-montserrat">
                Health Fitness Instructor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end -translate-y-28 mr-5 md:-translate-y-36 lg:-translate-y-48 xl:-translate-y-60">
        <button
          type="button"
          class="mb-0 text-jade bg-white border border-jade font-montserrat rounded-lg text-[18px] px-5 py-2.5"
        >
          Schedule a Call
        </button>
      </div>
    </>
  );
}
