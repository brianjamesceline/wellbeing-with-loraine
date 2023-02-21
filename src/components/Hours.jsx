import React from "react";

export default function Hours() {
  return (
    <section className=" bg-jade mb-1 pb-5 font-montserrat">
      <div>
        <div className="ml-6 mb-10 text-white">
          <p className="pt-5 pb-2 uppercase underline">Business Hours</p>
          <ul className=" mr-8">
            <div className="flex justify-between">
              <li>Monday</li>
              <li>9.00 a.m. - 5.00 p.m.</li>
            </div>
            <div className="flex justify-between">
              <li>Tuesday</li>
              <li>9.00 a.m. - 5.00 p.m.</li>
            </div>
            <div className="flex justify-between">
              <li>Wednesday</li>
              <li>9.00 a.m. - 5.00 p.m.</li>
            </div>
            <div className="flex justify-between">
              <li>Thursday</li>
              <li>9.00 a.m. - 5.00 p.m.</li>
            </div>
            <div className="flex justify-between">
              <li>Friday</li>
              <li>9.00 a.m. - 5.00 p.m.</li>
            </div>
            <div className="flex justify-between">
              <li>Saturday</li>
              <li>10.00 a.m. - 4.00 p.m.</li>
            </div>
            <div className="flex justify-between">
              <li>Sunday</li>
              <li>Closed</li>
            </div>
            
          </ul>
        </div>
        <address class="ml-6 mr-8 not-italic">
          <p class=" pb-2 font-semibold text-white uppercase underline">
            Contact
          </p>
          <p class=" mb-3 text-white">
            167-169 Great Portland Street, 5th Floor, London W1W 5PF United
            Kingdom.
          </p>
          <ul class="space-y-3 text-white">
            <li class="flex items-center">
              <svg
                class=" mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a
                href="mailto:loraine@wellbeingwithloraine.co.uk"
                class="ml-0 hover:underline"
              >
                loraine@wellbeingwithloraine.co.uk
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}
