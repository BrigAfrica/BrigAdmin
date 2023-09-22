import { ArrowDown2 } from 'iconsax-react';
import dotsVertical from './../../../assets/icons/dotsVertical.svg'




export const userColumns = [
    { field: "orderId", headerName: "ORDER ID", width: 100 },
    {
      field: "orderDate",
      headerName: "ORDER DATE",
      width: 120,
      renderCell: (params) => {
        return (
         <small className = "text-base font-medium">
             {params.row.orderDate}
         </small>
        
        );
      },
    },
  
    {   
        field: 'customerName', 
        headerName : 'Customer Name', 
        width: 140,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.customerName}
             </small>
            
            );
          },
    },

    {   
        field: 'product', 
        headerName : 'PRODUCT', 
        width: 150,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.product}
             </small>
            
            );
          },
    },

    {   
        field: 'service', 
        headerName : 'Service', 
        width: 150,
        renderCell: (params) => {
            return (
                
                <div className="inline-flex px-2 py-1 
                          rounded-md gap-3 
                      items-center font-medium 
                        text-base" style={{backgroundColor: params.row.serviceColor}}>
                    {params.row.service}
                    <ArrowDown2 size="10" color="#3f4a5b"/>
                </div>
            
            );
          },
    },


    {   
        field: 'amount', 
        headerName : 'AMOUNT', 
        width: 150,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.amount}
             </small>
            
            );
          },
    },

    {   
        field: 'paymentType', 
        headerName : 'PAYMENT TYPE', 
        width: 150,
        renderCell: (params) => {
            return (
                <div className="inline-flex px-2 py-1 rounded-md gap-3 items-center font-medium text-base" style={{backgroundColor: params.row.paymentColor}}>
                    {params.row.paymentType}
                    <ArrowDown2 size="10" color="#3f4a5b"/>
            </div>
            
            );
          },
    },


    {   
        field: 'status', 
        headerName : 'STATUS', 
        width: 170,
        renderCell: (params) => {
            return (
                <div className="inline-flex px-2 py-1 rounded-md gap-3 items-center font-medium text-base" style={{backgroundColor: params.row.statusColor}}>
                    {params.row.status}
                    <ArrowDown2 size="10" color="#3f4a5b"/>
            </div>
            
            );
          },
    },

    
  
  ];














  export const userRows = [
    {
      id:1,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },
    {
      id:2,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Swap",
      serviceColor:"#FFF2B1",
        amount: "N350,000",
        paymentType: "Full pay",
        paymentColor : "#D6FAFF",
        status: "Shipped",
        statusColor:"#E7CBA9",
        action: dotsVertical

    },

    {
      id:3,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Buy",
      serviceColor:"#FFE4E1",
        amount: "N350,000",
        paymentType: "Full Pay",
        paymentColor : "#D6FAFF",
        status: "Delivered",
        statusColor:"#D4F5DD",
        action: dotsVertical

    },

    {
      id:4,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Buy",
      serviceColor:"#FFE4E1",
        amount: "N350,000",
        paymentType: "None",
        paymentColor : "#FFC3C3",
        status: "Confirmed",
        statusColor:"#F6EEFF",
        action: dotsVertical

    },

    {
      id:5,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Buy",
      serviceColor:"#FFE4E1",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Processing",
        statusColor:"#FFF2B1",
        action: dotsVertical

    },


    {
      id:6,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Buy",
      serviceColor:"#FFE4E1",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Delivered",
        statusColor:"#D4F5DD",
        action: dotsVertical

    },


    {
      id:7,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Sell",
      serviceColor:"#D0FECF",
        amount: "N350,000",
        paymentType: "Full Pay",
        paymentColor : "#D6FAFF",
        status: "Error",
        statusColor:"#FFC3C3",
        action: dotsVertical

    },


    {
      id:8,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Sell",
      serviceColor:"#D0FECF",
        amount: "N350,000",
        paymentType: "Full Pay",
        paymentColor : "#D6FAFF",
        status: "Error",
        statusColor:"#FFC3C3",
        action: dotsVertical

    },


    {
      id:9,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


    {
      id:10,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


    {
      id:11,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },

    {
      id:12,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Sell",
      serviceColor:"#D0FECF",
        amount: "N350,000",
        paymentType: "Full Pay",
        paymentColor : "#D6FAFF",
        status: "Error",
        statusColor:"#FFC3C3",
        action: dotsVertical

    },

    {
      id:13,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


    {
      id:14,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },

    {
      id:15,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },

    {
      id:16,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


    {
      id:17,
      orderId: "1AJ",
      orderDate: "19/06/2023",
      customerName: "Akachukwu James",
      product: "iPhone 11",
      service: "Repair",
      serviceColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Cancelled",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


  ];