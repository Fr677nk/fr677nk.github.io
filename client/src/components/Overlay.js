import React, { useEffect } from "react";
import "../styles/overlay.css";
const markers = [0,700,1500,2550,3500, 9999]

const Overlay = (props) => {
  let dotsList = ["", "", "", "", "", ""];
  dotsList = dotsList.map((item, i) => {
    if (i === props.currentPage) {
      return (
        <div
          key={"sidedot" + i}
          className="sidedot"
          style={{ backgroundColor: "black" }}
          onClick={() => {
            window.scrollTo(
              0,
              markers[i]
            );
            
          }}
        >
          {item}
        </div>
      );
    } else {
      return (
        <div
          key={"sidedot" + i}
          className="sidedot"
          style={{ backgroundColor: "lightgrey" }}
          onClick={() => {
            window.scrollTo(
              0,
              markers[i]
            );
          }}
        >
          {item}
        </div>
      );
    }
  });
  return (
    <div id="overlay">
      {/* <p>{props.currentPage}</p> */}
      <ul>{dotsList}</ul>
    </div>
  );
};

export default Overlay;
