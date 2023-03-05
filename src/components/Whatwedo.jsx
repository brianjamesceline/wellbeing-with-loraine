import React from "react";

export default function Whatwedo() {
  return (
    <div className=" bg-white text-slate">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
        <h2 className=" mb-2 text-4xl tracking-tight font-montserrat font-regular italic text-center">
          What we do?
        </h2>
        <p className=" flex font-light text-slate sm:text-lg md:px-20 lg:px-28 xl:px-48 text-left">
          At Wellbeing with Loraine, we coach and inspire you to positively use
          your mindset, a growth mindset to help you achieve a lifestyle,
          whereby you prioritise yourself. We coach you to continuously feel
          good and experience happiness in your work environment including
          outside of work and successfully manage your emotions at the same
          time.
        </p>
        {/* <div className="gap-4 mt-8 mb-10 sm:grid sm:grid-cols-2 sm:mt-12"> */}
        <div className="gap-4 mt-6 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <center>
            <img
              className="col-span-1 mt-6 mb-2 rounded-lg"
              src="/images/ind-consultation.jpg"
              alt="content gallery 1"
            />
            <>INDIVIDUAL CONSULTANCY</>
          </center>
          <center>
            <img
              className="col-span-2 mb-2 mt-6 sm:block rounded-lg border border-slate-80"
              src="/images/corporate.jpg"
              alt="content gallery 2"
            />
            <>CORPORATE</>
          </center>
          <center>
            <img
              className="col-span-3 mb-2 mt-6 sm:block rounded-lg"
              src="/images/tailored-programmes.jpg"
              alt="content gallery 3"
            />
            <>BESPOKE PROGRAMMES</>
          </center>
          <center>
            <img
              className="col-span-4 mb-2 mt-6 sm:block rounded-lg"
              src="images/wellbeing-days.jpg"
              alt="content gallery 4"
            />
            <>WELLBEING DAYS</>
          </center>
        </div>
      </div>
    </div>
  );
}
