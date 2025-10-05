"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

interface SimilarBlog {
  id: number;
  title: string;
  slug: string;
}

const SimilarBlogs = () => {
  const t = useTranslations("Blog");

  // Mock data - replace with actual API data
  const SimilarBlogs: SimilarBlog[] = [
    {
      id: 1,
      title: "جلسة بيكو للوجه مع برسيبيل",

      slug: "Pico-Facial-Session-with-Persipelle",
    },
    {
      id: 2,
      title: "جلسة بيكو اندرام + ميزوثيرابي",
      slug: "Pico-Endrame--Mesotherapy-Session",
    },
    // Add more offers as needed
  ];

  return (
    <div className="col-lg-4 col-md-4">
      <div className="services-sidebar">
        <div className="medical-service wow fadeInUp">
          <div className="subpage-header-box mb-4">
            <h1>{t("OtherBlogs")}</h1>
          </div>

          <div className="medical-service-list">
            <ul>
              {SimilarBlogs.map((offer) => (
                <li key={offer.id}>
                  <Link href={`/blog/${offer.slug}`}>
                    <div className="service-item">
                      <div className="service-title">
                        <h3>{offer.title}</h3>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-btn">
            <Link href="/offers" className="btn-default">
              {t("AllBlogs")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarBlogs;
