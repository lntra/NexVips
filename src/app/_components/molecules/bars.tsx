"use client";

import { useEffect, useState } from "react";

export default function AnimatedBars() {
  const [heights, setHeights] = useState([24, 33, 45, 64, 88, 120]);
  const [displayHeights, setDisplayHeights] = useState([0, 0, 0, 0, 0, 0]);
  const [showLine, setShowLine] = useState(false);
  const [initialLinePath, setInitialLinePath] = useState("");
  const [lineAnimationDone, setLineAnimationDone] = useState(false);

  const maxHeight = 130;

  const months = ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul"];

  useEffect(() => {
    heights.forEach((height, i) => {
      setTimeout(() => {
        setDisplayHeights((prev) => {
          const updated = [...prev];
          updated[i] = height;
          return updated;
        });

        if (i === heights.length - 1) {
          const path = generatePath([...heights]);
          setInitialLinePath(path);

          setTimeout(() => {
            setShowLine(true);

            setTimeout(() => {
              setLineAnimationDone(true);
            }, 1000); // match <animate dur="1s" />
          }, 300);

          setTimeout(() => {
            const interval = setInterval(() => {
              const newHeights = Array.from({ length: 6 }, () =>
                Math.floor(Math.random() * (120 - 24) + 24)
              );
              setHeights(newHeights);
              setTimeout(() => {
                setDisplayHeights(newHeights);
              }, 200);
            }, 3000);

            return () => clearInterval(interval);
          }, 1000);
        }
      }, i * 200);
    });
  }, []);

  const generatePath = (heightsArray: number[]) => {
    const stepX = 100 / (heightsArray.length - 1);
    return heightsArray
      .map((h, i) => {
        const x = i * stepX;
        const y = maxHeight - h;
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ");
  };

  return (
    <div className="content-center flex flex-col items-center relative h-[160px] w-full">
      {/* Bars and months */}
      <div className="flex justify-between items-end w-full h-[130px] relative">
        {displayHeights.map((height, i) => (
          <div key={`bar-${i}`} className="flex flex-col items-center">
            <div
              className="bg-gradient-to-b from-[#86CECB] to-[#137A7F] w-5 transition-all duration-1000 ease-in-out"
              style={{ height: `${height}px` }}
            />
          </div>
        ))}

        {/* Pink SVG Line */}
        {showLine && (
          <svg
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 130"
            preserveAspectRatio="none"
          >
            {!lineAnimationDone && (
              <path
                d={initialLinePath}
                fill="none"
                stroke="#E12885"
                strokeWidth="2"
                strokeDasharray="300"
                strokeDashoffset="300"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="300"
                  to="0"
                  dur="1s"
                  fill="freeze"
                  begin="0s"
                />
              </path>
            )}

            {lineAnimationDone && (
              <path
                d={generatePath(displayHeights)}
                fill="none"
                stroke="#E12885"
                strokeWidth="2"
                style={{
                  transition: "d 1s ease-in-out",
                }}
              />
            )}
          </svg>
        )}
      </div>

      {/* Months below bars */}
      <div className="flex justify-between w-full mt-2 text-sm font-medium">
        {months.map((month, i) => (
          <span key={`month-${i}`} className="text-sm text-center">
            {month}
          </span>
        ))}
      </div>
    </div>
  );
}
