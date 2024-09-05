import { prisma } from '@/lib/prisma'
import { ItemType, OrderType } from '../home.types'

export default async function orderPageService() {
    const items: ItemType[] = await prisma.item.findMany({})
    const orders: OrderType[] = await prisma.order.findMany({
        include: {
            items: true
        }
    })


    return { orders, items }
}