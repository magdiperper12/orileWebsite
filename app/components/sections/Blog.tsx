"use client";

import React from "react";
import BlogItemsSection from "../Blogs/BlogSection";
import { useTranslations } from "next-intl";

const BlogSection = () => {
  const t = useTranslations("blog");

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8">
          <div className="w-full lg:w-5/12">
            <div>
              <h3
                data-aos="fade-up"
                className="text-lg font-medium text-[#24403f]"
              >
                {t("heading")}
              </h3>
              <div className="text-3xl md:text-4xl font-bold text-[#B1946A] mt-2">
                {t("subHeading")}
              </div>
            </div>
          </div>
        </div>
        <BlogItemsSection />
      </div>
    </section>
  );
};

export default BlogSection;
