"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

type NavBarProps = { locale: string };

const NavBar = ({ locale }: NavBarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations("NavBar");

  //روابط القائمة الأساسية
  const navItems = [
    { label: t("Home"), href: "/" },
    { label: t("Devices"), href: "/devices" },
    { label: t("Doctors"), href: "/doctors" },
    { label: t("Offers"), href: "/offers" },
  ];

  //الدروب داونز
  const dropdowns: Record<string, { label: string; href: string }[]> = {
    blog: [{ label: t("Blog"), href: "/blog" }],
    about: [
      { label: t("AboutUs"), href: "/singlepages/ABOUT_US" },
      { label: t("Contact Us"), href: "/contact-us" },
      { label: t("Complains"), href: "/complains" },
      { label: t("Demands"), href: "/demands" },
    ],
    user: [
      { label: `${t("Balance")}: 0`, href: "/user/balance" },
      { label: t("MyAccount"), href: "/user/account" },
      { label: t("Reservations"), href: "/user/reservations" },
      { label: t("PaidOffers"), href: "/user/paid-offers" },
      { label: t("Login"), href: "/user/login" },
    ],
  };

  return (
    <header className="w-full z-50 fixed top-0 left-0  lg:py-6 transition-all duration-300 bg-[#24403f] ">
      <div
        className={`max-w-7xl mx-auto px-4 py-2  lg:px-8  flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" width={160} height={100} alt="Logo" />
        </Link>
        {/* Mobile Toggle */}

        <div className="text-white bg-[#B1946A] rounded-lg  lg:hidden  w-8 h-8 text-2xl flex items-center justify-center">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "mobile" ? null : "mobile")
            }
          >
            {openDropdown === "mobile" ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {/* روابط أساسية */}
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <div className="hover:text-[#B1946A] text-[#FFFFFF]">
                {item.label}
              </div>
            </Link>
          ))}

          {/* الدروب داونز */}
          {Object.entries(dropdowns).map(([key, items]) => (
            <div key={key} className="relative">
              <button
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
                className="hover:text-[#B1946A] text-[#FFFFFF] flex items-center gap-1 justify-start"
              >
                <RiArrowDropDownLine className="text-2xl" />
                {key === "blog"
                  ? t("Blog")
                  : key === "about"
                  ? t("AboutUs")
                  : "مروان ممدوح"}
              </button>

              <AnimatePresence>
                {openDropdown === key && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -10, scaleY: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute mt-2 w-48 bg-[#B1946A] shadow-lg rounded-md py-2 origin-top"
                  >
                    {items.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="block px-4 py-2"
                      >
                        <div className="hover:text-black text-white">
                          {link.label}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Locale */}
          <Link href={locale === "ar" ? "/en" : "/ar"}>
            <div className="hover:text-[#B1946A] text-[#FFFFFF]">
              {locale === "ar" ? "EN" : "AR"}
            </div>
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <i className="fa fa-shopping-cart text-xl hover:text-[#B1946A] text-[#FFFFFF]"></i>
            <span className="absolute -top-4 -left-2 bg-[#B1946A] text-white rounded-full w-5 h-5 text-base flex items-center justify-center">
              0
            </span>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openDropdown && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden  space-y-2 px-4 overflow-hidden"
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="block"
                onClick={() => setOpenDropdown(null)}
              >
                <div className="hover:text-[#B1946A] text-[#FFFFFF]">
                  {item.label}
                </div>
              </Link>
            ))}

            {/* Dropdowns inside mobile */}
            {Object.entries(dropdowns).map(([key, items]) => (
              <div key={key} className="space-y-1">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === key ? null : key)
                  }
                  className="hover:text-black  text-[#FFFFFF] flex items-center gap-1 justify-start w-full"
                >
                  <RiArrowDropDownLine className="text-2xl" />
                  {key === "blog"
                    ? t("Blog")
                    : key === "about"
                    ? t("AboutUs")
                    : "مروان ممدوح"}
                </button>

                <AnimatePresence>
                  {openDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="pl-6 space-y-1 bg-[#B1946A] p-2 rounded-lg mt-1"
                    >
                      {items.map((link, i) => (
                        <Link key={i} href={link.href} className="block">
                          <div
                            className="hover:text-black text-white  "
                            onClick={() => setOpenDropdown(null)}
                          >
                            {link.label}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Locale + Login */}
            <Link href="/user/login" className="block">
              <div className="hover:text-[#B1946A] text-[#FFFFFF]">
                {t("Login")}
              </div>
            </Link>
            <Link href={locale === "ar" ? "/en" : "/ar"} className="block">
              <div className="hover:text-[#B1946A] text-[#FFFFFF]">
                {locale === "ar" ? "EN" : "AR"}
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
