import { prisma } from '@/lib/prisma'
import { ItemType, OrderType } from '../home.types'

export default async function orderPageService() {
    try {
        const items: ItemType[] = await prisma.item.findMany({})
        const orders: OrderType[] = await prisma.order.findMany({
            include: {
                items: true
            }
        })


        return { orders, items }

    } catch(err: unknown) {
        if (typeof err == "string") {
            console.error(err.toUpperCase());
        } else if (err instanceof Error) {
            console.error(err.message)
        }

        throw err;
    }
}