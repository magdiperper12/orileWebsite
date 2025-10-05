'use client';

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface RevealImageProps {
  src: string;
  alt: string;
}

const RevealImage = ({ src, alt }: RevealImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
      className="image-anime"
        initial={{ x: "-100%" }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ position: "relative", display: "inline-block", width: "100%" }}
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ width: "100%", display: "block" }}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { x: 0, clipPath: "inset(0 0 0 0)" } : {}}
          //   animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default RevealImage;
