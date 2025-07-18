"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type AnimatedPointProps = {
  index: number;
  x: number;
  y: number;
  point: {
    img: string;
    size: number;
    title: string;
    description: string;
  };
  showPoints: boolean;
  onFinish?: () => void; 
  finishAll: boolean;
};


export default function AnimatedPoint({ index, x, y, point, showPoints, onFinish, finishAll }: AnimatedPointProps) {
  const lineRef = useRef<SVGLineElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPoints) return;

    const line = lineRef.current;
    if (!line) return;
    const img = imgRef.current;
    const text = textRef.current;

    if (line) {
        const length = line.getBBox().width;

        gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: index === 0 ? -length : -length,
        visibility: "visible",
        });

        gsap.to(line, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
            if (typeof onFinish === "function") onFinish();
        },
        });
    }

    if (img) {
        gsap.set(img, {
        scale: 0,
        opacity: 0,
        visibility: "visible",
        });

        gsap.to(img, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 1,
        });
    }

    if (text) {
        gsap.fromTo(
        text,
        { opacity: 0, y: 10 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 1.6,
            ease: "power2.out",
        }
        );
    }
    }, [showPoints]);

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
    <div
      className="absolute hidden lg:block left-1/2 top-[68.75vw] xl:top-1/2 z-50"
      style={{
        transform: `translate(-50%, -50%) translate(${x}vw, ${y}vw)`,
      }}
    >
      <div className="flex flex-col items-center max-w-[300px]">
        <img
          src={point.img}
          ref={imgRef}
          className="rounded-full z-30 bg-[#020E0F] border-[0.2vw] border-[#86CECB] shadow-md"
          style={{
            width: `${point.size}vw`,
            height: `${point.size}vw`,
            transform: "scale(0)",
            opacity: 0,
            visibility: "hidden",
            transformOrigin: "center",
          }}
        />
        <svg
          className="absolute top-[1.5vw] z-20 [filter:drop-shadow(0_0_2px_#0ff6)_drop-shadow(0_0_4px_#0ff6)]"
          style={{
            left: "50%",  
            width: "29vw",
            height: "2px",
            transform: `translateX(${index === 0 ? "0%" : "-101%"})`,  // push to the left for subsequent points
            visibility: "hidden",
          }}
        >
        <line
          x1={index === 0 ? "0" : "100%"}
          y1="1"
          x2={index === 0 ? "100%" : "0"}
          y2="1"
          stroke="#53eafd"
          strokeWidth="3"
          ref={lineRef}
        />
        </svg>

        <div
          ref={textRef}
          className="max-w-[400px] text-center opacity-0"
        >
          <h2 className="text-[2.2vw] font-semibold text-white whitespace-nowrap">{point.title}</h2>
          <p className="text-[1vw] text-white">{point.description}</p>
        </div>
      </div>
    </div>
  );
}
