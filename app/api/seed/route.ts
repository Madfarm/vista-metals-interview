import { prisma } from '@/lib/prisma'
import { seedData } from '@/lib/seedData';

export async function GET(NextRequest: Request) {
    await prisma.item.deleteMany();
    await prisma.order.deleteMany();

    
    const createdOrder = await prisma.order.create({
        data: {
            ...seedData.orders[0],
            items: {
                create: [
                    {...seedData.items[0]}
                ]
            },
        },
    });

    const createdOrder1 = await prisma.order.create({
        data: {
            ...seedData.orders[1],
            items: {
                create: [
                    {...seedData.items[1]}
                ]
            }
        },
    });

    return Response.json([{ ...createdOrder }, {...createdOrder1 }]);
}