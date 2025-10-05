"use client";
import Image from "next/image";
import React from "react";
import { motion, easeOut } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// ⭐ Render Stars
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;
    if (rating >= index) {
      return <FaStar key={index} className="text-[#f0ad4e] text-lg" />;
    } else if (rating >= index - 0.5) {
      return <FaStarHalfAlt key={index} className="text-[#f0ad4e] text-lg" />;
    } else {
      return <FaRegStar key={index} className="text-[#f0ad4e] text-lg" />;
    }
  });
};

// 🎬 Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const Testimonial = () => {
  const t = useTranslations("testimonial");

  const testimonials = [
    {
      id: 1,
      image: "/images/blog.webp",
      name: t("items.t1.name"),
      role: t("items.t1.role"),
      review: t("items.t1.review"),
      rating: 2.6,
    },
    {
      id: 2,
      image: "/images/blog.webp",
      name: t("items.t2.name"),
      role: t("items.t2.role"),
      review: t("items.t2.review"),
      rating: 4.5,
    },
    {
      id: 3,
      image: "/images/blog.webp",
      name: t("items.t3.name"),
      role: t("items.t3.role"),
      review: t("items.t3.review"),
      rating: 3.5,
    },
    {
      id: 4,
      image: "/images/blog.webp",
      name: t("items.t4.name"),
      role: t("items.t4.role"),
      review: t("items.t4.review"),
      rating: 4,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff] via-[#effffe] to-body py-[100px] pb-[50px]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div
            className="text-lg font-medium text-[#B1946A] mb-2"
            data-aos="fade-up"
          >
            {t("heading")}
          </div>
          <div className="text-4xl font-bold text-[#B1946A] text-anime-style-3">
            {t("subHeading")}
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item) => (
            <motion.div key={item.id} variants={itemVariant}>
              <div className="bg-[#FFF7F4] border border-[#B1946A] p-6 rounded-2xl shadow-lg hover:shadow-md  h-full">
                {/* Header */}
                <div className="flex items-center mb-3 gap-3">
                  <div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="min-w-[60px] h-[60px] rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[22px] font-semibold  capitalize mb-1">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#B1946A]">{item.role}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-2  space-x-1">
                  {renderStars(item.rating)}
                </div>

                {/* Review */}
                <div className="text-[18px] text-transparent-secondary">
                  {item.review}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
