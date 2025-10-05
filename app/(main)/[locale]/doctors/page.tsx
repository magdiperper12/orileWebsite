"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Pagination from "@/components/ui/pagination";
import Image from "next/image";

// 👇 استيراد الأيقونات من react-icons
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

interface Doctor {
  id: number;
  name: string;
  specialtyKey: string;
  image: string;
  slug: string;
  social: {
    instagram: string;
    twitter: string;
    facebook: string;
  };
}

const Doctors = () => {
  const t = useTranslations("Doctors");

  const doctorsList: Doctor[] = [
    {
      id: 1,
      name: "دكتورة سلمى عزت",
      specialtyKey: "Specialties.Dermatology",
      image: "/images/blog.webp",
      slug: "Dr.-Salma-Ezzat",
      social: {
        instagram: "https://www.instagram.com/dr.salma_ezzat/",
        twitter: "https://www.instagram.com/orielclinics/",
        facebook: "https://web.facebook.com/profile.php?id=61566210767764",
      },
    },
    {
      id: 2,
      name: "دكتورة ميادة البراشي",
      specialtyKey: "Specialties.Cosmetic",
      image: "/images/blog.webp",
      slug: "Dr-Mayada-AlBarashi",
      social: {
        instagram: "https://www.instagram.com/dr.mayadaelbrashy/",
        twitter: "https://www.instagram.com/orielclinics/",
        facebook: "https://web.facebook.com/profile.php?id=61566210767764",
      },
    },
  ];

  return (
    <>
      <BreadCrumb title={t("Doctors")} breadcrumbs={[{ name: t("Doctors") }]} />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2
              className="text-[#B1946A] text-3xl font-semibold"
              data-aos="fade-up"
            >
              {t("OurDoctors")}
            </h2>
          </div>

          {/* Doctors grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctorsList.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-md  overflow-hidden  transition hover:shadow-lg"
                data-aos="fade-up"
              >
                {/* Image + Social */}
                <div className="relative">
                  <Image
                    width={400}
                    height={300}
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-72 object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0  bg-black/40  transition flex items-end pb-2 justify-center">
                    <ul className="flex space-x-6">
                      <li>
                        <a
                          href={doctor.social.instagram}
                          target="_blank"
                          rel="nofollow"
                          className="text-white text-2xl hover:text-[#B1946A] transition"
                        >
                          <FaInstagram className="text-3xl text-pink-600" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={doctor.social.twitter}
                          target="_blank"
                          rel="nofollow"
                          className="text-white text-2xl hover:text-[#B1946A] transition"
                        >
                          <FaTwitter className="text-3xl text-blue-500" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={doctor.social.facebook}
                          target="_blank"
                          rel="nofollow"
                          className="text-white text-2xl hover:text-[#B1946A] transition"
                        >
                          <FaFacebookF className="text-3xl text-blue-600" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="hover:text-[#B1946A] transition"
                    >
                      <span className="text-[#B1946A] text-2xl">
                        {doctor.name}
                      </span>
                    </Link>
                  </h3>
                  <p className="text-gray-500">{t(doctor.specialtyKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
