import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = (ref: RefObject<HTMLElement>, delay: number = 0) => {
  useGSAP(
    () => {
      const element = ref.current;

      if (element) {
        gsap.from(element, {
          opacity: 0,
          duration: 0.7,
          delay: delay,
          scrollTrigger: {
            trigger: element,
          },
          ease: "power1.in",
          filter: "box-shadow(0 0 10px rgba(0, 0, 0, 0.2))",
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: ref },
  );
};

export default useGsapAnimation;
