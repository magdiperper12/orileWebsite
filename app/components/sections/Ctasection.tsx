"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarDays } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Ctasection: React.FC = () => {
  const t = useTranslations("ctaSection");

  return (
    <div className="py-[65px] bg-[#24403f]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Content */}
          <div className="flex items-center lg:w-2/3 mb-8 lg:mb-0">
            <div className="w-[100px] me-10 flex-shrink-0">
              <Image
                width={260}
                height={200}
                src="/images/icon-appointment.svg"
                alt={t("title")}
              />
            </div>
            <div className="flex-1">
              <div className="text-[48px] text-gray-200 mb-5">{t("title")}</div>
              <div className="text-gray-400">{t("description")}</div>
            </div>
          </div>

          {/* Right Button */}
          <div className="lg:w-1/3 w-full flex justify-end">
            <Link href="#">
              <div className="relative inline-flex items-center text-[18px] duration-150 group font-medium text-[#B1946A] hover:bg-[#B1946A] border-2 border-accent rounded-full px-7 py-3 overflow-hidden">
                <div className="group-hover:text-white">{t("button")}</div>
                <FaCalendarDays className="m-2 group-hover:text-white" />
                {/* Hover overlay */}
                <span className="absolute top-1/2 left-1/2 w-0 h-[104%] bg-secondary opacity-0 rounded-md -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out group-hover:w-[106%] group-hover:opacity-100 -z-10"></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ctasection;
