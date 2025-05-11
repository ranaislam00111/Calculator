import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "←", "+"
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md">

        {/* ✅ Auto-shrinking display */}
        <div className="text-white mb-4 bg-gray-700 p-4 rounded-md text-right min-h-[3rem]">
          <div
            className="inline-block w-full"
            style={{
              fontSize:
                input.length <= 10
                  ? "1.875rem" // text-3xl
                  : input.length <= 15
                    ? "1.5rem" // text-2xl
                    : input.length <= 20
                      ? "1.25rem" // text-xl
                      : "1rem", // text-lg
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {input || "0"}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className="bg-gray-600 hover:bg-gray-500 text-white py-4 rounded-xl text-xl font-semibold sm:py-5 sm:text-2xl"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Bottom Buttons: Equal & Clear (Swapped) */}
        <div className="grid grid-cols-2 gap-3">

          <button
            className="bg-red-600 hover:bg-red-500 text-white py-4 rounded-xl text-xl font-semibold sm:py-5 sm:text-2xl"
            onClick={() => handleClick("C")}
          >
            Clear
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-400 text-white py-4 rounded-xl text-xl font-semibold sm:py-5 sm:text-2xl"
            onClick={() => handleClick("=")}
          >
            =
          </button>

        </div>
      </div>
    </div>
  );
}
