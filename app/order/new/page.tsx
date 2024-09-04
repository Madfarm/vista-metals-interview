import OrderEntry from "@/app/components/OrderEntry/OrderEntry"
import { ItemType } from "@/app/home.types"
import { prisma } from '@/lib/prisma'

export default async function OrderEntryPage() {
    let items: ItemType[] = await prisma.item.findMany({});

    return (
        <main>
            <h1>Order Entry</h1>

            <OrderEntry items={items} />
        </main>
    )
}