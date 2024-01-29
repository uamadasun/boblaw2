import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="
             text-xs text-black text-center
             fixed
             inset-x-0
             bottom-0
             p-0.5
             mt-10 footer"
      >
        Copyright &copy; 2024 Bob Law. Developed and Designed by <Link href="https://uchenna.io" target="_blank"><span className="hover:text-noire-gold-300 font-bold">uchenna.io</span>.</Link>
      </footer>
    </div>
  );
};

export default Footer;
