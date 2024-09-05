import OrderEntry from "@/app/components/OrderEntry/OrderEntry"
import { ItemType } from "@/app/home.types"
import { prisma } from '@/lib/prisma'
import styles from './NewOrderPage.module.css'

export default async function OrderEntryPage() {
    let items: ItemType[] = await prisma.item.findMany({});

    return (
        <main>
            <h1 className={styles.title}>Order Entry</h1>

            <OrderEntry items={items} />
        </main>
    )
}