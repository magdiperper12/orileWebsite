"use client";

import SimilarBlogs from "@/components/Blogs/similarBlogs";
import ContactUs from "@/components/sections/ContactUs";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface BlogPostData {
  title: string;
  date: string;
  views: number;
  image: string;
  content: string;
}

const BlogPost = () => {
  const t = useTranslations("Blog");

  // Mock data - replace with API call
  const post: BlogPostData = {
    title: "متى تظهر نتائج البوتوكس؟",
    date: "15-04-2025",
    views: 15,
    image:
      "https://www.orielclinics.com/thumbnail/0/768/85/storage/blog/KRsODar2XutH9K5jRfdagGzH6wKo2pohBMW0Qic7.jpg",
    content: `في عالم التجميل الحديث، أصبحت كلمة "بوتوكس" حاضرة في كل مكان — من أحاديث الصديقات، إلى عيادات أطباء الجلد، وحتى في خطط الوقاية من علامات التقدّم في السن. لكن وسط هذا الانتشار، يظل هناك غموض يحيط بهذه التقنية: ما هو البوتوكس فعلًا؟ كيف يعمل؟ وهل هو الخيار الأمثل لكل من يسعى لبشرة أكثر نعومة وشبابًا؟`,
  };

  return (
    <>
      {/* Breadcrumb */}
      <BreadCrumb
        title={post.title}
        breadcrumbs={[{ name: t("Blog"), href: "/blog" }, { name: post.title }]}
      />

      {/* Blog Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-start ">
            {/* Main Content */}
            <div className=" lg:w-1/2 w-full">
              {/* Title */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center gap-6 text-gray-500 text-sm">
                  <p className="flex items-center gap-2">
                    <i className="fa fa-clock-o text-green-600" />
                    {post.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa fa-eye text-green-600" />
                    {post.views}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="mb-8">
                <Image
                  width={700}
                  height={500}
                  loading="lazy"
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-xl object-cover aspect-[16/9]"
                />
              </div>

              {/* Content */}
              <div
                dir="rtl"
                className="prose prose-lg max-w-none leading-relaxed text-gray-700"
              >
                <div>{post.content}</div>
              </div>
            </div>

            {/* Sidebar - Similar Blogs */}
            <div className="  lg:w-1/2 w-full flex justify-center items-start sticky top-24 p-4">
              <SimilarBlogs />
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mt-20">
            <ContactUs />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
