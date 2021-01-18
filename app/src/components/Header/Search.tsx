import React, { useState } from "react";
import "./Search.css";

interface Props {
  pageScrollY: number;
}

function Search({ pageScrollY }: Props) {
  const [shadow, setShadow] = useState("0px");

  let suggest: string =
    "KF94 마스크";

  function showNavigation(y: number) {
    if (y <= 50) {
      return "collapse";
    } else {
      return "visible";
    }
  }

  // function shadow(focus: boolean) {
  //   if (focus) {
  //     return "0px 0px 3px gray";
  //   } else {
  //     return "0px";
  //   }
  // }

  return (
    <div style={{ position: "relative", height: "75px" }}>
      <div className={"search"}>
        <input
        className={"search-box"}
          placeholder={suggest}
          style={{
            width: "600px",
            height: "52px",
            border: "solid 3px #3f84f2",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "18px",
            padding: "0px 15px",
            outline: "none",
            boxShadow: shadow,
          }}
          onFocus={() => setShadow("0px 0px 10px #cfcfcf")}
          onBlur={() => setShadow("0px 0px 0px")}
        />
      </div>

      <div
        style={{
          position: "fixed",
          boxShadow: "0px 0px 3px gray",
          background: "white",
          width: "100%",
          height: "65px",
          zIndex: 2,
          visibility: showNavigation(pageScrollY),
        }}
      >
        <input placeholder={suggest} />
        {pageScrollY}
      </div>
    </div>
  );
}

export default Search;
