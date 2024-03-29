import "../../styles/components/Order.css"
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format"

export default function Order({ order }) {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, i) => (
        <CheckoutProduct
          id={item.id}
          key={i}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total: {value}</h3>
          </>
        )}
        value={order.data.amount / 100}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹ "}
      />
    </div>
  )
}
