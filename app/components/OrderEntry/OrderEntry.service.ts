import React, { useState } from "react";
import { OrderEntryForm } from "./OrderEntry.types";
import { ItemType } from "@/app/home.types";

export default function useOrderEntryForm(items: ItemType[]) {
    const uniqueNames: Set<string> = new Set();
    const uniqueItems: ItemType[] = [];

    for (const item of items) {
        if (!uniqueNames.has(item.name)) {
        uniqueNames.add(item.name);
        uniqueItems.push(item);
        }
    }

    const [currentItems, setCurrentItems] = useState<ItemType[]>([]);
    const [newItem, setNewItem] = useState<ItemType>(uniqueItems[0])

    const [formData, setFormData] = useState<OrderEntryForm>({
        customerName: "",
        contact: "",
        status: "",
        items: [],
        orderTotal: 0.0,
    })

    

    function handleItemChange(e: React.ChangeEvent<HTMLSelectElement>) {
        let itemToAdd: ItemType = (uniqueItems.filter((obj: ItemType) => obj.name === e.target.value))[0]
        setNewItem(itemToAdd)
    }

    function handleAddItem(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setCurrentItems([...currentItems, newItem])
    }

    

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

    }

    return { formData, handleChange , handleSubmit, uniqueItems, handleItemChange, newItem, handleAddItem, currentItems }
}