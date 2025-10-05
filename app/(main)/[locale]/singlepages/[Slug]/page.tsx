"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  const t = useTranslations("Aboutpage"); // نستخدم namespace جديد للصفحة

  return (
    <>
      <BreadCrumb title={t("AboutUs")} breadcrumbs={[{ name: t("AboutUs") }]} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="space-y-6" dir={t("dir")}>
              <h2
                data-aos="fade-up"
                className="text-3xl font-bold text-[#B1946A]"
              >
                {t("title")}
              </h2>

              <h3
                data-aos="fade-up"
                className="text-2xl font-semibold text-gray-800"
              >
                {t("ourStoryTitle")}
              </h3>
              <p data-aos="fade-up" className="text-gray-600 leading-relaxed">
                {t("ourStory")}
              </p>

              <p data-aos="fade-up" className="text-gray-600 leading-relaxed">
                {t("ourMission")}
              </p>

              <h3
                data-aos="fade-up"
                className="text-2xl font-semibold text-gray-800"
              >
                {t("whoWeAreTitle")}
              </h3>
              <p data-aos="fade-up" className="text-gray-600 leading-relaxed">
                {t("whoWeAre")}
              </p>

              <h3
                data-aos="fade-up"
                className="text-2xl font-semibold text-gray-800"
              >
                {t("identityTitle")}
              </h3>
              <p data-aos="fade-up" className="text-gray-600 leading-relaxed">
                {t("identity")}
              </p>

              <h3
                data-aos="fade-up"
                className="text-2xl font-semibold text-gray-800"
              >
                {t("visionTitle")}
              </h3>
              <p data-aos="fade-up" className="text-gray-600 leading-relaxed">
                {t("vision")}
              </p>

              <h3
                data-aos="fade-up"
                className="text-2xl font-semibold text-gray-800"
              >
                {t("whyChooseUs")}
              </h3>
            </div>
          </div>

          {/* Image */}
          <div data-aos="fade-up" className="flex justify-center">
            <Image
              width={500}
              height={500}
              src="https://www.orielclinics.com/thumbnail/0/450/75/storage/pages/2fY9jUfGX0BxG9nlNrObi9eRe36FKUevEKgFme5P.jpg"
              alt={t("title")}
              loading="lazy"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
