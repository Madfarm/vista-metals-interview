import orderPageService from "./OrdersPage.service"
import OrdersGrid from "../components/OrdersGrid/OrdersGrid";

export default async function OrdersPage(){
    const { orders, items } = await orderPageService();

    return (
        <main>
            <OrdersGrid orders={orders}/>
        </main>
    )
}