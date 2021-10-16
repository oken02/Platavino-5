import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { resetCart } from "../store/addToCarrito";
import getToken from "../utils/getToken";

export const Checkout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carrito);

  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    address: "",
    payment: "",
  });

  const total = useMemo(
    () => cartItems.reduce((p, c) => p + c.vino.precio * c.cantidad, 0),
    []
  );

  const handleSubmitCheckoutForm = (e) => {
    e.preventDefault();
    console.log("ORDER DATA", order);
    axios
      .post("http://localhost:3001/api/ordens", order, getToken())
      .then(({ data }) => {
        console.log("RES", data);
        dispatch(resetCart());
        history.push("/perfil/orders");
      })
      .catch((e) => console.log(e.response));
  };

  const changeOrder = ({ target }) =>
    setOrder({ ...order, [target.id]: target.value });

  const changePayment = ({ target }) => {
    if (target.checked)
      changeOrder({ target: { id: "payment", value: target.id } });
  };

  return (
    <div>
      <div class="container">
        <main>
          <div class="py-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/attachment_75908874-e1552887176124.jpg?auto=format&q=60&fit=max&w=930"
              alt=""
              width="72"
              height="57"
            />
            <p class="lead">
              <h1>Checkout Form</h1>
            </p>
          </div>

          <div class="row g-5">
            <div class="col-md-5 col-lg-4 order-md-last">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span
                  class="text-primary "
                  style={{ textTransform: "uppercase" }}
                >
                  Your cart
                </span>
                <span class="badge bg-primary rounded-pill">
                  {cartItems.length}
                </span>
              </h4>
              <ul class="list-group mb-3">
                {cartItems.map((item) => {
                  return (
                    <div>
                      <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                          <h6 class="my-0">{item.vino.bodega}</h6>
                          <small class="text-muted">{`${item.cantidad} x ${item.vino.precio}`}</small>
                        </div>
                        <span class="text-muted">{`$${
                          item.vino.precio * item.cantidad
                        }`}</span>
                      </li>
                    </div>
                  );
                })}
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">TOTAL</h6>
                    <small class="text-muted">{total}</small>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-7 col-lg-8">
              <h4 class="mb-3">Billing address</h4>
              <form
                class="needs-validation"
                novalidate
                onSubmit={handleSubmitCheckoutForm}
              >
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      First name
                    </label>
                    <input
                      onChange={changeOrder}
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="FirstName"
                      value={order.firstName}
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Last name
                    </label>
                    <input
                      onChange={changeOrder}
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="LastName"
                      value={order.lastName}
                      // required
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">
                      Address
                    </label>
                    <input
                      onChange={changeOrder}
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="example : 1234 Main St"
                      value={order.address}
                      //   required
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                </div>

                <hr class="my-4" />

                <h4 class="mb-3">Payment</h4>

                <div class="my-3">
                  <div class="form-check">
                    <input
                      id="credit"
                      name="payment"
                      type="radio"
                      class="form-check-input"
                      //   checked
                      onChange={changePayment}
                      // required
                    />
                    <label class="form-check-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="debit"
                      name="payment"
                      type="radio"
                      class="form-check-input"
                      onChange={changePayment}

                      // required
                    />
                    <label class="form-check-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="paypal"
                      name="payment"
                      type="radio"
                      class="form-check-input"
                      onChange={changePayment}

                      // required
                    />
                    <label class="form-check-label" for="paypal">
                      PayPal
                    </label>
                  </div>
                </div>

                <hr class="my-4" />

                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
