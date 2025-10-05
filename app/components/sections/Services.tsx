"use client";

import React from "react";
import ServiceItem from "./ServiceItem";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");

  const servicesData = [
    {
      imgSrc: "/images/icon-medical-service-1.svg",
      imgAlt: t("item1.title"),
      title: t("item1.title"),
      description: t("item1.description"),
      aosDelay: 0,
      link: "#",
    },
    {
      imgSrc: "/images/icon-medical-service-2.svg",
      imgAlt: t("item2.title"),
      title: t("item2.title"),
      description: t("item2.description"),
      aosDelay: 250,
      link: "#",
    },
    {
      imgSrc: "/images/icon-medical-service-3.svg",
      imgAlt: t("item3.title"),
      title: t("item3.title"),
      description: t("item3.description"),
      aosDelay: 500,
      link: "#",
    },
    {
      imgSrc: "/images/icon-medical-service-4.svg",
      imgAlt: t("item4.title"),
      title: t("item4.title"),
      description: t("item4.description"),
      aosDelay: 750,
      link: "#",
    },
    {
      imgSrc: "/images/icon-medical-service-5.svg",
      imgAlt: t("item5.title"),
      title: t("item5.title"),
      description: t("item5.description"),
      aosDelay: 1000,
      link: "#",
    },
  ];

  return (
    <div className="medical-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="medical-service-heading">
              <div className="section-title">
                <h3 data-aos="fade-up">{t("heading")}</h3>
                <h2 className="text-anime-style-3">{t("subHeading")}</h2>
              </div>
            </div>
          </div>

          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              imgSrc={service.imgSrc}
              imgAlt={service.imgAlt}
              title={service.title}
              description={service.description}
              link={service.link}
              aosDelay={service.aosDelay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
