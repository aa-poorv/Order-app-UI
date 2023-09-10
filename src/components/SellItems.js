import React from "react";
import Items from "./Items";
import Payment from "./Payment";
import classes from "./SellItems.module.css";

function SellItems() {
  return (
    <div className={classes.allItems}>
      <Items />
      <Payment />
    </div>
  );
}

export default SellItems;
