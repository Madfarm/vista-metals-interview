import React, { useState } from "react";
import { OrderEntryForm } from "./OrderEntry.types";
import { ItemType } from "@/app/home.types";
import { createOrder } from "./OrderEntry.actions";

export default function useOrderEntryForm(items: ItemType[]) {
    const uniqueNames: Set<string> = new Set();
    const uniqueItems: ItemType[] = [];

    // Get unique items by name, for future feature of allowing users to enter the quantity
    for (const item of items) {
        if (!uniqueNames.has(item.name)) {
        uniqueNames.add(item.name);
        uniqueItems.push(item);
        }
    }

    
    const [currentItems, setCurrentItems] = useState<ItemType[]>([]);
    const [newItem, setNewItem] = useState<ItemType>(uniqueItems[0])

   

    const [formData, setFormData] = useState<OrderEntryForm>({
        orderNumber: 1,
        customerName: "",
        contact: "",
        status: "Open",
        items: [],
        orderTotal: 0.0,
    })

    

    function handleItemChange(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) {
        let itemToAdd = newItem;
        if (e.target.name == "itemName") {
            itemToAdd = (uniqueItems.filter((obj: ItemType) => obj.name === e.target.value))[0]
        } else if (e.target.name == "itemQuantity") {
            itemToAdd.quantity = Number(e.target.value);
        }
        setNewItem(itemToAdd)
    }

    function handleAddItem(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setCurrentItems([...currentItems, {...newItem, "quantity": newItem.quantity}])
    }

    

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        
        createOrder(formData);
    }

    return { formData, handleChange , handleSubmit, uniqueItems, handleItemChange, newItem, handleAddItem, currentItems, setFormData }
}