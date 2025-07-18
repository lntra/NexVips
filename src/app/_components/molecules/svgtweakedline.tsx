"use client"

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SvgTree() {
  useEffect(() => {
    const paths = document.querySelectorAll(".tree-line path");

    paths.forEach((path) => {
      const svgPath = path as SVGPathElement;
      const length = svgPath.getTotalLength();

      // Ensure dash pattern is not applied at first
      svgPath.style.strokeDasharray = `${length}`;
      svgPath.style.strokeDashoffset = `${length}`;
      svgPath.style.strokeLinecap = "round";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".tree-line",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(svgPath, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
      }).to(
        svgPath,
        {
          strokeDasharray: "4 6", 
        },
        "-=0.5"
      );
    });
  }, []);

  return (
    <>
    <div className="z-20 pointer-events-none overflow-hidden">
        <svg width="1215" height="2500" className="tree-line w-full h-[350vh]" viewBox="-20 -10 1245 2500" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path className="[filter:drop-shadow(0_0_4px_#0ff6)_drop-shadow(0_0_8px_#0ff6)]" strokeWidth="1"  d="M984.5 23.5 C 821.5 45.5 615 273.5 607.5 594.5" stroke="#53eafd"/>
        <path className="[filter:drop-shadow(0_0_4px_#0ff6)_drop-shadow(0_0_8px_#0ff6)]" strokeWidth="1"  d="M786.501 22.4995 C 639 106 607.501 464.5 607.501 595" stroke="#53eafd"/>
        <path className="[filter:drop-shadow(0_0_4px_#0ff6)_drop-shadow(0_0_8px_#0ff6)]" strokeWidth="1"  d="M1214.5 22 C 934.5 22 607.5 280.5 607.5 594.5" stroke="#53eafd"/>
        <path className="[filter:drop-shadow(0_0_4px_#0ff6)_drop-shadow(0_0_8px_#0ff6)]" strokeWidth="1"  d="M230 23.5 C 393 45.5 599.5 273.5 607 594.5" stroke="#53eafd"/>
        <path className="[filter:drop-shadow(0_0_4px_#0ff6)_drop-shadow(0_0_8px_#0ff6)]" strokeWidth="1"  d="M427.999 22.4995 C 575.5 106 606.999 464.5 606.999 595" stroke="#53eafd"/>
        <path className="[filter:drop-shadow(0_0_4px_#0ff6)_drop-shadow(0_0_8px_#0ff6)]" strokeWidth="1" d="M 0 22 C 280 22 607 280.5 607 594.5" stroke="#53eafd"/>
        
        <path className="[filter:drop-shadow(0_0_4px_#0ff6)_drop-shadow(0_0_8px_#0ff6)]" strokeWidth="1" d="M607 0L608 2490" stroke="#53eafd"/>
        </svg>

    </div>  
    </>
  );
}
