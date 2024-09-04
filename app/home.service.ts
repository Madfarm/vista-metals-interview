import { prisma } from '@/lib/prisma'
import { OrderType } from './home.types'

export async function homePageService() {
    const query = {
        where : {
            status: "Open"
        }
    }
    const [openOrders, openOrdersCount] = await prisma.$transaction([
        prisma.order.findMany(query),
        prisma.order.count({ where: query.where})
    
    ])

    return { openOrdersCount }
}