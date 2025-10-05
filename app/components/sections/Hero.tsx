"use client";

import RevealImage from "@/lib/Reveal";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroData } from "../../../redux/Reducers/Home/HeroSlice";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorDisplay from "../ui/ErrorDisplay";
import type { AppDispatch, RootState } from "../../../redux/store";

interface Slider {
  top_header: string;
  top_sup_header: string;
  top_description: string;
  top_header_slider_bottom_link: string;
  top_header_slider_bottom_text: string;
  top_header_slider_img_1: string;
  top_header_slider_img_2: string;
}

const Hero: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroData());
  }, [dispatch]);

  const { slider, loading, error, count } = useSelector(
    (state: RootState) =>
      state.Hero as {
        slider: Slider[];
        loading: boolean;
        error: unknown;
        count: number;
      }
  );

  console.log("Slider Data final ====== >>", {
    slider,
    loading,
    error,
    count,
  });

  // حالة التحميل
  if (loading) {
    return (
      <div
        className="hero"
        style={{
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingSpinner message="جاري تحميل بيانات الصفحة الرئيسية..." />
      </div>
    );
  }

  // حالة الخطأ
  if (error) {
    return (
      <ErrorDisplay
        title="خطأ في التحميل"
        message="عذراً، حدث خطأ أثناء تحميل البيانات من الخادم"
        error={String(error)}
        onRetry={() => dispatch(fetchHeroData())}
      />
    );
  }

  // لو الـ slider فاضي
  if (!slider || slider.length === 0) {
    return null;
  }

  // أول عنصر
  const firstSlide = Array.isArray(slider)
    ? slider[0]
    : (slider as unknown as Slider);
  if (!firstSlide) return null;

  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* النصوص */}
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="section-title">
                <h3 className="aos-init" data-aos="fade-up">
                  {firstSlide.top_header}
                </h3>
                <h1 className="text-anime-style-3">
                  {firstSlide.top_sup_header}
                </h1>
              </div>

              <div className="hero-body">
                <p className="aos-init" data-aos="fade-up">
                  {firstSlide.top_description}
                </p>
              </div>

              <div className="hero-footer">
                <a
                  href={firstSlide.top_header_slider_bottom_link}
                  className="btn-default aos-init"
                  data-aos="fade-up"
                  data-aos-delay="30"
                >
                  {firstSlide.top_header_slider_bottom_text}
                </a>
              </div>
            </div>
          </div>

          {/* الصور */}
          <div className="col-lg-6">
            <div className="hero-images">
              <div className="hero-image-1">
                <RevealImage
                  src={
                    firstSlide.top_header_slider_img_1 || "/images/blog.webp"
                  }
                  alt="Hero Image 1"
                />
              </div>
              <div className="hero-image-2">
                <RevealImage
                  src={
                    firstSlide.top_header_slider_img_2 || "/images/blog.webp"
                  }
                  alt="Hero Image 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
