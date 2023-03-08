import React from "react";

export default function Ind_Consultation() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="ml-5 mr-5 mt-10">
        <div className="flex flex-wrap justify-evenly">
          <h1 className="text-jade text-4xl mr-10 mb-5 lg:mt-48 xl:text-5xl">
            Individual Consultation
          </h1>
          <img
            className="w-[400px] mb-3"
            src="/images/ind-consultation-lg.jpg"
          />
        </div>

        <div className="text-slate text-lg mb-5">
          <p className="mb-2">
            As a Wellbeing Coach I coach and inspire you to positively use your
            mindset, a growth mindset to help you achieve a lifestyle, whereby
            you prioritise yourself. I coach you to continuously feel good and
            experience happiness in your work environment including outside of
            work and successfully manage your emotions at the same time.
          </p>
          <p className="mb-5">
            Together we set your health, fitness and wellbeing goals using
            self-motivation and inspired motivation. Identifying where you’re
            at, where you want to go and how do you want to get there.
          </p>

          <p className="mb-10">
            I encourage you to be dedicated to yourself and be disciplined with
            your goals whilst allowing yourself to celebrate joys along the way.
            To build a routine into your life and remain disciplined. To
            incorporate exercise and an excellent diet into your life and make
            it a lifestyle habit, forever. I work with you on how to create a
            routine that works for you as an individual and as a team if you’re
            in the corporate arena to help improve your wellbeing and physical
            health.
          </p>
        </div>
        <div className=" text-slate text-sm text-center mb-5">
          <div className="flex justify-center mb-5">
            <img className="w-[700px] mb-0" src="/images/quote-mirror.jpg" />
          </div>
          <p className="text-lg">
            "Look in the mirror that's your competition"
          </p>
          <p className="text-jade text-sm">John Assaraf</p>
        </div>
      </div>
      <hr class="h-px my-8 dark:text-slate"></hr>
    </div>
  );
}
