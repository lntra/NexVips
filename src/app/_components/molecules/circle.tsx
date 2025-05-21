"use client";

import { useEffect, useState } from "react";

type CircleProgressProps = {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
};

function CircleProgress({
  value,
  size = 80,
  strokeWidth = 10,
  color = "#373B3E",
}: CircleProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#373B3E"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.1s linear" }}
      />
    </svg>
  );
}

// Fee tiers based on sales
function getFee(sales: number) {
  if (sales <= 20) return { fixed: 1.0, percent: 4.0 };
  if (sales <= 50) return { fixed: 0.9, percent: 3.5 };
  if (sales <= 150) return { fixed: 0.75, percent: 3.0 };
  if (sales <= 300) return { fixed: 0.6, percent: 2.5 };
  return { fixed: 0.5, percent: 2.0 };
}

export default function StatsGrid() {
  const [sales, setSales] = useState(0);

  useEffect(() => {
    let current = 0;
    let direction = 1;
    let isPaused = false;
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
  
    const startInterval = () => {
      interval = setInterval(() => {
        if (isPaused) return;
  
        current += direction;
  
        if (current >= 500 && direction === 1) {
          isPaused = true;
          setSales(current); // update once at 500
          clearInterval(interval);
  
          timeout = setTimeout(() => {
            direction = -1;
            isPaused = false;
            startInterval();
          }, 2000); // pause for 1 second at 500
        } else if (current <= 0 && direction === -1) {
          direction = 1;
        }
  
        setSales(current);
      }, 20);
    };
  
    startInterval();
  
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  
  

  const { fixed, percent } = getFee(sales);

  // taxPercent decreases from 4% to 2% as sales go from 0 to 300

  const taxPercent = 4 - (sales / 250) * 2; // from 4% to 2%

  const salesDisplay = sales >= 500 ? "500+" : sales.toString();
  const salesPercent = Math.min((sales / 500) * 100, 100);

  return (
    <div className="gap-3 col-start-2 col-end-12 w-full h-full row-start-2 row-end-4 grid grid-cols-3 grid-rows-2">
      {/* Sales Circle */}
      <div className="col-start-1 col-end-1 min-w-[80px] row-start-1 row-end-1 flex flex-col justify-around">
        <CircleProgress value={salesPercent} color="#86CECB" />
      </div>

      {/* Tax Circle */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-2 flex flex-col justify-around">
        <CircleProgress value={(taxPercent / 4) * 100} color="#EC4899" />
      </div>


    </div>
  );
}
