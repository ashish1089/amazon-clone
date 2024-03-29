import "../../styles/components/Payment.css"
import CheckoutProduct from "./CheckoutProduct";
import axios from "../axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [clientSecret, SetClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      // stripe expects the total in a currencies subunits
      const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
      // if (response) {
      //   console.log(response);
      // }
      SetClientSecret(response.data.clientSecret)

    }
    getClientSecret();
  }, [basket])

  console.log('The secret >>>>', clientSecret);
  // console.log(getBasketTotal(basket));
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // paymentIntent = payment Confirmation

      const ordersRef = collection(db, "users", user?.uid, "orders");
      const orderRef = doc(ordersRef, paymentIntent.id);

      setDoc(orderRef, {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      setSucceeded(true);
      setError(null)
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      navigate('/orders')
    })

  }

  const handleChange = event => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to='/checkout' >{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Mumbai, IN</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">

            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form action="" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button className="btn-bounce" disabled={processing || disabled || succeeded}>
                  <span className="btn-label">{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
