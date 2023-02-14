import React from "react";
import Newbar from "../components/Navbar";
import Hero from "../components/Hero";
import Whatwedo from "../components/Whatwedo";
import Quote1 from "../components/Quote1";
import Mindset from "../components/Mindset";
import Success from "../components/Success";

export default function Home() {
  return (
    <>
      <Newbar />
      <Hero />
      <Whatwedo />
      <Quote1 />
      <Mindset />
      <Success />
    </>
  );
}
