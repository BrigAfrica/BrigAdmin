// import { ArrowDown2 } from 'iconsax-react';
import dotsVertical from './../../../assets/icons/dotsVertical.svg'



export const userColumns = [
    { headerClassName: 'super-app-theme--header', field: "customerId", headerName: "customer ID", width: 150, },
    
    {   
        headerClassName: 'super-app-theme--header',
        field: 'customerName', 
        headerName : 'Customer NAME', 
        width: 300,
        renderCell: (params) => {
            return (
                <small className = "text-base font-medium">
                 {params.row.customerName}
             </small>
            
            );
        },
    },
    
    {
        headerClassName: 'super-app-theme--header',
      field: "eMail",
      headerName: "E-MAIL",
      width: 400,
      renderCell: (params) => {
        return (
         <small className = "text-base font-medium">
             {params.row.eMail}
         </small>
        
        );
      },
    },
    {   
        headerClassName: 'super-app-theme--header',
        field: 'phoneNumber', 
        headerName : 'PHONE NUMBER', 
        width: 150,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.phoneNumber}
             </small>
            
            );
          },
    },

    {   
        headerClassName: 'super-app-theme--header',
        field: 'createdDate', 
        headerName : 'CREATED DATE', 
        width: 150,
        renderCell: (params) => {
            return (
             <small className = "text-base font-medium">
                 {params.row.createdDate}
             </small>
            
            );
          },
    },

        
  
  ];














  export const userRows = [
    {
      id:1,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical


       
      

    },
    {
      id:2,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      

    },

    {
      id:3,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      
    },

    {
      id:4,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      
    },

    {
      id:5,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      
    },


    {
      id:6,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical
      
      
    },


    {
      id:7,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      

    },


    {
      id:8,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      

    },


    {
      id:9,
      customerId: "1AJ",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


    {
      id:10,
      customerId: "1AJ",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


    {
      id:11,
      customerId: "1AJ",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },

    {
      id:12,
      customerId: "1AJ",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical
      

    },

    {
      id:13,
      customerId: "1AJ",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


    {
      id:14,
      customerId: "1AJ",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },

    {
      id:15,
      customerId: "1AJ",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },

    {
      id:16,
      customerId: "1AJ",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


    {
      id:17,
      customerId: "1AJ",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      customerName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


  ];