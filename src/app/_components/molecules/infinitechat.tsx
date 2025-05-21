"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const messages = ["/assets/msg1.svg", "/assets/msg2.svg", "/assets/msg3.svg"];

type ChatMessage = {
  id: number;
  src: string;
  visible: boolean;
  removing: boolean;
};

export default function InfiniteChat() {
  const [chatQueue, setChatQueue] = useState<ChatMessage[]>([]);
  const [msgIndex, setMsgIndex] = useState(0);
  const delay = 1500; // Total time between each message cycle
  const animationDuration = 700;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const showNextMessage = () => {
      const nextMsg = messages[msgIndex % messages.length] || "/assets/default.svg";
      const id = Date.now();

      // Step 1: Mark old message for removal
      setChatQueue((prev) => {
        const updated = prev.map((msg, i) =>
          i === 0 && prev.length >= 3 ? { ...msg, removing: true } : msg
        );
        return updated;
      });

      // Step 2: Remove it after animation duration
      setTimeout(() => {
        setChatQueue((prev) => {
          const trimmed = prev.filter((msg) => !msg.removing);
          return [
            ...trimmed,
            { id, src: nextMsg, visible: false, removing: false },
          ];
        });

        // Step 3: Trigger entry animation
        setTimeout(() => {
          setChatQueue((prev) =>
            prev.map((msg) =>
              msg.id === id ? { ...msg, visible: true } : msg
            )
          );

          // Step 4: Schedule next message after full delay
          setMsgIndex((prev) => prev + 1);
        }, 50);
      }, animationDuration);

      // Schedule next full cycle
      timeout = setTimeout(showNextMessage, delay);
    };

    timeout = setTimeout(showNextMessage, 1000); // Initial trigger

    return () => clearTimeout(timeout);
  }, [msgIndex]);

  return (
    <div className="w-full h-full flex items-end justify-center">
      <div className="w-full max-w-md h-full grid grid-cols-1 grid-rows-3 gap-3 py-3 justify-end overflow-hidden">
        {chatQueue.map((msg) => (
          <div
            key={msg.id}
            className={clsx(
              "transform transition-all duration-700 ease-in-out flex flex-col items-center",
              msg.removing
                ? "-translate-y-10 opacity-0"
                : msg.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <img src={msg.src} alt="Message" className="w-[65%]" />
          </div>
        ))}
      </div>
    </div>
  );
}
