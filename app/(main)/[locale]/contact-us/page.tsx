"use client";

import ContactUs from "@/components/sections/ContactUs";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useTranslations } from "next-intl";
import React from "react";
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const t = useTranslations("Contact");

  return (
    <>
      <BreadCrumb
        title={t("ContactUs")}
        breadcrumbs={[{ name: t("ContactUs") }]}
      />

      {/* Contact Information Section */}
      <div
        className="bg-[#B1946A] w-full max-w-3xl mx-auto px-5 -mt-16 relative z-10 mb-12 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className=" gap-6 py-10 flex justify-center items-start text-center">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <div className="text-accent text-3xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white   mb-1">
                رقم الجوال
              </h3>
              <p className="text-transparentColor">920006446</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-3">
            <div className="text-accent text-3xl">
              <FaEnvelopeOpenText />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white   mb-1">
                الموقع
              </h3>
              <p className="text-transparentColor">
                جدة - المملكة العربية السعودية
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <div className="text-accent text-3xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white   mb-1">
                البريد
              </h3>
              <p className="text-transparentColor">info@orielclinics.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactUs />
    </>
  );
};

export default ContactPage;
