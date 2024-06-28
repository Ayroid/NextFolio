"use client";

import { useEffect, useState } from "react";
import { TbSquareRoundedArrowUp } from "react-icons/tb";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <TbSquareRoundedArrowUp
      onClick={scrollToTop}
      color="var(--accent-9)"
      className={`hidden size-7 cursor-pointer transition-opacity duration-300 md:block md:size-8 ${isVisible ? "opacity-100" : "opacity-0"}`}
    />
  );
};

export default BackToTop;
