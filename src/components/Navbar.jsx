import React from "react";
import { Navbar } from "flowbite-react";

export default function Newbar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Toggle />
      <Navbar.Brand className="pl-3 pr-3">
        <img src="/images/logo.jpg" className="mr-2 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-[20px] font-montserrat dark:text-white">
          Wellbeing with Loraine
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="pr-5 text-[18px] font-montserrat font-extrabold">
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/About">About</Navbar.Link>
        <Navbar.Link href="/Individual">Individual</Navbar.Link>
        <Navbar.Link href="/Corporate">Corporate</Navbar.Link>
        <Navbar.Link href="/Health&Fitness">Health & Fitness</Navbar.Link>
        <Navbar.Link href="/HowIWork">How I Work</Navbar.Link>
        <Navbar.Link href="/Testimonials">Testimonials</Navbar.Link>
        <Navbar.Link href="/Contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
