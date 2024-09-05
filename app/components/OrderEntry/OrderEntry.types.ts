import { ItemType } from "@/app/home.types"

export type OrderEntryForm = {
    orderNumber: number,
    customerName: string,
    contact: string,
    status: string,
    items: ItemType[],
    orderTotal: number
}

export interface ItemFormType {
    id: number,
    lineNumber: number,
    name: string,
    quantity: number | undefined,
    price: number,
    requestedDate: Date,
    orderId: number,
}