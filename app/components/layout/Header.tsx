"use client";

import "@/globals.css";
import "@/styles/theme.css";

//Hooks
import "../../../Hooks/generalHook";

import { SetStateAction, useEffect, useState } from "react";
//css
import AnimatedCursor from "react-animated-cursor";
import "bootstrap/dist/css/bootstrap.min.css";

// import '@/styles/slicknav.min.css';

import "@/styles/all.css";

import "@/styles/magnific-popup.css";
import "@/styles/swiper-bundle.min.css";
import "@/styles/custom.css";
// import "@/styles/rtl.css";
import useGeneralHook from "../../../Hooks/generalHook";
import "@/styles/general.css";

// import NavBar from "./NavBar";
import Head from "next/head";
import Image from "next/image";

type HeaderProps = {
  locale: string;
};

const Header = ({ locale }: HeaderProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("collapseOne");

  const [isLoading] = useGeneralHook();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleAccordion = (id: SetStateAction<string | null>) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // const { t } = useTranslation('common');
  ///rtl style with adding global.d.ts.  declare module "*.css";
  useEffect(() => {
    if (locale === "ar") {
      import("@/styles/rtl.css");
    }
  }, [locale]);

  return (
    <>
      {/* <CustomCursor /> */}

      <Head>
        <title>MediPro - Hospital HTML Template</title>
        <meta name="description" content="MediPro Hospital Template" />
      </Head>

      {/* Preloader */}
      {isLoading ? (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon">
              <Image
                width={160}
                height={100}
                src="/images/loader.svg"
                alt="Loading"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="177, 148, 106"
        outerAlpha={0.1}
        innerScale={0.5}
        outerScale={0.5}
      />
    </>
  );
};

export default Header;
