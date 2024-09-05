"use client"

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.min.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';
import { OrderType } from '@/app/home.types';
import { ColDef } from 'ag-grid-community';
import { ICellRendererParams } from 'ag-grid-community';
import Link from 'next/link';

export function LinkComponent(props: ICellRendererParams) {
    return(
        <Link href={`/orders/${props.data.id}`}>{props.data.orderNumber}</Link>
    )
}


export default function OrdersGrid(props: {orders: OrderType[]}) {
    const [rowData, setRowData] = useState<OrderType[]>(props.orders)
    const [colDefs, setColDefs] = useState<ColDef[]>([
        { field: "orderNumber", cellRenderer: LinkComponent},
        { field: "customerName"},
        { field: "contact"},
        { field: "status"},
        { field: "orderTotal"}
    ])

    return (
        <div
            className='ag-theme-quartz-dark'
            style={{ 
                width: 1002,
                height: 330,
                margin: "0 auto"
            }}
        >
            <AgGridReact 
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={{
                    cellStyle: (params) => ({
                      display: "flex",
                      alignItems: "center"
                    })
                }}
                pagination={true}
                paginationPageSize={5}
                paginationPageSizeSelector={[5, 10, 25]}
            />
            
        </div>
    )
}