import React from "react";

export default function Corp_Consultancy() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="font-montserrat font-light text-lg text-slate ml-5 mr-5 mt-8">
        <h1 className="text-jade text-4xl mb-5">Corporate Consultancy</h1>
        <img className="mb-3" src="/images/corporate-consultancy.jpg" />
      </div>
      <div className="ml-5 mr-5">
        <p className="mb-5 font-montserrat font-light text-lg text-slate">
          At Wellness With Loraine we offer a corporate consultancy service for
          Health, Fitness and Wellbeing. This bespoke service is geared towards
          individual organisations and their employees at all levels.
        </p>
        <p className="mb-5 font-montserrat font-light text-lg text-slate">
          If you'd like find out more about our consultancy service, please do
          not hesitate to contact us.
        </p>
        <div className=" text-slate text-sm text-center mb-10">
          <div className="flex justify-center">
            <img className="w-[700px] mb-5" src="/images/Jim-Rohn.jpg" />
          </div>
          <div className="">
            <p className="justify-center items-center text-lg pl-5 pr-5">
              "Motivation is what gets you started. Habit is what keeps you
              going."
            </p>

            <p className=" text-jade text-[14px]">Jim Rohn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
