import React from "react";
import { Navbar } from "flowbite-react";

export default function Newbar() {
  return (
    
    <Navbar
      className="sticky top-0 z-10 max-w-screen-xl mx-auto"
      fluid={true}
      rounded={true}
    >
      <Navbar.Toggle />
      <Navbar.Brand className="pl-3 pr-3">
        <img src="/images/logo.jpg" className="mr-2 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-[18px] font-montserrat dark:text-white">
          Wellbeing with Loraine
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="pr-10 text-[17px] font-montserrat font-extrabold">
        <Navbar.Link
          href="/"
          active={true}
          className="active-link"
          style={{ backgroundColor: "#55BD92" }}
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/About" className="inactive-link">
          About
        </Navbar.Link>
        <Navbar.Link href="/Individual" className="inactive-link">
          Individual
        </Navbar.Link>
        <Navbar.Link href="/Corporate" className="inactive-link">
          Corporate
        </Navbar.Link>
        <Navbar.Link href="/Health&Fitness" className="inactive-link">
          Health & Fitness
        </Navbar.Link>
        <Navbar.Link href="/HowIWork" className="inactive-link">
          How I Work
        </Navbar.Link>
        <Navbar.Link href="/Testimonials" className="inactive-link">
          Testimonials
        </Navbar.Link>
        <Navbar.Link href="/Contact" className="inactive-link">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
