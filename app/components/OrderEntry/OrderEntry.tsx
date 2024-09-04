"use client"

import useOrderEntryForm from "./OrderEntry.service"


export default function OrderEntry() {
    const { formData, handleChange , handleSubmit } = useOrderEntryForm();

    return (
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

            <label>Status: 
                <select
                    value={formData.status}
                    onChange={handleChange}
                    name="status"
                    >
                    <option value="Open">Open</option>
                    <option value="Picked">Picked</option>
                    <option value="Closed">Closed</option>
                </select>
            </label>
        </form>
    )
}