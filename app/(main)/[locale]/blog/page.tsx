import BlogItemsSection from "@/components/Blogs/BlogSection";
import BreadCrumb from "@/components/ui/BreadCrumb";
import Pagination from "@/components/ui/pagination";
import { useTranslations } from "next-intl";
import React from "react";

const Blog = () => {
  const t = useTranslations("Blog");

  // Mock data - replace with API call

  return (
    <>
      <BreadCrumb title={t("Blog")} breadcrumbs={[{ name: t("Blog") }]} />

      <section className="meet-our-team our-team margin-bottom-10">
        <div className="container">
          <div className="row section-row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 data-aos="fade-up">{t("Blog")}</h3>
              </div>
            </div>
          </div>

          <BlogItemsSection />
          {/* Pagination  */}
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default Blog;
