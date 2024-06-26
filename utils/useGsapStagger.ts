import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useGsapStagger = (
  className: string,
  delay: number = 0,
  amount: number = 3,
) => {
  useGSAP(() => {
    gsap.from(className, {
      opacity: 0,
      delay: delay,
      scrollTrigger: {
        trigger: className,
      },
      stagger: {
        amount: amount,
        grid: [0, 1],
        from: "start",
      },
      ease: "power1.in",
      filter: "box-shadow(0 0 10px rgba(0, 0, 0, 0.2))",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
};

export default useGsapStagger;
