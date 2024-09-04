export type ItemType = {
    id: number,
    lineNumber: number,
    name: string,
    quantity: number,
    price: number,
    requestedDate: Date,
    orderId: number
}

export type OrderType = {
    id: number,
    orderNumber: number
    customerName: string,
    contact: string,
    status: string,
    orderTotal: number
    items: ItemType[]
}