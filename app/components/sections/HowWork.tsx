"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const HowWork = () => {
  const t = useTranslations("howWork");

  const steps = [
    {
      id: 1,
      src: "/images/icon-work-step-1.svg",
      alt: t("steps.step1"),
      title: t("steps.step1"),
      delay: 0,
    },
    {
      id: 2,
      src: "/images/icon-work-step-2.svg",
      alt: t("steps.step2"),
      title: t("steps.step2"),
      delay: 150,
    },
    {
      id: 3,
      src: "/images/icon-work-step-3.svg",
      alt: t("steps.step3"),
      title: t("steps.step3"),
      delay: 300,
    },
    {
      id: 4,
      src: "/images/icon-work-step-4.svg",
      alt: t("steps.step4"),
      title: t("steps.step4"),
      delay: 450,
    },
  ];

  return (
    <div className="py-[100px] pb-[70px] bg-light-accent">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-16">
          <div className="md:w-1/2 pr-0 md:pr-[100px] mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-2" data-aos="fade-up">
              {t("heading")}
            </h3>
            <h2 className="text-[48px] text-anime-style-3">
              {t("subHeading")}
            </h2>
          </div>
          <div className="md:w-1/2" data-aos="fade-up">
            <p className="text-transparent-secondary">{t("description")}</p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="text-center mb-8 h-full"
              data-aos="fade-up"
              data-aos-delay={step.delay}
            >
              <div className="mb-4">
                <Image
                  width={160}
                  height={100}
                  src={step.src}
                  alt={step.alt}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-[22px] text-text capitalize">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWork;
