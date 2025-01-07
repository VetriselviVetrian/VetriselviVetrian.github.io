"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IoSunnyOutline, IoMoon, IoSearch, IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
// import SearchBar from "./Searchbar";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Security Research Lab", href: "/security-research-lab" },
  { name: "CV", href: "#cv" },
];

const MAIN_PAGE_PATH = "/";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDraculaTheme, setIsDraculaTheme] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDraculaTheme(savedTheme === "dracula");

    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = (e) => {
      if (e.matches) setIsDrawerOpen(false);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "dracula" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDraculaTheme(e.target.checked);
    localStorage.setItem("theme", newTheme);
  };

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  // const toggleSearch = () => {
  //   setIsSearchOpen((prev) => !prev);
  //   if (isDrawerOpen) setIsDrawerOpen(false);
  // };

  const handleLinkClick = (linkHref) => {
    if (linkHref === "#cv") {
      const link = document.createElement("a");
      link.href = "/CV.pdf";
      link.download = "Vetriselvi_CV.pdf";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      setIsDrawerOpen(false);
    } else if (linkHref.startsWith("#")) {
      if (pathname === MAIN_PAGE_PATH) {
        const element = document.querySelector(linkHref);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`${MAIN_PAGE_PATH}${linkHref}`);
      }
      setIsDrawerOpen(false);
    } else {
      router.push(linkHref);
    }
  };

  const renderLinks = (className) => (
    <ul className={className}>
      {NAV_LINKS.map((link, index) => (
        <li key={index}>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            }}
            className="hover:bg-transparent hover:text-blue-500 transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderThemeSwitcher = () => (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        checked={isDraculaTheme}
        onChange={handleThemeChange}
      />
      <IoMoon className="swap-off h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-blue-500 transition-colors" />
      <IoSunnyOutline className="swap-on h-5 w-5 sm:h-6 sm:w-6 hover:text-blue-500 transition-colors" />
    </label>
  );

  return (
    <>
      <div
        className={`navbar bg-base-100 px-4 py-2 sticky top-0 z-40 transition-all duration-300 ${
          isScrolled && !isDrawerOpen ? "border-b shadow-md rounded-lg" : ""
        } ${isDraculaTheme ? "border-[#1D232A]" : "border-white"}`}
      >
        <div className="flex-1">
          <Link
            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-bold pl-2 md:ml-16 lg:ml-20 cursor-pointer"
          >
            Vetriselvi V
          </Link>
        </div>

        <div className="flex-none gap-4 sm:gap-6">
          <div className="hidden lg:flex menu menu-horizontal px-2 text-sm sm:text-base font-medium">
            {renderLinks(
              "menu-horizontal px-2 [&_li>*:not(.menu-title):active]:bg-transparent [&_li>*:not(.menu-title):active]:text-blue-500"
            )}
          </div>

          <div className="hidden sm:flex items-center gap-4 lg:mr-12">
            {/* <button
              onClick={toggleSearch}
              className="p-2 hover:text-blue-500 transition-colors"
              aria-label="Search"
            >
              <IoSearch
                className={`h-5 w-5 sm:h-6 sm:w-6 ${
                  isDraculaTheme ? "" : "text-black/95"
                }`}
              />
            </button> */}
            {renderThemeSwitcher()}
          </div>

          <button
            className="lg:hidden p-2 hover:text-blue-500 transition-colors"
            onClick={toggleDrawer}
            aria-label="Menu"
          >
            {isDrawerOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 z-30 transform transition-transform duration-300 ease-in-out bg-base-100 ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "64px" }}
      >
        <div className="p-4">
          {renderLinks("space-y-4 mb-6 text-base sm:text-lg")}

          <div className="flex items-center justify-center gap-8 border-t pt-4 md:mr-12">
            {/* <button
              onClick={toggleSearch}
              className="p-2 hover:text-blue-500 transition-colors"
              aria-label="Search"
            >
              <IoSearch
                className={`h-5 w-5 sm:h-6 sm:w-6 ${
                  isDraculaTheme ? "" : "text-black/95"
                }`}
              />
            </button> */}
            {renderThemeSwitcher()}
          </div>
        </div>
      </div>

      {/* <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        isDraculaTheme={isDraculaTheme}
      /> */}
    </>
  );
}
