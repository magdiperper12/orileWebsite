"use client";

import Image from "next/image";
import YouTube from "../ui/Youtube";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const About: React.FC = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6 },
    }),
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const t = useTranslations("About");

  return (
    <div className="about-us py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Images & Video */}
          <div className="col-lg-6">
            <div className="about-img flex flex-col gap-6">
              <div className="about-us-image w-full  relative flex gap-4">
                <motion.div
                  className="about-us-image-1"
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={imageVariants}
                >
                  <figure className="image-anime w-[220px] h-[400px] overflow-hidden rounded-lg">
                    <Image
                      width={220}
                      height={400}
                      src="/images/blog.webp"
                      alt="About Image 1"
                      className="object-cover w-full h-full"
                    />
                  </figure>
                </motion.div>

                <motion.div
                  className="about-us-image-2"
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={imageVariants}
                >
                  <figure className="image-anime w-[220px] h-[400px] overflow-hidden rounded-lg">
                    <Image
                      width={220}
                      height={400}
                      src="/images/blog.webp"
                      alt="About Image 2"
                      className="object-cover w-full h-full"
                    />
                  </figure>
                </motion.div>
              </div>
              <div className="bg-transparent w-full flex justify-between items-center gap-2  absolute bottom-0 h-[140px]">
                {" "}
                <div className="w-1/3 bg-transparent h-full"></div>
                <div className="w-1/3 bg-transparent  h-full"></div>
                <motion.div
                  className={` w-[250px] h-[140px] hover:text-[#B1946A]`}
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={imageVariants}
                >
                  <figure className="relative w-full h-full overflow-hidden  rounded-full">
                    <Image
                      src="/images/about-video-img.jpg"
                      alt="About Video"
                      width={250}
                      height={140}
                      className="object-cover w-full h-full"
                    />
                    <YouTube
                      videoId="Y-x0efG1seA"
                      classes="absolute inset-0 flex items-center justify-center text-white text-4xl cursor-pointer"
                    />
                  </figure>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 w-full">
            <div className="about-content">
              <motion.div
                className="section-title mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
                variants={fadeUp}
              >
                <h3 className="text-lg font-semibold text-blue-600">
                  {t("AboutUs")}
                </h3>
                <h2 className="text-3xl font-bold mt-2 text-gray-800">
                  {t("AboutTitle")}{" "}
                </h2>
              </motion.div>

              <motion.div
                className="about-content-body mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
                variants={fadeUp}
              >
                <p className="text-gray-600">{t("AboutSubtitle")}</p>
              </motion.div>

              <div className="about-content-footer">
                <motion.ul
                  className="list-disc list-inside text-gray-700 mb-4 space-y-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2, // delay 0.2s بين كل عنصر
                      },
                    },
                  }}
                >
                  {[t("list.l1"), t("list.l2"), t("list.l3")].map(
                    (item, index) => (
                      <motion.li
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 },
                          },
                        }}
                      >
                        {item}
                      </motion.li>
                    )
                  )}
                </motion.ul>

                <a
                  href="#"
                  className="inline-block bg-[#B1946A] text-white px-6 py-2 rounded-lg shadow hover:bg-[#917856] transition"
                >
                  {t("LearnMore")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
