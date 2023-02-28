import React from "react";

export default function Companies() {
  return (
    <div>
      <p className="font-Montserrat text-lg text-center ml-5 mr-5 mb-5">
        Companies I have worked with...
      </p>
      <div className="flex flex-wrap justify-evenly ml-2 mr-2 mb-0 pt-5">
        <img className="pb-10" src="/images/Virgin.jpg" />
        <img className="pb-10" src="/images/David_Lloyd.jpg" />
        <img className="pb-10" src="/images/Fitness_First.jpg" />
        <img className="pb-10" src="/images/Esporta.jpg" />
        <img className="pb-10" src="/images/Inner_Beauty.jpg" />
        <img className="pb-10" src="/images/Soho_Gyms.jpg" />
        <img className="pb-10" src="/images/Bedford_House.jpg" />
        <img className="pb-10" src="/images/Places_Leisure.jpg" />
      </div>
    </div>
  );
}
