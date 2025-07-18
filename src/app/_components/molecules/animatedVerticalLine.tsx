"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedVerticalLineProps = {
  onFinish: () => void; 
  finishAll: boolean;
};

export default function AnimatedVerticalLine({ onFinish , finishAll }: AnimatedVerticalLineProps) {
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    if (window.matchMedia("(min-width: 1024px)").matches) {
      const length = line.getTotalLength();

      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
        visibility: "hidden",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          start: "top 5%",
          toggleActions: "play none none none",
          once: true,
        },
        onComplete: () => {
          onFinish(); 
        },
      });

      tl.set(line, { visibility: "visible" }).to(line, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.out",
      })
    }
  }, []);

    useEffect(() => {
    if (!finishAll) return;
        const line = lineRef.current;
        if (!line) return;

        gsap.to(line, {
        strokeDasharray: "6 8",
        duration: 0.5,
        ease: "none",
    });
    }, [finishAll]);

    return (
        <svg
            className="absolute hidden lg:block pointer-events-none z-10 [filter:drop-shadow(0_0_4px_#0ff6)_drop-shadow(0_0_8px_#0ff6)]"
            style={{
            top: "calc(50% + 8.01vw)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            height: "62.1vw",
            }}
        >
            <line
            ref={lineRef}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#53eafd"
            strokeWidth="3"
            />
        </svg>
    );
    }
