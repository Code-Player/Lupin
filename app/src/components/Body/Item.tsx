import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Item.css";

const mainStyle = {
  background: "white",
  width: "200px",
  height: "230px",
  borderRadius: "10px",
  boxShadow: "0px 0px 3px gray",
  margin: "10px",
  overflow:"hidden"
};

interface Props {
  itemName: string;
  itemImage: string;
}

function Item({ itemName, itemImage }: Props) {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      style={mainStyle}
      whileHover={{
        scale: 1.1,
        height: "270px",
      }}
      whileTap={{ scale: 1 }}
      onClick={() => setCount(count + 1)}
    >
      <div style={{ margin: "10px" }}>
        <img
          src={itemImage}
          style={{
            width: "100%",
            borderRadius: "10px",
            alignItems: "center",
          }}
          alt={"dd"}
        />
        <p style={{ marginTop: "3px" }}>{itemName}</p>
        <p style={{ fontSize: "1.2em", color: "red" }}>{count}</p>
      </div>
    </motion.div>
  );
}

export default Item;
