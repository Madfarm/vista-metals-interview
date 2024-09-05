import { prisma } from '@/lib/prisma'

export async function orderDetailsService(id: number) {
    try {
        let order = await prisma.order.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                items: true
            }
        })

        return  { order }
    } catch(err: unknown) {
        if (typeof err == "string") {
            console.error(err.toUpperCase());
        } else if (err instanceof Error) {
            console.error(err.message)
        }

        throw err;
    }

}