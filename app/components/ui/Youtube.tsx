"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

interface YouTubeProps {
  videoId: string;
  classes: string;
}

const YouTube = ({ videoId, classes }: YouTubeProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a
        onClick={handleShow}
        className={`${classes} text-lg hover:text-[#B1946A]`}
        //    data-aos="fade-up"
        //             data-aos-delay="250"
      >
        Watch Video <i className="fas fa-play-circle"></i>
      </a>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body style={{ padding: 0 }}>
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 0 }}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default YouTube;
