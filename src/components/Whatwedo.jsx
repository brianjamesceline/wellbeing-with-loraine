import React from "react";

export default function Whatwedo() {
  return (
    <div className="ml-10 mr-10 mb-2 pl-5 pr-5">
      <div className="mt-[160px] mb-5 font-montserrat font-regular text-[36px] text-center text-slate ">
        What we do?
      </div>
      <p className="font-montserrat font-light text-[30px] text-slate text-justify leading-10 mb-6">
        At Wellbeing with Loraine, we coach and inspire you to positively use
        your mindset, a growth mindset to help you achieve a lifestyle, whereby
        you prioritise yourself. We coach you to continuously feel good and
        experience happiness in your work environment including outside of work
        and successfully manage your emotions at the same time.
      </p>
      <div className="mb-20 flex justify-between pl-5 pr-5 font-montserrat font-light text-center text-[16px] uppercase text-slate ">
        <div className="">
          <img src="/images/ind-consultation.jpg"></img>
          <>Individual Consultation</>
        </div>
        <div>
          <img className="rounded-[12px] border border-slate-80 "src="/images/corporate.jpg"></img>
          <>Corporate</>
        </div>
        <div>
          <img src="/images/tailored-programmes.jpg"></img>
          <>Bespoke Programmes</>
        </div>
        <div>
          <img src="/images/wellbeing-days.jpg"></img>
          <>Wellbeing Days</>
        </div>
      </div>
    </div>
  );
}
