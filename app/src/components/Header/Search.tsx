import React, { useState, useRef } from "react";
import "./Search.css";

interface Props {
  pageScrollY: number;
}

function Search({ pageScrollY }: Props) {
  let suggest: string = "KF94 마스크";

  const focus: any = useRef();

  const [text, setText] = useState("");
  const [shadow, setShadow] = useState("0px");

  function showNavigation(y: number) {
    if (y <= 50) {
      return "collapse";
    } else {
      return "visible";
    }
  }

  return (
    <div style={{ position: "relative", height: "75px" }}>
      <div className={"search"}>
        <input
          className={"search-box"}
          placeholder={suggest}
          style={{
            boxShadow: shadow,
          }}
          onFocus={() => setShadow("0px 0px 10px #cfcfcf")}
          onBlur={() => setShadow("0px 0px 0px")}
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
        />
      </div>

      <div
        className={"navi-search-box"}
        style={{
          visibility: showNavigation(pageScrollY),
        }}
      >
        <input
          className={"navSearch"}
          autoFocus
          placeholder={suggest}
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={focus}
          spellCheck={false}
        />
        {pageScrollY}
      </div>
    </div>
  );
}

export default Search;
