"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const FaQSection = () => {
  const t = useTranslations("faqSection");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: t("faqItems.faq1.question"),
      answer: t("faqItems.faq1.answer"),
    },
    {
      id: 2,
      question: t("faqItems.faq2.question"),
      answer: t("faqItems.faq2.answer"),
    },
    {
      id: 3,
      question: t("faqItems.faq3.question"),
      answer: t("faqItems.faq3.answer"),
    },
  ];

  return (
    <div className="py-[100px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Counters side */}
          <div className="lg:w-1/2 relative mb-12 lg:mb-0">
            <div className="relative">
              <Image
                width={460}
                height={460}
                src="/images/blog.webp"
                alt={t("heading")}
                className="rounded-lg"
              />

              {/* Counter boxes */}
              <div className="absolute bottom-[-50px] start-0 flex space-x-4">
                <div className="w-[170px] h-[140px] bg-[#B1946A] flex flex-col items-center justify-center text-center">
                  <h3 className="text-[48px] text-white mb-1">100+</h3>
                  <p className="text-[22px] text-white">
                    {t("counters.doctors")}
                  </p>
                </div>
                <div className="w-[170px] h-[140px] bg-[#24403f] flex flex-col items-center justify-center text-center">
                  <h3 className="text-[48px] text-white mb-1">16+</h3>
                  <p className="text-[22px] text-white">
                    {t("counters.offices")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ side */}
          <div className="lg:w-1/2 lg:pl-[70px]">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2">{t("heading")}</h3>
              <h2 className="text-[48px] text-anime-style-3">
                {t("subHeading")}
              </h2>
            </div>

            <div className="space-y-5">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-200 text-[#24403f]"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className={`w-full text-left text-[22px] duration-400 font-semibold py-3 px-5 relative flex justify-between items-center transition-all`}
                  >
                    {faq.question}
                    <span className="text-[20px] font-bold ml-2">
                      {activeAccordion === faq.id ? "-" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeAccordion === faq.id && (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.25, 0.8, 0.25, 1], // بتدي إحساس بالسلاسة
                        }}
                        className="overflow-hidden px-5 pb-4"
                      >
                        <p className="text-[18px] text-[#B1946A] max-w-[490px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQSection;
