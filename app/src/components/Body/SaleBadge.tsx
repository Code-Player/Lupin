import React from "react";
import "./Item";

interface Props {
  percent: number;
}

function SaleBadge({ percent }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height:"100%"
      }}
    >
      <span className={"badge"}>-{percent}%</span>
    </div>
  );
}

export default SaleBadge;
