"use client"

import { ItemType } from "@/app/home.types";
import useOrderEntryForm from "./OrderEntry.service"
import { useEffect } from "react";
import styles from './OrderEntry.module.css'



export default function OrderEntry(props: {items: ItemType[]}) {
    const { 
        formData,
        handleChange,
        handleSubmit,
        uniqueItems,
        handleItemChange,
        newItem,
        handleAddItem,
        currentItems,
        setFormData,
        errorMessages
    } = useOrderEntryForm(props.items);

    /**
     * The formdata is set here in a useEffect because of setState being asynchronous. This ensures that when you click "Create Order"
     * the state of the application is always in line with what is rendered in the UI.
     */
    useEffect(() => {
        const totalPrice = Number(currentItems.reduce((total, item) => total + (item.price * item.quantity), 0.0).toFixed(2));
        setFormData({...formData, ["items"]: currentItems, orderTotal: totalPrice});
    }, [currentItems])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Order Number: </label>
                    <input
                        type="number"
                        name="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleChange}
                        />
                </div>
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

                    <label>Quantity:</label>
                    <input 
                        type="number"
                        onChange={handleItemChange}
                        value={newItem.quantity}
                        name="itemQuantity"
                    />
                    <button onClick={handleAddItem}>Add Item</button>
                </label>
                
                <p className={styles.Error}>{errorMessages}</p>
                
                <h2>Current Order: </h2>
                <ul>
                    {currentItems.length > 0 ? (
                        currentItems.map((item, i) => (
                            <li key={i}>{item.quantity} x {item.name}</li>
                        ))
                    ) : (
                        <p>There are no items in the order yet</p>
                    )}
                </ul>
                <h2>Order Total: ${formData.orderTotal}</h2>

                <div>
                    <button type="submit">Create Order</button>
                </div>
            </form>

            
        </div>
    )
}