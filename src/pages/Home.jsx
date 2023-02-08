import React from "react";
import Newbar from "../components/Navbar";
import Hero from "../components/Hero";
import Whatwedo from "../components/Whatwedo";

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <Newbar />
      <Hero />
      <Whatwedo />
    </>
  );
}
