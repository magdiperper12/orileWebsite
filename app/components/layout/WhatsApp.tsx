import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-12 start-12 z-50 w-[60px] h-[60px]">
      <a
        href="https://wa.me/01021589478"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full rounded-full hover:shadow-lg hover:bg-green-500 transition-colors duration-300"
      >
        <BsWhatsapp className="hover:text-white text-green-500 text-6xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
