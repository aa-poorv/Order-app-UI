import React, { Fragment } from "react";
import doorKnob from "../assets/DoorKnob.webp";
import classes from "./Product.module.css";
import close from "../assets/close.png";
import Button from "react-bootstrap/Button";

function Products() {
  return (
    <Fragment>
      <div className={classes.product}>
        <div className={classes.description}>
          <img
            src={doorKnob}
            alt=''
          />
          <div className={classes.firstRow}>
            <div className={classes.emptySpace}></div>
            <div>
              <h5>Lorem ipsum dolor sit amet consectetur.</h5>
            </div>
            <div>
              <span>
                <b>&#x20b9; 130</b>
              </span>{" "}
              <span>
                <del> &#x20b9;160</del>
              </span>
              <span className={classes.discount}> 50% off</span>
            </div>
            <div>
              <span>Get it Tues, Jul 24</span>
              <span className={classes.delivery}>Free Fast Delivery</span>
            </div>
            <div className={classes.info}>
              <span style={{ color: "green" }}>
                {" "}
                &#9432; To place an order, add at least 10 units to your cart.
              </span>
            </div>
          </div>
        </div>

        <div className={classes.secondRow}>
          <div>
            <img
              src={close}
              alt=''
              className={classes.closeButton}
            />
          </div>

          <div
            className={classes.buttons}
            style={{ marginTop: "16.5px" }}
          >
            <Button
              className={classes.changeButton}
              variant='warning'
            >
              -
            </Button>{" "}
            <input
              type='number'
              defaultValue='1'
            />
            <Button
              className={classes.changeButton}
              variant='warning'
            >
              +
            </Button>{" "}
          </div>

          <div style={{ marginTop: "17px" }}>
            <span>
              <b>&#x20b9; 130</b>
            </span>
          </div>

          <div style={{ marginTop: "5px", textAlign: "right" }}>
            <span>
              <u>Add to Wishlist</u>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
