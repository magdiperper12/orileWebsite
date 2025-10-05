// components/Footer.tsx
"use client";

import { FC, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelopeOpenText,
  FaPhone,
  FaClock,
} from "react-icons/fa";

const socialLinks = [
  { href: "#", icon: <FaLinkedinIn /> },
  { href: "#", icon: <FaYoutube /> },
  { href: "#", icon: <FaTwitter /> },
  { href: "#", icon: <FaInstagram /> },
  { href: "#", icon: <FaFacebookF /> },
];

const quickLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Doctors" },
  { href: "#", label: "Services" },
  { href: "#", label: "ContactUs" },
];

const contactDetails = [
  { icon: <FaMapMarkerAlt />, text: "Jl. Raya Kuta No.70, Kuta" },
  { icon: <FaEnvelopeOpenText />, text: "healthcare@gmail.com" },
  { icon: <FaPhone />, text: "+01 547 547 5478" },
  { icon: <FaClock />, text: "8 AM - 5 PM, Monday - Saturday" },
];

const Footer: FC = () => {
  const t = useTranslations("Footer");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    alert(`${t("NewsletterSuccess")} ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#24403f] text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <Image
                src="/images/footer-logo.svg"
                alt={t("LogoAlt")}
                width={160}
                height={100}
              />
            </div>
            <p className="text-white mb-4">{t("AboutText")}</p>
            <div className="flex space-x-4 text-[#B1946A] text-xl">
              {socialLinks.map((link, idx) => (
                <Link key={idx} href={link.href} aria-label="social-link">
                  <span className="text-[#B1946A] transition-colors">
                    {link.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="text-[#B1946A] font-semibold mb-4 text-2xl">
              {t("QuickLinks")}
            </div>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    <span className="text-white">{t(link.label)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <div className="text-[#B1946A] font-semibold mb-4 text-2xl">
              {t("ContactDetails")}
            </div>
            <ul className="space-y-3">
              {contactDetails.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="mt-1 text-[#B1946A] text-lg">
                    {item.icon}
                  </span>
                  <span className="text-white">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <div className="text-[#B1946A] font-semibold mb-4 text-2xl">
              {t("Newsletter")}
            </div>
            <p className="text-white mb-4">{t("NewsletterText")}</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("EmailPlaceholder")}
                className="p-2 rounded-lg border border-[#B1946A] outline-none focus:ring-2 focus:ring-[#B1946A]"
                required
              />
              <button
                type="submit"
                className="bg-[#B1946A] hover:bg-[#7b674a] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {t("Subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-[#96c9c8] text-sm">
          © 2024 <span className="text-white font-semibold">MediPro</span>.{" "}
          {t("AllRights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
