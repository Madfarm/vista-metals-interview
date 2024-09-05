import { ItemType } from "@/app/home.types"

export type OrderEntryForm = {
    orderNumber: number,
    customerName: string,
    contact: string,
    status: string,
    items: ItemType[],
    orderTotal: number
}

