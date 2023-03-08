import React from 'react'

export default function HealthFood() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-28 mr-5 ml-5">
        <h1 className="text-jade text-4xl mb-5">Health & Fitness</h1>
        <p className="mb-5 font-montserrat font-light text-lg text-slate">
          I exercise five days a week. I complete a 8-10k power walk and morning
          run at 5:30am three times a week. The remaining two days, I complete a
          50 minute HIIT (High Intensity Interval Training) session using 12kg
          and 24kg Kettle Bells and a 15kg Medicine Ball. All five training
          sessions are finished with 20-25 minutes of stretching and
          incorporating Yoga moves.
        </p>
        <p className="mb-10 font-montserrat font-light text-lg text-slate">
          I love good food and I really look forward to my breakfast and this
          consists of a delicious bowl of porridge. Healthy, nutritious and
          satisfying. Sets me up for the day ahead.
        </p>
        <div className="ml-8 mr-8 text-center">
          <p className="mb-2 font-montserrat font-black text-sm text-black">
            Some of the meals I make and love to eat on a daily basis:
          </p>
          <div className="flex flex-wrap justify-evenly">
            <div className="justify-center border border-slate mb-10">
              <img className="mb-2" src="/images/Porridge.jpg" />

              <ul className="list-none mb-2 font-montserrat text-sm">
                <li className="underline underline-offset-2 font-bold text-black">
                  Porridge
                </li>
                <li>Ingredients:</li>
                <li>Gluten Free Porridge Oats</li>
                <li>Oat Milk</li>
                <li>Organic Sultanas</li>
                <li>Organic Blueberries</li>
                <li>Organic Walnuts - crushed</li>
                <li>Organic Cold Milled Flaxseed,</li>
                <li>Sunflower, Pumpkin &</li>
                <li>Chia Seeds & Goji Berries</li>
                <li>Topped of with Plump Raspberries</li>
              </ul>
            </div>

            <div className="border border-slate mb-10">
              <img className="mb-2" src="/images/Green_Salad.jpg" />

              <ul className="list-none mb-2 font-montserrat text-sm">
                <li className="underline underline-offset-2 font-bold text-black">
                  Green Salad for Lunch
                </li>
                <li>Ingredients:</li>
                <li>Organic Baby Spinach</li>
                <li>Purple Lettuce</li>
                <li>Half a ripe Avocado</li>
                <li>Sunflower Seeds</li>
                <li>Pine Nuts</li>
                <li>Dried Cranberries</li>
                <li>Pomegranite Seeds</li>
                <li>Flame Raisins</li>
              </ul>
            </div>

            <div className="border border-slate mb-10">
              <img className="mb-2" src="/images/Salmon.jpg" />

              <ul className="list-none mb-2 font-montserrat text-sm">
                <li className="underline underline-offset-2 font-bold text-black">
                  Baked Salmon with Avocado and Vegetables for Dinner
                </li>
                <li>Ingredients:</li>
                <li>Salmon Fillet baked with Benecol Butter,</li>
                <li>Himalayan Pink Salt and</li>
                <li>Parsley, fresh or dried.</li>
                <li>Half a ripe Avocado</li>
                <li>Sugar Snap Peas with Spinach and Kale</li>
                <li>tossed in butter and black pepper.</li>
              </ul>
            </div>
            <div className="border border-slate mb-10">
              <img className="mb-2" src="/images/Fruit_Salad.jpg" />

              <ul className="list-none mb-2 font-montserrat text-sm">
                <li className="underline underline-offset-2 font-bold text-black">
                  Fruit Salad for Lunch or Dessert
                </li>
                <li>Ingredients:</li>
                <li>Diced ripe Mango</li>
                <li>Red Grapes</li>
                <li>Raspberries</li>
                <li>Strawberries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
