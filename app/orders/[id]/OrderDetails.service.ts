import { prisma } from '@/lib/prisma'
import { OrderType } from '@/app/home.types'

export async function orderDetailsService(id: number) {
    let order = await prisma.order.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            items: true
        }
    })

    return { order }
}