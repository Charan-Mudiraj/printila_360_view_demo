import "./App.css";
import v1 from "../views/1.png";
import v2 from "../views/2.png";
import v3 from "../views/3.png";
import v4 from "../views/4.png";
import v5 from "../views/5.png";
import v6 from "../views/6.png";
import rotateImg from "./assets/rotate.png";
import video from "../views/video.mp4";
import { useState } from "react";
function App() {
  const [isClick, setIsClick] = useState(false);
  const [prevX, setPrevX] = useState(null);
  const [count, setCount] = useState(0);
  const views = [v1, v2, v3, v4, v5, v6];
  const [currentView, setCurrentView] = useState(0);
  const moveLeft = () => {
    if (currentView != 5) {
      setCurrentView((cv) => cv + 1);
    } else {
      setCurrentView(0);
    }
  };
  const moveRight = () => {
    if (currentView != 0) {
      setCurrentView((cv) => cv - 1);
    } else {
      setCurrentView(5);
    }
  };
  return (
    <>
      <div
        style={{
          fontFamily: "cursive",
          fontSize: "20px",
          width: "250px",
          position: "absolute",
          right: "20px",
        }}
      >
        <video
          width="250"
          height="150"
          controls
          style={{ border: "2px solid black", borderRadius: "15px" }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <p>
          Hold the left key of mouse and drag left or right to move the object.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          onMouseDown={() => {
            setIsClick(true);
          }}
          onMouseMove={(e) => {
            e.preventDefault();
            if (isClick) {
              setPrevX(e.clientX);
              setCount((c) => c + 1);
              if (prevX != null && count == 10) {
                const distace = e.clientX - prevX;
                if (distace < 0) {
                  moveLeft();
                } else if (distace > 0) {
                  moveRight();
                }
                setCount(0);
              }
            }
          }}
          onMouseUp={() => {
            setIsClick(false);
          }}
          draggable={false}
        >
          <img src={views[currentView]} style={{ height: "450px" }} />
        </div>
        <img src={rotateImg} style={{ height: "70px" }} draggable={false} />
      </div>
    </>
  );
}

export default App;
