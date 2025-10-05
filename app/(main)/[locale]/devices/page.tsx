"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import Pagination from "@/components/ui/pagination";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface Device {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const Device = () => {
  const t = useTranslations("devices");
  const devicesList: Device[] = [
    {
      id: 1,
      title: "كريستال برو",
      description:
        "جهاز متخصص في نحت الجسم مع والتخلص  من الدهون العنيدة بفضل تق...",
      image: "/images/blog.webp",
      slug: "Crystal-Pro",
    },
    {
      id: 2,
      title: "كريستال برو",
      description:
        "جهاز متخصص في نحت الجسم مع والتخلص من الدهون العنيدة بفضل تق...",

      image: "/images/blog.webp",
      slug: "Crystal-Pro",
    },
    {
      id: 3,
      title: "كريستال برو",
      description:
        "جهاز متخصص في نحت الجسم  مع والتخلص من الدهون العنيدة بفضل تق...",
      image: "/images/blog.webp",
      slug: "Crystal-Pro",
    },
  ];

  return (
    <>
      {/* BreadCrumb */}
      <BreadCrumb title={t("Devices")} breadcrumbs={[{ name: t("Devices") }]} />

      <div className="py-10 px-2 md:px-12">
        <div className="text-2xl md:text-xl  text-center mb-10 text-[#B1946A] p-4">
          {t("Devices")}
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container">
          {devicesList.map((device, index) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#24403f] shadow-md p-4 hover:shadow-xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-[33vh] lg:h-[46vh]">
                <Image
                  src={device.image}
                  alt={device.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className=" flex flex-col flex-grow w-full mt-3">
                <div className="text-xl font-bold text-gray-100 mb-2">
                  {device.title}
                </div>
                <p className="text-gray-400 text-sm flex-grow line-clamp-2">
                  {device.description}
                </p>

                <Link href={`/devices/${device.slug}`}>
                  <div className=" mt-4 inline-flex items-center gap-2 py-2 px-3   border-2 border-[#B1946A] rounded-full font-medium cursor-pointer  text-[#B1946A] hover:bg-[#B1946A] hover:text-white transition-colors duration-300">
                    <FaArrowAltCircleRight className="text-lg" />
                    {t("ReadMore")}
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Device;
