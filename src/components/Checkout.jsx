import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const Checkout = () => {
    const history = useHistory()
    const [total, setTotal] = useState(0);
    const lstoken = localStorage.getItem('token')
    let firstName;
    let lastName;
    let email;
    let adress;

    const handleChangeFirstNameCheckout = (e) => {
        firstName = e.target.value
    }
    const handleChangeLastNameCheckout = (e) => {
        lastName = e.target.value
    }
    const handleChangeEmailCheckout = (e) => {
        email = e.target.value
    }
    const handleChangeAdressCheckout = (e) => {
        adress = e.target.value
    }

    const handleSubmitCheckoutForm = (e) => {
        e.preventDefault()
        // history.push('/confirmada')
        axios.post('http://localhost:3001/api/ordens', {}, {
            headers: {
                Authorization: "Bearer " + lstoken,
            }
        })
            .then((data) => {
                history.push('/ordenHistory')
            })
            .catch(e => console.log(e.response))
    }
    const cartItems = useSelector((state) => {
        return state.carrito
    })
    useEffect(() => {
        let suma = cartItems.map((wine) => wine.vino.Precio);
        setTotal(
            suma.reduce(function (previousValue, currentValue) {
                return Number(previousValue) + Number(currentValue);
            }, 0)
        );
    }, [cartItems]);

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
                                <span class="text-primary">Your cart</span>
                                <span class="badge bg-primary rounded-pill">{cartItems.length}</span>
                            </h4>
                            <ul class="list-group mb-3">
                                {cartItems.map((item) => {
                                    return <div>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">{item.vino.Bodega}</h6>
                                                <small class="text-muted">{item.vino.Varietal}</small>
                                            </div>
                                            <span class="text-muted">{`$${item.vino.Precio}`}</span>
                                        </li>
                                    </div>
                                })}
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">TOTAL</h6>
                                        <small class="text-muted">{total}</small>
                                    </div>
                                </li>
                            </ul>

                            <form class="card p-2">
                                <div class="input-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Promo code"
                                    />
                                    <button type="submit" class="btn btn-secondary">
                                        Redeem
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-7 col-lg-8">
                            <h4 class="mb-3">Billing address</h4>
                            <form class="needs-validation" novalidate onSubmit={handleSubmitCheckoutForm}>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="firstName" class="form-label" >
                                            First name
                                        </label>
                                        <input
                                            onChange={handleChangeFirstNameCheckout}
                                            type="text"
                                            class="form-control"
                                            id="firstName"
                                            placeholder=""
                                            value=""
                                        // required
                                        />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="lastName" class="form-label" >
                                            Last name
                                        </label>
                                        <input
                                            onChange={handleChangeLastNameCheckout}
                                            type="text"
                                            class="form-control"
                                            id="lastName"
                                            placeholder=""
                                            value=""
                                        // required
                                        />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">
                                            Email <span class="text-muted">(Optional)</span>
                                        </label>
                                        <input
                                            onChange={handleChangeEmailCheckout}
                                            type="email"
                                            class="form-control"
                                            id="email"
                                            placeholder="you@example.com"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">
                                            Address
                                        </label>
                                        <input
                                            onChange={handleChangeAdressCheckout}
                                            type="text"
                                            class="form-control"
                                            id="address"
                                            placeholder="1234 Main St"
                                        // required
                                        />
                                        <div class="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                </div>

                                <hr class="my-4" />

                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="same-address"
                                    />
                                    <label class="form-check-label" for="same-address">
                                        Shipping address is the same as my billing address
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="save-info"
                                    />
                                    <label class="form-check-label" for="save-info">
                                        Save this information for next time
                                    </label>
                                </div>

                                <hr class="my-4" />

                                <h4 class="mb-3">Payment</h4>

                                <div class="my-3">
                                    <div class="form-check">
                                        <input
                                            id="credit"
                                            name="paymentMethod"
                                            type="radio"
                                            class="form-check-input"
                                            checked
                                        // required
                                        />
                                        <label class="form-check-label" for="credit">
                                            Credit card
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            id="debit"
                                            name="paymentMethod"
                                            type="radio"
                                            class="form-check-input"
                                        // required
                                        />
                                        <label class="form-check-label" for="debit">
                                            Debit card
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            id="paypal"
                                            name="paymentMethod"
                                            type="radio"
                                            class="form-check-input"
                                        // required
                                        />
                                        <label class="form-check-label" for="paypal">
                                            PayPal
                                        </label>
                                    </div>
                                </div>

                                <div class="row gy-3">
                                    <div class="col-md-6">
                                        <label for="cc-name" class="form-label">
                                            Name on card
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="cc-name"
                                            placeholder=""
                                        // required
                                        />
                                        <small class="text-muted">
                                            Full name as displayed on card
                                        </small>
                                        <div class="invalid-feedback">Name on card is required</div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="cc-number" class="form-label">
                                            Credit card number
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="cc-number"
                                            placeholder=""
                                        // required
                                        />
                                        <div class="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-expiration" class="form-label">
                                            Expiration
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="cc-expiration"
                                            placeholder=""
                                        // required
                                        />
                                        <div class="invalid-feedback">Expiration date required</div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-cvv" class="form-label">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="cc-cvv"
                                            placeholder=""
                                        // required
                                        />
                                        <div class="invalid-feedback">Security code required</div>
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

                <footer class="my-5 pt-5 text-muted text-center text-small">
                    <p class="mb-1">2021 Platavino 5</p>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="#">Privacy</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">Terms</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
};