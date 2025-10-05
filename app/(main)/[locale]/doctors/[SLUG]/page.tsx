"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

interface DoctorData {
  name: string;
  specialty: string;
  image: string;
  description: string;
  social: {
    twitter: string;
    instagram: string;
    facebook: string;
  };
}

const DoctorPage = () => {
  const t = useTranslations("Doctors");

  // Mock data - replace with API call
  const doctor: DoctorData = {
    name: "دكتورة ميادة البراشي",
    specialty: "جلدية - تجميل - ليزر",
    image: "/images/blog.webp",
    description: `تتميز الدكتورة ميادة البراشي، المصرية الأصل والحاصلة على البورد الأمريكي في التجميل والجلدية والليزر...`,
    social: {
      twitter: "https://www.instagram.com/orielclinics/",
      instagram: "https://www.instagram.com/dr.mayadaelbrashy/",
      facebook: "https://web.facebook.com/profile.php?id=61566210767764",
    },
  };

  return (
    <>
      <BreadCrumb
        title={doctor.name}
        breadcrumbs={[
          { name: t("Doctors"), href: "/doctors" },
          { name: doctor.name },
        ]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 items-stretch">
            {/* Doctor Image */}
            <div className="md:col-span-4">
              <Image
                width={500}
                height={500}
                src={doctor.image}
                alt={doctor.name}
                className="w-full aspect-square object-cover rounded-s-2xl"
              />
            </div>

            {/* Doctor Info */}
            <div className="md:col-span-8 bg-[#B1946A] text-white rounded-e-2xl p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-xl text-gray-200">{doctor.specialty}</h3>
                <h2 className="text-3xl font-bold text-green-200">
                  {doctor.name}
                </h2>
              </div>

              {/* Social Icons */}

              <ul className="flex space-x-6">
                <li>
                  <a
                    href={doctor.social.instagram}
                    target="_blank"
                    rel="nofollow"
                    className="text-white text-2xl hover:text-[#B1946A] transition"
                  >
                    <FaInstagram className="text-3xl text-blue-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={doctor.social.twitter}
                    target="_blank"
                    rel="nofollow"
                    className="text-white text-2xl hover:text-[#B1946A] transition"
                  >
                    <FaTwitter className="text-3xl text-blue-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={doctor.social.facebook}
                    target="_blank"
                    rel="nofollow"
                    className="text-white text-2xl hover:text-[#B1946A] transition"
                  >
                    <FaFacebookF className="text-3xl text-blue-50" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Doctor Description */}
          <div className="mt-10 border-t border-gray-200 pt-6">
            <p dir="rtl" className="text-gray-700 leading-relaxed text-lg">
              {doctor.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorPage;
