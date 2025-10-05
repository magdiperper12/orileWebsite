"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 50,
      delay: 100,
      mirror: true,
      // anchorPlacement: 'top-bottom',
    });

    // Force AOS refresh after initial render
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);



  return <>{children}</>;
}