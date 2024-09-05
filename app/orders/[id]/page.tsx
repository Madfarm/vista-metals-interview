import { orderDetailsService } from "./OrderDetails.service"

export default async function OrderDetailsPage({ params }: {params: {id: number}}) {
    const { order } = await orderDetailsService(params.id)

    if (order == null) {
        return <h1>No order found</h1>
    }
    return (
        <main>
            <h1>Order Number: {order.orderNumber}</h1>
            <h2>Status: {order.status}</h2>
            <h3>Customer: {order.customerName}</h3>
            <h3>Contact: {order.contact}</h3>

            <ul>
                {order.items.map((item, i) => (
                    <li key={i}>{item.quantity} x {item.name} - ${(item.price*item.quantity).toFixed(2)}</li>
                ))}
            </ul>

            <h4>Total: ${order.orderTotal}</h4>
        </main>
    )
}