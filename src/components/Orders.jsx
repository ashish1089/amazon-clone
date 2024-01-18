import { useEffect, useState } from "react"
import "../../styles/components/Orders.css"
import { db } from "../firebase";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import Order from "./Order";
import { useStateValue } from "../StateProvider";

export default function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user?.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));

      onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
    } else {
      setOrders([])
    }
  }, [])

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order order={order} key={i} />)
        )}
      </div>
    </div>
  )
}
