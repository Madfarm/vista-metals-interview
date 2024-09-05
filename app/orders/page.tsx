import orderPageService from "./OrdersPage.service"
import OrdersGrid from "../components/OrdersGrid/OrdersGrid";
import OrderEntry from "../components/OrderEntry/OrderEntry";

export default async function OrdersPage(){
    const { orders, items } = await orderPageService();

    return (
        <main>
            <OrdersGrid orders={orders}/>

            <OrderEntry items={items} />
        </main>
    )
}