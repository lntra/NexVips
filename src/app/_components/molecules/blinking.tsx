"use client";

export default function BlinkingArrowSection() {
  return (
    <div className="col-start-2 col-end-12 w-full h-full row-start-2 row-end-4 grid grid-cols-6 grid-rows-3 z-10">
      <div className="col-start-1 col-end-7 row-start-1 row-end-4 grid grid-cols-3 grid-rows-1 content-center justify-center items-center">
        {/* User Icon */}
        <div className="w-full flex justify-center">
          <img src="/assets/usr.svg" alt="User Icon" className="w-[65px]" />
        </div>

        {/* Blinking Custom Arrows */}
        <div className="w-full flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 rotate-315 animate-blinkArrow"
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="w-full h-full border-r-4 border-b-4 border-pink-500"></div>
            </div>
          ))}
        </div>

        {/* Carteira Icon */}
        <img src="/assets/carteira.svg" alt="Carteira Icon" className="w-full" />
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes blinkArrow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-blinkArrow {
          animation: blinkArrow 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
