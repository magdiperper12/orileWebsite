import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  link?: string;
  aosDelay?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  link,
  aosDelay,
}) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className="medical-service-item"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <div className="medical-service-content">
          <div className="icon-box">
            <Image width={160} height={100} src={imgSrc} alt={imgAlt} />
          </div>
          <div className="medical-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="medical-service-btn">
          <Link href={link || "devices"} className="btn-services">
            read more <i className="far fa-arrow-alt-circle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
