"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface SimilarOffer {
  id: number;
  title: string;
  price: number;
  category: string;
  slug: string;
}

const SimilarOffers = () => {
  const t = useTranslations("Offers");

  // Mock data - replace with actual API data
  const similarOffers: SimilarOffer[] = [
    {
      id: 1,
      title: "جلسة بيكو للوجه مع برسيبيل",
      price: 1522,
      category: "lyzar",
      slug: "Pico-Facial-Session-with-Persipelle",
    },
    {
      id: 2,
      title: "جلسة بيكو اندرام + ميزوثيرابي",
      price: 850,
      category: "lyzar",
      slug: "Pico-Endrame--Mesotherapy-Session",
    },
    // Add more offers as needed
  ];

  return (
    <div className="col-lg-4 col-md-4">
      <div className="services-sidebar">
        <div className="medical-service wow fadeInUp">
          <div className="subpage-header-box mb-4">
            <h1>{t("OtherOffers")}</h1>
          </div>

          <div className="medical-service-list">
            <ul>
              {similarOffers.map((offer) => (
                <li key={offer.id}>
                  <Link href={`/offers/${offer.category}/${offer.slug}`}>
                    <div className="service-item">
                      <div className="service-title">
                        <h3>
                          {offer.title}
                          <ins>
                            <span>
                              {offer.price}
                              <Image
                                width={20}
                                height={20}
                                src={
                                  offer.slug === "full-body-laser"
                                    ? "/images/sar.png"
                                    : "/images/sar.png"
                                }
                                alt="SAR"
                              />
                            </span>
                          </ins>
                        </h3>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-btn">
            <Link href="/offers" className="btn-default">
              {t("AllOffers")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarOffers;
