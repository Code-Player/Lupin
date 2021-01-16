import React from "react";

interface Props {
  pageScrollY: number;
}

function Navigation({ pageScrollY }: Props) {
  function showNavigation(y: number) {
    if (y <= 100) {
      return "collapse";
    } else {
      return "visible";
    }
  }

  return (
    <div>
      <div id={"dd"} />
      <input type={"search"} placeholder={"KF94 마스크"} />
      <div
        style={{
          position: "fixed",
          background: "red",
          width: "100px",
          height: "100px",
          marginTop: "100px",
          zIndex: 2,
          visibility: showNavigation(pageScrollY),
        }}
      >
        {pageScrollY}
      </div>
    </div>
  );
}

export default Navigation;
