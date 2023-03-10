import React from 'react'

export default function Work() {
  return (
    <div className="mx-auto max-w-screen-xl mt-10">
      <div className="font-montserrat font-light text-lg text-slate ml-5 mr-5 mt-8">
        <h1 className="mb-3 text-jade text-4xl lg:text-5xl">How I Work</h1>
        <div>
          <img className="w-full mb-10" src="/images/How_I_Work.jpg" />
        </div>
        <p className="text-black font-extrabold text-sm md:text-lg mb-2">
          Step 1.
        </p>
        <div className="text-slate text-sm md:text-lg mb-5">
          <p className="mb-3 text-jade">BRIEFING/CONSULTATION:</p>
          <p className="mb-3">
            You need to be at a stage where you are ready to make a change in
            your life and willing to apply effort for yourself.
          </p>
          <p>
            I then offer a consultation. This allows me to ask specific
            questions to establish what your requirements are for your health
            and fitness and wellbeing and give you the opportunity to explain
            what you’re looking to achieve from our sessions together.
          </p>
        </div>

        <p className="text-black font-extrabold text-sm md:text-lg mb-2">
          Step 2.
        </p>
        <div className="text-slate text-sm md:text-lg mb-5">
          <p className="mb-3 text-jade">
            HEALTH & FITNESS/WELLBEING PROGRAMME:
          </p>
          <p className="mb-3">
            I will tailor an exercise programme according to your needs and we
            will set and agree a date for this to commence. 45 minute exercise
            sessions will be delivered via zoom or in person dependent on
            location. An hourly Wellbeing Coaching session will be delivered
            preferably in person, however sessions can also be delivered via
            zoom upon request.
          </p>
        </div>

        <p className="text-black font-extrabold text-sm md:text-lg mb-2">
          Step 3.
        </p>
        <div className="text-slate text-sm md:text-lg mb-5">
          <p className="mb-3 text-jade">PROGRESS:</p>
          <p className="mb-3">
            I will continue to monitor your development on a weekly basis so
            that we can focus on your successes, achievements and I will provide
            feedback at the same time.
          </p>
        </div>

        <p className="text-black font-extrabold text-sm md:text-lg mb-2">
          Step 4.
        </p>
        <div className="text-slate text-sm md:text-lg mb-10">
          <p className="mb-3 text-jade">COMPLETION:</p>
          <p className="">
            This stage is reached when you feel you are ready and confident to
            move forward happily, healthily and successfully with your personal
            life and work life.
          </p>
        </div>
      </div>
      <hr class="h-px my-4 dark:text-slate"></hr>
    </div>
  );
}
