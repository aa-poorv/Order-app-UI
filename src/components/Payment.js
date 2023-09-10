import React from "react";
import classes from "./Payment.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import mastercard from "../assets/mastercard.png";
import paytm from "../assets/paytm.png";
import world from "../assets/world.png";
import truck from "../assets/truck.png";

function Payment() {
  return (
    <div className={classes.payment}>
      <Card className={classes.itemCard}>
        <Card.Body>
          <Card.Title className={classes.title}>Coupons</Card.Title>
          <Card.Text className={`mb-2 text-muted ${classes.txt}`}>
            <div className={classes.firstRow}>
              <div>
                <span>
                  <b>Lorem</b> ipsum consectetur
                </span>
              </div>
              <div>
                <Button
                  variant='light'
                  className={classes.apply}
                >
                  Apply
                </Button>{" "}
              </div>
            </div>
            <hr />
          </Card.Text>
          <Card.Title className={classes.title}>
            Price details (2 items)
          </Card.Title>
          <Card.Text>
            <div className={`${classes.firstRow} ${classes.widthRow} `}>
              <div>
                <span>Subtotal</span>
              </div>
              <div>
                <span>&#x20b9; 130.00</span>
              </div>
            </div>
            <div className={`${classes.firstRow} ${classes.widthRow} `}>
              <div>
                <span>Discount On MRP</span>
              </div>
              <div>
                <span>&#x20b9; 0.0</span>
              </div>
            </div>
            <div className={`${classes.firstRow} ${classes.widthRow} `}>
              <div>
                <span>Coupon Discount</span>
              </div>
              <div>
                <span style={{ color: "pink" }}>Not Applied</span>
              </div>
            </div>
            <div className={`${classes.firstRow} ${classes.widthRow} `}>
              <div>
                <span style={{ marginRight: "0.7rem" }}>Shipping Cost </span>
                <span style={{ color: "red" }}>
                  {" "}
                  <u>Change Pin</u>{" "}
                </span>
              </div>
              <div>
                <span style={{ color: "pink" }}>Not Applied</span>
              </div>
            </div>
            <div className={`${classes.firstRow} ${classes.widthRow} `}>
              <div>
                <span style={{ marginRight: "0.7rem" }}>
                  ODA Shipping Charges{" "}
                </span>
                <span>
                  <b className={classes.inform}> &#9432;</b>
                </span>
              </div>
              <div>
                <span style={{ color: "pink" }}>Not Applied</span>
              </div>
            </div>
            <div className={`${classes.firstRow} ${classes.widthRow} `}>
              <div>
                <Form.Control
                  size='lg'
                  type='text'
                  className={classes.pinCode}
                  placeholder='48****'
                />
              </div>
              <div className={classes.pinLabel}>
                <span>Enter Pin Code</span>
              </div>
            </div>
            <hr style={{ margin: "20px 0" }} />
            <div className={`${classes.firstRow} ${classes.widthRow} `}>
              <div>
                <span>
                  <b>Total Amount</b>
                </span>
              </div>
              <div>
                <span>
                  <b>&#x20b9; 130.00</b>
                </span>
              </div>
            </div>
            <Button
              variant='dark'
              size='lg'
              className={classes.checkoutButton}
            >
              <span className={classes["checkout-button"]}>Checkout</span>{" "}
              <span className={classes["checkout-button"]}>|</span>{" "}
              <span className={classes["checkout-button"]}>
                &#x20b9; 130.00
              </span>
            </Button>
          </Card.Text>
          <Card.Text
            style={{ color: "grey", fontSize: "13px", letterSpacing: "2px" }}
          >
            <div style={{ marginBottom: "18px" }}>
              SECURE PAYMENTS PROVIDED BY
            </div>
            <div className={classes["payment-methods"]}>
              <img
                src={mastercard}
                alt=''
              />
              <img
                src={paytm}
                alt=''
              />
              <img
                src={world}
                alt=''
              />
              <img
                src={truck}
                alt=''
              />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Payment;
