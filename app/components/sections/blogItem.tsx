import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";

type BlogItemProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
};
import { useLocale } from "next-intl";

const BlogItem: React.FC<BlogItemProps> = ({
  image,
  alt,
  title,
  description,
  link,
  delay,
}) => {
  const t = useTranslations("blog");
  const locale = useLocale();
  const rtl = locale === "ar"; // هنا نحدد لو اللغة عربية يبقى RTL

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div
        className="h-full mb-6 group"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden mb-5">
          <figure className="block overflow-hidden">
            <Link href={link}>
              <Image
                width={400}
                height={250}
                src={image}
                alt={alt}
                className="rounded-lg aspect-[1/0.7] object-cover transform transition duration-500 group-hover:scale-110"
              />
            </Link>
          </figure>
        </div>

        {/* Post Content */}
        <div className="mb-3">
          <div className="text-3xl font-semibold mb-3 line-clamp-2">
            {title}
          </div>
          <p className="text-base text-gray-500 line-clamp-2">{description}</p>
        </div>

        {/* Read More Button */}
        <div>
          <Link href={link}>
            <div className="text-lg font-medium capitalize text-[#B1946A] hover:text-primary transition-colors inline-flex items-center">
              {t("ReadMore")}
              <FaArrowRightLong
                className={`text-sm m-2 transition-transform duration-300 ${
                  rtl ? "rotate-180" : ""
                }`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogItem;
