import React, { useState } from "react";
import { OrderEntryForm } from "./OrderEntry.types";
import { ItemType } from "@/app/home.types";
import { createOrder } from "./OrderEntry.actions";

export default function useOrderEntryForm(items: ItemType[]) {
    // Get unique items by name for the Item selector
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
    const [errorMessages, setErrorMessages] = useState<string>("");

   

    const [formData, setFormData] = useState<OrderEntryForm>({
        orderNumber: 1,
        customerName: "",
        contact: "",
        status: "Open",
        items: [],
        orderTotal: 0.0,
    })

    
    /**
     * Custom handleChange function to grab the full contents of Items to create relation in Prisma.
     * parseInt is used here because it allows the quantity input field to be empty
     */
    function handleItemChange(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) {
        let itemToAdd: ItemType = { ...newItem };
        if (e.target.name == "itemName") {
            itemToAdd = (uniqueItems.filter((obj: ItemType) => obj.name === e.target.value))[0]
        } else if (e.target.name == "itemQuantity") {
            itemToAdd.quantity = parseInt(e.target.value);
        }
        setNewItem(itemToAdd)
    }

    function handleAddItem(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if(newItem.quantity < 1 ) {
            setErrorMessages("Quantity must be greater than 0")
            return;
        }


        setCurrentItems([...currentItems, {...newItem, "quantity": newItem.quantity}])
        setErrorMessages("");
    }

    

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(formData.orderTotal < 1) {
            setErrorMessages("You must add items to create an order");
            return;
        }

        
        createOrder(formData);
    }

    return { formData, handleChange , handleSubmit, uniqueItems, handleItemChange, newItem, handleAddItem, currentItems, setFormData, errorMessages }
}