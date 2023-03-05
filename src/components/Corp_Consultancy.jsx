import React from 'react'

export default function Corp_Consultancy() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mr-5 ml-5 mt-36">
        <h1 className="text-jade text-4xl mb-5">Corporate Consultancy</h1>
        <img
          className="mb-3"
          src="/images/corporate-consultancy.jpg"
        />
      </div>
      <div className="ml-5 mr-5">
        <p className="mb-2 font-montserrat font-light text-sm text-slate">
          At Wellness With Loraine we offer a corporate consultancy service for
          Health, Fitness and Wellbeing. This bespoke service is geared towards
          individual organisations and their employees at all levels.
        </p>
        <p className="mb-5 font-montserrat font-light text-sm text-slate">
          If you'd like find out more about our consultancy service, please do
          not hesitate to contact us.
        </p>
        <div className="flex text-slate text-sm text-center mb-10">
          <img className="w-[700px] mb-0" src="/images/Jim-Rohn.jpg" />
          <div className="">
            <p className="justify-center items-center text-lg pl-5 pr-5">
              "Motivation is what gets you started. Habit is what keeps you
              going."
            </p>

            <p className=" text-jade text-[12px]">Jim Rohn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
