import { useEffect, useState } from "react";

interface Butterfly {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  animationDelay: string;
  animationDuration: string;
}

export const ButterflyBackground = () => {
  const [binaryLines, setBinaryLines] = useState<string[]>([]);
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    const generateBinaryLine = () => {
      return Array.from({ length: 100 }, () => Math.random() > 0.5 ? '1' : '0').join(' ');
    };

    const lines = Array.from({ length: 20 }, () => generateBinaryLine());
    setBinaryLines(lines);

    // Generate butterflies
    const butterfliesArray: Butterfly[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${15 + Math.random() * 10}s`,
    }));
    setButterflies(butterfliesArray);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Pink Binary Code Background */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-30">
        {binaryLines.map((line, i) => (
          <div
            key={i}
            className="text-[10px] font-mono text-primary whitespace-nowrap overflow-hidden animate-binary-scroll"
            style={{ 
              opacity: 0.2 + (i % 5) * 0.1,
              animationDelay: `${i * 0.5}s`,
              transform: `translateX(${i % 2 === 0 ? '-20px' : '20px'})` 
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Animated Butterflies */}
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute animate-butterfly-float"
          style={{
            left: `${butterfly.x}%`,
            top: `${butterfly.y}%`,
            transform: `scale(${butterfly.scale}) rotate(${butterfly.rotation}deg)`,
            animationDelay: butterfly.animationDelay,
            animationDuration: butterfly.animationDuration,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            className="text-primary opacity-60"
          >
            {/* Left wing */}
            <path
              d="M50 50 Q20 20 10 50 Q20 80 50 50"
              fill="currentColor"
              className="animate-wing-left"
            />
            {/* Right wing */}
            <path
              d="M50 50 Q80 20 90 50 Q80 80 50 50"
              fill="currentColor"
              className="animate-wing-right"
            />
            {/* Body */}
            <ellipse cx="50" cy="50" rx="4" ry="20" fill="currentColor" opacity="0.8" />
            {/* Antennae */}
            <path d="M48 32 Q45 25 42 20" stroke="currentColor" fill="none" strokeWidth="2" />
            <path d="M52 32 Q55 25 58 20" stroke="currentColor" fill="none" strokeWidth="2" />
          </svg>
        </div>
      ))}
    </div>
  );
};
