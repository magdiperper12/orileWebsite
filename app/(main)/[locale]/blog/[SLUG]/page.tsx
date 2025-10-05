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
    content:
      'في عالم التجميل الحديث، أصبحت كلمة "بوتوكس" حاضرة في كل مكان — من أحاديث الصديقات، إلى عيادات أطباء الجلد، وحتى في خطط الوقاية من علامات التقدّم في السن. لكن وسط هذا الانتشار، يظل هناك غموض يحيط بهذه التقنية: ما هو البوتوكس فعلًا؟ كيف يعمل؟ وهل هو الخيار الأمثل لكل من يسعى لبشرة أكثر نعومة وشبابًا؟',
  };

  return (
    <>
      <BreadCrumb
        title={post.title}
        breadcrumbs={[{ name: t("Blog"), href: "/blog" }, { name: post.title }]}
      />

      <section className="blog-detail-content page-post-single">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="detail-content">
                <div className="section-title" data-aos="fade-up">
                  <h2>{post.title}</h2>
                  <div className="post-detail">
                    <p>
                      <i className="fa fa-clock-o"></i>
                      {post.date}
                    </p>
                    <p>
                      <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                      {post.views}
                    </p>
                  </div>
                </div>

                <div className="detail-image mar-bottom-20" data-aos="fade-up">
                  <Image
                    width={700}
                    height={700}
                    loading="lazy"
                    src={post.image}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>

                <div className="blog-content" data-aos="fade-up">
                  {post.content}
                </div>
              </div>
            </div>
            {/* Similar Offers */}
            <SimilarBlogs />
            {/* Similar Offers */}
            <div style={{ marginTop: "120px" }}>
              <ContactUs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
