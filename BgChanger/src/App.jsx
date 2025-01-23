import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State to store the selected color
  const [color, setColor] = useState("olive");

  // Function to handle color change
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      {/* Fixed buttons at the bottom */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-xl gap-3">
          {/* Red Button */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => changeColor("red")}
          >
            Red
          </button>

          {/* Green Button */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => changeColor("green")}
          >
            Green
          </button>

          {/* Pink Button */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => changeColor("pink")}
          >
            Pink
          </button>

          {/* Lavender Button */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lavender" }}
            onClick={() => changeColor("lavender")}
          >
            Lavender
          </button>

          {/* Have Button */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#B5651D" }}
            onClick={() => changeColor("#B5651D")}
          >
            Have
          </button>

          {/* Beige Button */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "beige" }}
            onClick={() => changeColor("beige")}
          >
            Beige
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
