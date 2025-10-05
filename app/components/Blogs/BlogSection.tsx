"use client";
import React from "react";
import BlogItem from "../sections/blogItem";
import { useTranslations } from "next-intl";

const BlogItemsSection = () => {
  const t = useTranslations("blog");

  const posts = [
    {
      image: "/images/blog.webp",
      alt: "Post 1",
      title: t("posts.0.title"),
      description: t("posts.0.description"),
      link: `/blog/الفرق-بين-الفيلر-والبوتوكس`,
      slug: "الفرق-بين-الفيلر-والبوتوكس",
      delay: 50,
    },
    {
      image: "/images/blog.webp",
      alt: "Post 2",
      title: t("posts.1.title"),
      description: t("posts.1.description"),
      link: `/blog/الفرق-بين-الفيلر-والبوتوكس`,
      slug: "الفرق-بين-الفيلر-والبوتوكس",
      delay: 200,
    },
    {
      image: "/images/blog.webp",
      alt: "Post 3",
      title: t("posts.2.title"),
      description: t("posts.2.description"),
      link: `/blog/الفرق-بين-الفيلر-والبوتوكس`,
      slug: "الفرق-بين-الفيلر-والبوتوكس",
      delay: 350,
    },
  ];

  return (
    <div className="mt-6">
      <div className="flex flex-wrap -mx-4">
        {posts.map((post, index) => (
          <BlogItem key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogItemsSection;
