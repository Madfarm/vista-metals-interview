import { prisma } from '@/lib/prisma'

export async function homePageService() {
    try {
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
    } catch(err: unknown) {
        
        if (typeof err == "string") {
            console.error(err.toUpperCase());
        } else if (err instanceof Error) {
            console.error(err.message)
        }

        throw err;
    }
}