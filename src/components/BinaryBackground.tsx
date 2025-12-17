import { useEffect, useState } from "react";

export const BinaryBackground = () => {
  const [binaryLines, setBinaryLines] = useState<string[]>([]);

  useEffect(() => {
    const generateBinaryLine = () => {
      return Array.from({ length: 80 }, () => Math.random() > 0.5 ? '1' : '0').join(' ');
    };

    const lines = Array.from({ length: 8 }, () => generateBinaryLine());
    setBinaryLines(lines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 left-0 right-0 h-48 flex flex-col justify-end opacity-20">
        {binaryLines.map((line, i) => (
          <div
            key={i}
            className="text-[10px] font-mono text-primary/40 whitespace-nowrap overflow-hidden"
            style={{ 
              opacity: 0.1 + (i * 0.1),
              transform: `translateX(${i % 2 === 0 ? '-10px' : '10px'})` 
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};
