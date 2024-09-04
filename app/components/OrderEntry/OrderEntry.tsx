"use client"

import { ItemType } from "@/app/home.types";
import useOrderEntryForm from "./OrderEntry.service"



export default function OrderEntry(props: {items: ItemType[]}) {
    const { 
        formData,
        handleChange,
        handleSubmit,
        uniqueItems,
        handleItemChange,
        newItem,
        handleAddItem,
        currentItems 
    } = useOrderEntryForm(props.items);
    

    return (
        <div>
            <form>
                <div>
                    <label>Customer Name: </label>
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        />
                </div>

                <div>
                    <label>Contact Info </label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        />
                </div>

                <div>
                    <label>Status: </label>
                    <select
                        value={formData.status}
                        onChange={handleChange}
                        name="status"
                        >
                        <option value="Open">Open</option>
                        <option value="Picked">Picked</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>

                <label>Items: 
                    <select
                        onChange={handleItemChange}
                        value={newItem.name}
                        name="itemName"
                        >
                        {uniqueItems.map((item: ItemType, i: number) => (
                            <option value={item.name} key={i}>{item.name}</option>
                        ))}
                    </select>
                    <button onClick={handleAddItem}>Add Item</button>

                </label>
            </form>

            <ul>
                {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                        <li key={item.id}>{item.quantity} x {item.name}</li>
                    ))
                ) : (
                    <p>There are no items in the order yet</p>
                )}
            </ul>
        </div>
    )
}