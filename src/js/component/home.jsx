import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [turnLights, setTurnLights] = useState(false);
  const [color, setColor] = useState(null);
  const [cycleCount, setCycleCount] = useState(0);
  const [purple, setPurple] = useState(false);

  return (
    <div className="container" style={{ height: "450px" }}>
      <div className="row  justify-content-center h-25">
        <div className="col-sm-1 col-3 mt-2 d-flex justify-content-center">
          <div className="bg-black h-100 w-25"></div>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-sm-1 col-3 d-flex justify-content-center p-0">
          <div className="col-12 bg-black  rounded-3 d-flex align-items-center ">
            <div className="col-12 my-2 ">
              <div
                className={
                  turnLights && color === "red"
                    ? "rounded-circle lights light-red m-auto turnOn"
                    : "rounded-circle lights light-red m-auto "
                }
                onClick={(e) => {
                  e.preventDefault();
                  // e.target.className = e.target.className + " turnOn";

                  let colorTp = e.target.className.split(" ")[2].split("-")[1];

                  if (turnLights && color === colorTp) {
                    setTurnLights(false);
                  } else {
                    setTurnLights(true);
                  }
                  setColor(colorTp);
                }}
              ></div>
              <div
                className={
                  turnLights && color === "orange"
                    ? "rounded-circle lights light-orange m-auto turnOn"
                    : "rounded-circle lights light-orange m-auto "
                }
                onClick={(e) => {
                  e.preventDefault();
                  // e.target.className = e.target.className + " turnOn";
                  let colorTp = e.target.className.split(" ")[2].split("-")[1];

                  if (turnLights && color === colorTp) {
                    setTurnLights(false);
                  } else {
                    setTurnLights(true);
                  }
                  setColor(colorTp);
                }}
              ></div>
              <div
                className={
                  turnLights && color === "green"
                    ? "rounded-circle lights light-green m-auto turnOn"
                    : "rounded-circle lights light-green m-auto "
                }
                onClick={(e) => {
                  e.preventDefault();

                  // e.target.className = e.target.className + " turnOn";
                  let colorTp = e.target.className.split(" ")[2].split("-")[1];

                  if (turnLights && color === colorTp) {
                    setTurnLights(false);
                  } else {
                    setTurnLights(true);
                  }
                  setColor(colorTp);
                }}
              ></div>
              {purple ? (
                <div
                  className={
                    turnLights && color === "purple"
                      ? "rounded-circle lights light-purple m-auto turnOn"
                      : "rounded-circle lights light-purple m-auto "
                  }
                  onClick={(e) => {
                    e.preventDefault();

                    // e.target.className = e.target.className + " turnOn";
                    let colorTp = e.target.className
                      .split(" ")[2]
                      .split("-")[1];

                    if (turnLights && color === colorTp) {
                      setTurnLights(false);
                    } else {
                      setTurnLights(true);
                    }
                    setColor(colorTp);
                  }}
                ></div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row  justify-content-center mt-2">
        <div className="col-sm-1 col-3 ">
          <button
            type="button"
            class="btn btn-dark w-100"
            onClick={() => {
              let colorsArray = purple
                ? ["red", "orange", "green", "purple"]
                : ["red", "orange", "green"];

              console.log(colorsArray[cycleCount]);
              setColor(colorsArray[cycleCount]);
              setTurnLights(true);
              setCycleCount((cycleCount + 1) % colorsArray.length);
            }}
          >
            Cycle
          </button>
        </div>
      </div>
      <div className="row  justify-content-center mt-2">
        <div className="col-sm-2 col-6 ">
          {purple ? (
            <button
              type="button"
              class="btn btn-dark w-100"
              onClick={() => {
                setPurple(false);
              }}
            >
              Remove Purple
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-dark w-100"
              onClick={() => {
                setPurple(true);
              }}
            >
              Add Purple
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
