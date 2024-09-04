import React, { useState } from "react";
import { OrderEntryForm } from "./OrderEntry.types";

export default function useOrderEntryForm() {
    const [formData, setFormData] = useState<OrderEntryForm>({
        customerName: "",
        contact: "",
        status: "",
        items: [],
        orderTotal: 0.0,
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

    }

    return { formData, handleChange , handleSubmit }
}