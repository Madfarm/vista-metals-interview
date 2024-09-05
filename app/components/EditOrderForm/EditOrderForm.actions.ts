"use server"

import { prisma } from "@/lib/prisma"
import { EditOrderFormType } from "./EditOrderForm.types";
import { revalidatePath } from "next/cache";


export async function updateOrder(id: number, body: EditOrderFormType) {
    try {
        await prisma.order.update({
            where: {
                id: id
            },
            data: {
                ...body
            }
        })

        revalidatePath('/orders', 'layout');
        

    } catch(err: unknown) {
        if (typeof err == "string") {
            console.error(err.toUpperCase());
        } else if (err instanceof Error) {
            console.error(err.message)
        }
    }
}