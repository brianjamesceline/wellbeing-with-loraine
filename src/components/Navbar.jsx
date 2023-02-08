import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

export default function Newbar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Toggle />
      <Navbar.Brand className="pl-5">
        <img src="/images/logo.jpg" className="mr-5 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-[20px] font-montserrat dark:text-white">
          Wellbeing with Loraine
        </span>
      </Navbar.Brand>
      {/* <div className="flex md:order-2"> */}
      {/* <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown> */}

      {/* </div> */}
      <Navbar.Collapse className="pr-5 text-[18px] font-montserrat font-extrabold">
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Individual</Navbar.Link>
        <Navbar.Link href="/navbars">Corporate</Navbar.Link>
        <Navbar.Link href="/navbars">Health & Fitness</Navbar.Link>
        <Navbar.Link href="/navbars">How I Work</Navbar.Link>
        <Navbar.Link href="/navbars">Testimonials</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
