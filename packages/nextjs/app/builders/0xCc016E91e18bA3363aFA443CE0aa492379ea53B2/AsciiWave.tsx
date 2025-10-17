"use client";

import { useEffect, useRef, useState } from "react";

const waveChars = "~*-^•";
const numLines = 20;
const speed = 100; // animation interval in ms
const amplitude = 17;

export function AsciiWave() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);
  const [waveLength, setWaveLength] = useState(35); // will be updated based on container width

  // Animation tick
  useEffect(() => {
    const interval = setInterval(() => setTick(prev => prev + 1), speed);
    return () => clearInterval(interval);
  }, []);

  // Update waveLength on resize
  useEffect(() => {
    function updateWidth() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      // approximate number of monospace characters that fit
      const charWidth = 10; // approximate width of monospace char in px
      setWaveLength(Math.max(10, Math.floor(containerWidth / charWidth)));
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const lines = Array.from({ length: numLines }, (_, i) => {
    const xOffset = Math.round((Math.sin((tick + i) * 0.15) + 1) * amplitude);

    const lineContent = Array.from(
      { length: waveLength },
      () => waveChars[Math.floor(Math.random() * waveChars.length)],
    ).join("");

    const padding = " ".repeat(xOffset);
    const truncatedLine = (padding + lineContent).slice(0, waveLength);
    return truncatedLine;
  });

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <pre style={{ fontFamily: "monospace", fontSize: "1rem", lineHeight: "1rem" }}>
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </pre>
    </div>
  );
}
