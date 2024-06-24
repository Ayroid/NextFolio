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
          y: 50,
          opacity: 0,
          duration: 0.5,
          delay: delay,
          scrollTrigger: {
            trigger: element,
          },
          ease: "power1.in",
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
