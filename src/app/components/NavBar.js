'use client'
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/main-logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
// import BookButton from "./BookButton";

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Practice", href: "/practice" },
    { name: "Contact Us", href: "/contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home')


  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5"  onClick={() => setCurrentPage('Home')} >
              <span className="sr-only">Bob Law</span>
              <Image  src={Logo} alt="bob law logo" width={200} height={50}/>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className={mobileMenuOpen ? `h-6 w-6 hidden fill-black` : `h-6 w-6 fill-black`} aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={item.name !== currentPage ? "text-sm font-semibold leading-6 text-black hover:text-black group transition duration-300" : "text-sm font-semibold leading-6 text-blue-700 hover:text-gold-500 group transition duration-300"}
                onClick={(e)=> setCurrentPage(e.target.text)}
              >
                {item.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span>

              </Link>
            ))}
            <Button mobile={false}/>
          </div>
        </nav>

        {/* MOBILE NAV BAR */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/5 overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Noire Beaute by J</span>
                {/* <Image  src={Logo} alt="noire beaute by j logo" width={200} height={50} /> */}
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black bg-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-20 w-6 fill-black" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-black">
                <div className="space-y-2 py-4 ">
                  {navigation.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className={item.name !== currentPage ? "-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-black " : "-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-blue-700  "}
                      onClick={(e)=> setCurrentPage(e.target.text)}
                    >
                      {item.name}
                    </Link>
                  ))}
            <Button mobile={true}/>
                  
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </div>
  );
};

export default NavBar;
