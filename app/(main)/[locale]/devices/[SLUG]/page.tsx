"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import SimilarDevices from "@/components/Devices/similarDevices";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Device {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
}

const DevicePage = () => {
  const t = useTranslations("devices");

  // Mock data - replace with API call
  const device: Device = {
    id: 1,
    name: "هيدرافشيل",
    date: "02-12-2024",
    image:
      "https://www.orielclinics.com/thumbnail/0/750/75/storage/devices/rGK6QbDqb9Mrnbx0RRQkZptH1wXelAHmqLOXh0oa.jpg",
    description:
      "تقنية مبتكرة لتنظيف البشرة بعمق وترطيبها، إذ تعمل على إزالة الشوائب والزيوت الزائدة وتجديد الخلايا...",
  };

  return (
    <>
      <BreadCrumb
        title={t("Devices")}
        breadcrumbs={[
          { name: t("Devices"), href: "/devices" },
          { name: device.name },
        ]}
      />
      <div className="services-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="device-details">
                <div className="subpage-header-box">
                  <h1>{device.name}</h1>
                  <p className="margin-bottom-10">
                    <i className="fa fa-clock-o"></i>
                    {device.date}
                  </p>

                  <div className="service-featured-image">
                    <Image
                      width={550}
                      height={500}
                      src={device.image}
                      alt={device.name}
                      loading="lazy"
                    />
                    <div
                      className="services-video-content margin-top-10"
                      data-aos="fade-up"
                    >
                      <ul>
                        <li dir="rtl">{device.description}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SimilarDevices />
          </div>
        </div>
      </div>
    </>
  );
};

export default DevicePage;
