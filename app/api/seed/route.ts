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
                    {...seedData.items[1]},
                    {...seedData.items[2]},
                    {...seedData.items[3]},
                ]
            }
        },
    });

    const createdOrder2 = await prisma.order.create({
        data: {
            ...seedData.orders[2],
            items: {
                create: [
                    {...seedData.items[0]},
                    {...seedData.items[2]},
                    {...seedData.items[3]},
                ]
            }
        },
    });

    const createdOrder3 = await prisma.order.create({
        data: {
            ...seedData.orders[3],
            items: {
                create: [
                    {...seedData.items[0]},
                    {...seedData.items[4]},
                ]
            }
        },
    });

    const createdOrder4 = await prisma.order.create({
        data: {
            ...seedData.orders[4],
            items: {
                create: [
                    {...seedData.items[1]},
                    {...seedData.items[4]},
                    {...seedData.items[3]},
                ]
            }
        },
    });

    const createdOrder5 = await prisma.order.create({
        data: {
            ...seedData.orders[5],
            items: {
                create: [
                    {...seedData.items[1]},
                    {...seedData.items[4]},
                    {...seedData.items[3]},
                ]
            }
        },
    });

    return Response.json([
        { ...createdOrder },
        { ...createdOrder1 },
        { ...createdOrder2 },
        { ...createdOrder3 },
        { ...createdOrder4 },
        { ...createdOrder5 },
    ]);
}