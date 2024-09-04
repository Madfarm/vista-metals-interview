import { ItemType } from "@/app/home.types"

export type OrderEntryForm = {
    customerName: string,
    contact: string,
    status: string,
    items: ItemType[],
    orderTotal: number
}