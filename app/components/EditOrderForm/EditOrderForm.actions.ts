"use server"

import { prisma } from "@/lib/prisma"
import { EditOrderFormType } from "./EditOrderForm.types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateOrder(id: number, body: EditOrderFormType) {
    try {
        const updatedOrder = await prisma.order.update({
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