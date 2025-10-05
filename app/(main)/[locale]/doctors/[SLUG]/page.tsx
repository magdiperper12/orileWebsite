"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

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
    specialty: "جلدية-تجميل-ليزر",
    image:
      "https://www.orielclinics.com/thumbnail/600/600/75/storage/team/KDVTzRWdvRgQ8bz1VSAmCa6DzdXYpOiU7eAHMt54.jpg",
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

      <div className="member-details">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="team-member-img">
                <figure className="image-anime">
                  <Image
                    width={160}
                    height={100}
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>

            <div className="col-md-8">
              <div className="member-info">
                <div className="section-title">
                  <h3 data-aos="fade-up">{doctor.specialty}</h3>
                  <h2>{doctor.name}</h2>
                </div>

                <div className="member-social-icon">
                  <ul data-aos="fade-up" data-aos-delay="250">
                    <li>
                      <a
                        rel="nofollow"
                        href={doctor.social.twitter}
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href={doctor.social.instagram}
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href={doctor.social.facebook}
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="member-about-data">
            <p dir="rtl" data-aos="fade-up">
              {doctor.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorPage;
