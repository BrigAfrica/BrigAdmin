import { ArrowDown2 } from 'iconsax-react';
import dotsVertical from './../../../assets/icons/dotsVertical.svg'

export const productColumns = [
    { field: "productId", headerName: "PRODUCT ID", width: 100 },
    
    {   
        field: 'productName', 
        headerName : 'PRODUCT NAME', 
        width: 140,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.productName}
             </small>
            
            );
          },
    },

    {   
        field: 'brand', 
        headerName : 'BRAND', 
        width: 150,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.brand}
             </small>
            
            );
          },
    },

    {   
        field: 'stockStatus', 
        headerName : 'STOCK STATUS', 
        width: 150,
        renderCell: (params) => {
            return (
                <div className="inline-flex px-2 py-1 rounded-md gap-3 
                             items-center font-medium 
                        text-base" 
                        style={{backgroundColor: params.row.stockStatusColor}}
                >
                    {params.row.stockStatus}
                    
                </div>
            
            );
          },
    },
    {   
        field: 'unitPrice', 
        headerName : 'UNIT PRICE', 
        width: 150,
        renderCell: (params) => {
            return (
                
                <small className = "text-base font-medium">
                     {params.row.unitPrice}
                 </small>
           
            );
          },
    },


    {   
        field: 'discount', 
        headerName : 'DISCOUNT', 
        width: 150,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.discount}
             </small>
            
            );
          },
    },

    {   
        field: 'totalValue', 
        headerName : 'TOTAL VALUE', 
        width: 150,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.totalValue}
             </small>
            
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














export const productRows = [
    {
      id:1,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },
    {
      id:2,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
    stockStatus: "Swap",
    stockStatusColor:"#FFF2B1",
        amount: "N350,000",
        paymentType: "Full pay",
        paymentColor : "#D6FAFF",
        status: "unpublished",
        statusColor:"#E7CBA9",
        action: dotsVertical

    },

    {
      id:3,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",   
        stockStatus: "Buy",
        stockStatusColor:"#FE4E1",
        amount: "N350,000",
        paymentType: "Full Pay",
        paymentColor : "#D6FAFF",
        status: "unpublished",
        statusColor:"#D4F5DD",
        action: dotsVertical

    },

    {
      id:4,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000", 
        stockStatus: "Buy",
        stockStatusColor:"#FE4E1",
        amount: "N350,000",
        paymentType: "None",
        paymentColor : "#FFC3C3",
        status: "Confirmed",
        statusColor:"#F6EEFF",
        action: dotsVertical

    },

    {
      id:5,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",  
        stockStatus: "Buy",
      stockStatusColor:"#FE4E1",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "Processing",
        statusColor:"#FFF2B1",
        action: dotsVertical

    },


    {
      id:6,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",  
        stockStatus: "Buy",
      stockStatusColor:"#FE4E1",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "unpublished",
        statusColor:"#D4F5DD",
        action: dotsVertical

    },


    {
      id:7,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
    stockStatus: "Sell",
    stockStatusColor:"#D0FECF",
        amount: "N350,000",
        paymentType: "Full Pay",
        paymentColor : "#D6FAFF",
        status: "Error",
        statusColor:"#FFC3C3",
        action: dotsVertical

    },


    {
      id:8,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Sell",
        stockStatusColor:"#D0FECF",
        amount: "N350,000",
        paymentType: "Full Pay",
        paymentColor : "#D6FAFF",
        status: "Error",
        statusColor:"#FFC3C3",
        action: dotsVertical

    },


    {
      id:9,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


    {
      id:10,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


    {
      id:11,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },

    {
      id:12,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
    stockStatusce: "Sell",
tockStatusiceColor:"#D0FECF",
        amount: "N350,000",
        paymentType: "Full Pay",
        paymentColor : "#D6FAFF",
        status: "Error",
        statusColor:"#FFC3C3",
        action: dotsVertical

    },

    {
      id:13,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


    {
      id:14,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },

    {
      id:15,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },

    {
      id:16,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


    {
      id:17,
      productId: "1AJ",
      productName: "iPhone 11",
      brand: "Apple",
        unitPrice:"N350,000",
        discount:"50%",
        totalValue: "N50,000",
        stockStatus: "Repair",
      stockStatusColor:"#DEE1FF",
        amount: "N350,000",
        paymentType: "3rd Party",
        paymentColor : "#FFFFE0",
        status: "published",
        statusColor:"#EAEAEA",
        action: dotsVertical

    },


  ];