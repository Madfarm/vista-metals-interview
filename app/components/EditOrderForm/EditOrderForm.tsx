"use client"

import { OrderType } from "@/app/home.types";
import useEditOrderForm from "./EditOrderForm.service";

export default function EditOrderForm(props: {order: OrderType}) {
    const { 
        isEditable,
        handleEditable,
        handleChange,
        formData,
        handleSubmit 
    } = useEditOrderForm(props.order);

    return (
        <>
            {!isEditable ?
                <div>
                    <h2>Status: {props.order.status}</h2>
                    <h3>Customer: {props.order.customerName}</h3>
                    <h3>Contact: {props.order.contact}</h3>
                    <button onClick={handleEditable}>Edit Order</button>
                </div>
                :
                <form onSubmit={handleSubmit}>
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

                    <button onClick={handleEditable}>Cancel</button>
                    <button type="submit">Submit</button>
                </form>
            }
        </>
    )
}