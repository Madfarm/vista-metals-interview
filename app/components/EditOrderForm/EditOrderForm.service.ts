import { OrderType } from "@/app/home.types";
import React, { useState } from "react";
import { updateOrder } from "./EditOrderForm.actions";
import { EditOrderFormType } from "./EditOrderForm.types";

export default function useEditOrderForm(order: OrderType) {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    function handleEditable(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsEditable(!isEditable);
    }

    const [formData, setFormData] = useState<EditOrderFormType>({
        customerName: order.customerName,
        contact: order.contact,
        status: order.status,
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        updateOrder(order.id, formData);
        setIsEditable(false);
    }


    return {
        isEditable,
        handleEditable,
        formData,
        handleChange,
        handleSubmit
    }
}