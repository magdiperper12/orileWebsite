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
  ];

  return (
    <div className=" flex justify-center items-start">
      <div>
        <div className="wow fadeInUp   bg-[#24403f]">
          {/* Header */}
          <div className="mb-6 text-center">
            <div
              className="text-2xl font-bold pt-3"
              style={{ color: "var(--secondry-color)" }}
            >
              {t("OtherBlogs")}
            </div>
          </div>

          {/* List */}
          <div>
            <ul className="space-y-5 px-4">
              {SimilarBlogs.map((offer) => (
                <li key={offer.id}>
                  <Link href={`/blog/${offer.slug}`}>
                    <div className="w-full flex justify-center items-center">
                      <div className="flex items-center  px-3 py-2 rounded-lg  justify-center cursor-pointer bg-[#B1946A] transition-all text-white hover:opacity-90 ">
                        <div className="service-title">
                          <div className="text-xl font-normal capitalize text-white">
                            {offer.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="mt-10">
            <Link
              href="/offers"
              className="block px-6 py-3 text-center font-medium transition-all hover:opacity-90"
              style={{
                background: "var(--accent-color)",
                color: "var(--secondry-color)",
              }}
            >
              {t("AllBlogs")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarBlogs;
