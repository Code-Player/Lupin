import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Item.css";
import Badge from "./SaleBadge";

interface Props {
  itemName: string;
  itemImage: string;
  salePercentage: number;
}

function Item({ itemName, itemImage, salePercentage }: Props) {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      className={"itemTemplate"}
      whileHover={{
        scale: 1.1,
        height: "290px",
      }}
      whileTap={{ scale: 1 }}
      onClick={() => setCount(count + 1)}
    >
      <div style={{ margin: "10px" }}>
        <div
          style={{
            display: "flex",
            borderRadius: "10px",
            alignContent: "center",
          }}
        >
          <img
            src={itemImage}
            style={{ width: "100%", height: "100%" }}
            alt={itemName}
          />
          <Badge percent={salePercentage} />
        </div>
        <p style={{ marginTop: "3px" }}>{itemName}</p>
        <p style={{ fontSize: "1.2em", color: "red" }}>{count}</p>
      </div>
    </motion.div>
  );
}

export default Item;
