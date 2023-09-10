import React from "react";
import cart from "../assets/cart.png";
import checkout from "../assets/Checkout.png";
import orderComplete from "../assets/OrderComplete.png";
import classes from "../components/ShoppingOrder.module.css";
function ShoppingOrder() {
  return (
    <div className={classes.shopping}>
      <div>
        <img
          src={cart}
          alt=''
        />
      </div>
      <h6 className={classes.disappear1}>Shopping Cart</h6>
      <hr />
      <div>
        <img
          src={checkout}
          alt=''
        />
      </div>
      <h6 className={classes.disappear}>Checkout</h6>
      <hr />
      <div>
        <img
          src={orderComplete}
          alt=''
        />
      </div>
      <h6 className={classes.disappear}>Order Complete</h6>
    </div>
  );
}

export default ShoppingOrder;
