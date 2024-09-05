import { prisma } from '@/lib/prisma'

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