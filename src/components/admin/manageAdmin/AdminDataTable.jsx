import dotsVertical from './../../../assets/icons/dotsVertical.svg'



export const userColumns = [
    { headerClassName: 'super-app-theme--header', field: "staffId", headerName: "STAFF ID", width: 150, },
    
    {   
        headerClassName: 'super-app-theme--header',
        field: 'staffName', 
        headerName : 'STAFF NAME', 
        width: 240,
        renderCell: (params) => {
            return (
                <small className = "text-base font-medium">
                 {params.row.staffName}
             </small>
            
            );
        },
    },
    
    {
        headerClassName: 'super-app-theme--header',
      field: "eMail",
      headerName: "E-MAIL",
      width: 300,
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

    {   
      headerClassName: 'super-app-theme--header',
      field: 'status', 
      headerName : 'STATUS', 
      width: 100,
      renderCell: (params) => {
          return (
            <div className="inline-flex 
                              px-2 py-1 
                              rounded-md 
                              gap-3 
                              items-center 
                              font-medium 
                              text-sm" 
                              style={{backgroundColor: 
                                `${params.row.status == `online`?
                                      `#C8F5B8` :
                                      `rgba(235, 110, 110, 0.49)`
                                  }`
                                }}>
                 {params.row.status}
            </div>
          
          );
        },
  },

        
  
  ];














  export const userRows = [
    {
      id:1,
      staffId: "1AJ",
      status: "online",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical


       
      

    },
    {
      id:2,
      staffId: "1AJ",
      status: "offline",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      

    },

    {
      id:3,
      staffId: "1AJ",
      status: "online",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      
    },

    {
      id:4,
      staffId: "1AJ",
      status: "online",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      
    },

    {
      id:5,
      staffId: "1AJ",
      status: "online",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      
    },


    {
      id:6,
      staffId: "1AJ",
      status: "online",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical
      
      
    },


    {
      id:7,
      staffId: "1AJ",
      status: "online",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      

    },


    {
      id:8,
      staffId: "1AJ",
      status: "offline",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical

      

    },


    {
      id:9,
      staffId: "1AJ",
      status: "online",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


    {
      id:10,
      staffId: "1AJ",
      status: "offline",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


    {
      id:11,
      staffId: "1AJ",
      status: "online",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },

    {
      id:12,
      staffId: "1AJ",
      status: "offline",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
      eMail:"akachukwujames45@gmail.com",
      action: dotsVertical
      

    },

    {
      id:13,
      staffId: "1AJ",
      status: "online",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


    {
      id:14,
      staffId: "1AJ",
      status: "online",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },

    {
      id:15,
      staffId: "1AJ",
      status: "offline",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },

    {
      id:16,
      staffId: "1AJ",
      status: "online",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


    {
      id:17,
      staffId: "1AJ",
      status: "online",
      eMail: "akachukwujames45@gmail.com",
        createdDate: "19/06/2023",
      staffName: "Akachukwu James",
      phoneNumber: "ID45r4356",
        action: dotsVertical

    },


  ];