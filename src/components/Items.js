import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Product from "./products";
import classes from "./Items.module.css";
import discount from "../assets/discount.png";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

function Items() {
  return (
    <Fragment>
      <div className={classes.items}>
        <Card className={classes.itemCard}>
          <Card.Body>
            <Card.Title className={classes.cardTitle}>
              <img
                src={discount}
                alt=''
              ></img>{" "}
              OFFER LIST
            </Card.Title>
            <Card.Text>
              <Container>
                <ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem dolore explicabo iste modi voluptatibus voluptatum
                    autem est quia tempore libero.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus expedita facere iusto? Culpa laborum tempore
                    accusamus porro labore, maxime debitis.
                  </li>
                </ul>
              </Container>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Card.Text>
          </Card.Body>
        </Card>
        <div className={classes.cartDescription}>
          {" "}
          <h5>My Cart</h5> <p>(2)</p>
        </div>
        <Card className={classes.allCard}>
          <Product />
          <hr className={classes.seperator} />
          <Product />
          <Alert
            variant='warning'
            style={{ padding: "8px 11px" }}
            className={classes.alert}
          >
            &#128666; Get FREE Shipping on adding just 1 more unit to your cart.
          </Alert>
        </Card>
      </div>
    </Fragment>
  );
}

export default Items;
