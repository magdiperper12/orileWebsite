"use client";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import SelectBox from "../ui/SelectBox";

const ContactUs = () => {
  const t = useTranslations("Contact");

  const states = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla45", label: "Vanilla" },
    { value: "vanilla09", label: "Vanilla" },
    { value: "chocolate78", label: "Chocolate" },
    { value: "strawberry34", label: "Strawberry" },
    { value: "vanilla54", label: "Vanilla" },
  ];
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="text-[#B1946A] text-lg font-medium mb-2">
            {t("fillForm")}
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-800">
            {t("title")}
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 ">
          {/* Left side */}
          <div className="col-span-1 flex flex-col items-center justify-center text-center bg-[#B1946A] shadow-lg rounded-s-2xl p-6">
            <Image
              width={200}
              height={150}
              src="/images/contact-us-img.png"
              alt="Contact Us"
              className="mb-4"
            />
            <div className="text-wrap max-w-48">
              <div
                className="text-2xl mt-4 font-semibold text-white  "
                dangerouslySetInnerHTML={{ __html: t.raw("appointment") }}
              />
            </div>
          </div>

          {/* Right side (form) */}
          <div className="col-span-2 bg-[#24403f] shadow-lg rounded-e-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t("name")}
                  className="w-full rounded-lg border placeholder:text-white border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#B1946A] focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("email")}
                  className="w-full rounded-lg border placeholder:text-white border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#B1946A] focus:outline-none"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <SelectBox options={states} />
                <input
                  type="date"
                  name="date"
                  placeholder={t("date")}
                  className="w-full  rounded-lg placeholder:text-white border  border-[#B1946A] px-4 py-1 focus:ring-2 focus:ring-[#B1946A] outline-none"
                  required
                />
              </div>

              <textarea
                name="msg"
                rows={5}
                placeholder={t("message")}
                className="w-full rounded-lg placeholder:text-white border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto mt-3 px-8 py-3 bg-[#B1946A] text-white rounded-lg shadow hover:bg-primary/90 transition"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
