import React, { useRef, useState } from "react";
import { Link } from "react-router";

const tasks = ["Friends", "Sport", "Family", "Nature", "Arts & Craft", "Meditation"];
const colors = [
  "#60e5ae", // mint
  "#84d4ff", // light blue
  "#a0c4ff", // very light blue
  "#ffb703", // mustard
  "#ffad60", // peach
  "#8ecae6", // sky
];

export default function SpinWheel() {
  const wheel = useRef(null);
  const [selected, setSelected] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);

    const segmentDeg = 360 / tasks.length;
    const randIndex = Math.floor(Math.random() * tasks.length);
    const extra = 360 * 5; // 5 full spins
    const final = extra + randIndex * segmentDeg + segmentDeg / 2;

    wheel.current.style.transition = "transform 4s ease-out";
    wheel.current.style.transform = `rotate(${final}deg)`;

    setTimeout(() => {
      setSelected(tasks[randIndex]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* 1) Wheel */}
      <div
        ref={wheel}
        className="relative w-72 h-72 rounded-full border-8 border-red-500 shadow-lg overflow-hidden"
        style={{
          background: `conic-gradient(${colors
            .map((c,i) => `${c} 0 ${(360/tasks.length)*(i+1)}deg`)
            .join(",")})`,
        }}
      >
        {/* 2) Labels */}
        {tasks.map((task, i) => {
          const segmentDeg = 360 / tasks.length;
          const midAngle = segmentDeg * i + segmentDeg / 2;
          return (
            <span
              key={i}
              className="absolute top-1/2 left-1/2 w-24 text-center text-xs font-semibold text-white"
              style={{
                transform: `
                  rotate(${midAngle}deg)
                  translateY(-50%)
                  translateX(-50%)
                  translateY(-6rem)
                  rotate(-${midAngle}deg)
                `,
              }}
            >
              {task}
            </span>
          );
        })}

        {/* 3) Pointer */}
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-[-8px] w-0 h-0
                        border-l-[16px] border-r-[16px] border-t-[24px]
                        border-l-transparent border-r-transparent border-t-green-600 drop-shadow-md" />
      </div>

      {/* 4) Subtitle */}
      <p className="mt-8 text-gray-600 font-medium">Spin Wheel to pick your task</p>

      {/* 5) Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onMouseEnter={spin}
          className={`px-6 py-2 rounded shadow-md font-semibold transition ${
            spinning ? "bg-green-300 cursor-wait" : "bg-green-500 hover:bg-green-600"
          } text-white`}
        >
          Spin 🌀
        </button>
        <Link to="/dashboard"
          onClick={() => {
            if (!selected) return alert("Please spin first!");
            alert(`Go to task: ${selected}`);
          }}
          className="px-6 py-2 rounded bg-green-200 hover:bg-green-300 text-gray-800 font-semibold transition"
        >
          Go To Task
        </Link>
      </div>

      {/* 6) Result */}
      {selected && (
        <p className="mt-6 text-purple-600 font-bold">Selected: {selected}</p>
      )}
    </div>
  );
}
