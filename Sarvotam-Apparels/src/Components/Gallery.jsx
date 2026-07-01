import { useRef, useState, useEffect, useCallback } from "react";
import { motion, scale } from "framer-motion";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex + 1) % arrImage.length);
  }, []);

  // Navigate backward with array wrapping logic
  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + arrImage.length) % arrImage.length,
    );
  }, []);

  const arrImage = [
    { id: 2, url: "/2.jpg" },
    { id: 3, url: "/3.jpg" },
    { id: 4, url: "/4.jpg" },
    { id: 5, url: "/5.jpg" },
    { id: 6, url: "/6.jpg" },
    { id: 6, url: "/7.jpg" },
    { id: 6, url: "/8.jpg" },
    { id: 6, url: "/9.jpg" },
    { id: 6, url: "/10.jpg" },
  ];

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, showNext, showPrev]);

  // Touch handlers for responsive swipe mechanics
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeTrigger = 50; // Minimum pixel drag length to trigger swipe

    if (swipeDistance > minSwipeTrigger) {
      showNext(); // Swiped left -> show next image
    } else if (swipeDistance < -minSwipeTrigger) {
      showPrev(); // Swiped right -> show previous image
    }
  };

  const activeImage = activeIndex !== null ? arrImage[activeIndex] : null;

  return (
    <>
      <div className="custom-font">
        <div className="flex font-bold justify-center items-center h-25 pt-10 pb-10 text-4xl md:text-7xl">
          Gallery
        </div>
        <div className=" bg-white whitespace-nowrap items-center overflow-scroll flex flex-nowrap gap-10 pt-25 pb-25 px-10">
          {arrImage.map((x, index) => (
            <motion.div
              className="h-100 w-75  shrink-0 z-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(index)}
            >
              <img className="object-cover h-full rounded-3xl" src={x.url} />
            </motion.div>
          ))}{" "}
          {activeImage && (
            <div style={styles.lightbox} onClick={closeLightbox}>
              <button style={styles.closeBtn} onClick={closeLightbox}>
                &times;
              </button>

              <button
                className="nav-btn btn-prev"
                style={styles.prevBtn}
                onClick={showPrev}
              >
                &#10094;
              </button>

              <div
                style={styles.lightboxContent}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeImage.url}
                  alt={activeImage.title}
                  style={styles.lightboxImage}
                />
                <p style={styles.caption}>{activeImage.title}</p>
              </div>

              <button
                className="nav-btn btn-next"
                style={styles.nextBtn}
                onClick={showNext}
              >
                &#10095;
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const mediaStyles = `
  @media (max-width: 768px) {
    .nav-btn {
      display: none !important;
    }
  }
`;

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: { textAlign: "center", color: "#333", marginBottom: "2rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    height: "220px",
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  lightbox: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.95)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    touchAction: "none",
  },
  lightboxContent: { position: "relative", maxWidth: "85%", maxHeight: "80%" },
  lightboxImage: {
    width: "100%",
    maxHeight: "75vh",
    borderRadius: "4px",
    userSelect: "none",
  },
  caption: {
    color: "#fff",
    textAlign: "center",
    marginTop: "10px",
    fontSize: "1.2rem",
  },
  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "30px",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "2.5rem",
    cursor: "pointer",
    zIndex: 1010,
  },

  // Base button configurations
  prevBtn: {
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#fff",
    border: "none",
    fontSize: "2rem",
    padding: "16px 20px",
    cursor: "pointer",
    borderRadius: "50%",
    zIndex: 1010,
  },
  nextBtn: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#fff",
    border: "none",
    fontSize: "2rem",
    padding: "16px 20px",
    cursor: "pointer",
    borderRadius: "50%",
    zIndex: 1010,
  },
};
