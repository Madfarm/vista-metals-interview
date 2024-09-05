"use server"

import { prisma } from '@/lib/prisma'
import { OrderEntryForm } from './OrderEntry.types'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createOrder(formData: OrderEntryForm){
    /**
     * Removing id and timestamp attributes, so Prisma will create unique Item entries to track each order individually
     */
    const itemsNoIdAndDate = formData.items.map(({id, requestedDate, orderId, ...keepAttrs}) => keepAttrs)

    await prisma.order.create({
        data: {
            ...formData,
            orderNumber: Number(formData.orderNumber),
            items: {
                create: [
                    ...itemsNoIdAndDate
                ]
            }
        }
    })

    
    revalidatePath('/', 'layout');
    redirect('/')
}