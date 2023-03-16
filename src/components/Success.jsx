import React from "react";

export default function Success() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" ml-4 mr-4 mb-5 font-montserrat font-light text-[34px] text-center text-jade">
        Success Stories...
      </div>
      <div className="flex flex-wrap gap-4 justify-center ml-5 mr-5">
        <div className="box-content h-[320px] w-[250px] border border-emerald-500 mb-5 pl-3 pt-0 pr-3 pb-0 rounded-lg">
          <div>
            <img className="pt-3 pb-4" src="/images/Apostrophe1.jpg" />
          </div>
          <p className="font-montserrat font-light text-[14px] text-left pb-4 text-slate">
            Really enjoyed the session and how Loraine tailored it to use
            personal comments from her conversations with the team, very
            impactful and I have reflected a lot following the session.
          </p>
          <div className="flex justify-end">
            <img className="pt-0 pb-0" src="/images/Apostrophe2.jpg" />
          </div>
          <div className="">
            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
              Andy Crotty
            </h2>
            <p class="text-xs font-normal text-jade">
              Joint Managing Director – OTD Limited
            </p>
          </div>
        </div>
        <div className="box-content h-[320px] w-[250px] border border-emerald-500 mb-5 pl-3 pt-0 pr-3 pb-0 rounded-lg">
          <div>
            <img className="pt-3 pb-4" src="/images/Apostrophe1.jpg" />
          </div>
          <p className="font-montserrat font-light text-[14px] text-left pb-2 text-slate">
            Everything was incredibly well thought and so inspiring and
            motivational! I enjoyed the session as it was tailored to every
            single member of the team as comments from her pre-conversations
            with the team were used. Loraine’s energy was impactful, and I have
            reflected a lot following the session.
          </p>
          <div className="flex justify-end">
            <img className="pt-0 pb-0" src="/images/Apostrophe2.jpg" />
          </div>
          <div className="">
            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
              Becky Farnworth
            </h2>
            <p class="text-xs font-normal text-jade">
              Head of Operations – OTD Limited
            </p>
          </div>
        </div>
        <div className="box-content h-[320px] w-[250px] border border-emerald-500 mb-5 pl-3 pt-0 pr-3 pb-0 rounded-lg">
          <div>
            <img className="pt-3 pb-4" src="/images/Apostrophe1.jpg" />
          </div>
          <p className="font-montserrat font-light text-[14px] text-left pb-4 text-slate">
            The session was absolutely fantastic and engaging. I felt very
            motivated and empowered by the training and would like to see more
            to encourage this. Thank you for an amazing session Loraine!
          </p>
          <div className="flex justify-end">
            <img className="pt-0 pb-0" src="/images/Apostrophe2.jpg" />
          </div>
          <div className="">
            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
              Hayley Rock
            </h2>
            <p class="text-xs font-normal text-jade">
              Customer Experience Coordinator
            </p>
            <p class="text-xs font-normal text-jade">at OTD Ltd</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-10">
          <button
            type="button"
            class="mr-3 mb-0 text-jade bg-white border border-jade font-montserrat rounded-lg text-[18px] px-5 py-2.5"
          >
            See More Stories
          </button>
        </div>
      </div>
      <hr class="h-px my-8 dark:text-slate "></hr>
    </div>
  );
}
