import  React,{useRef} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './orderDataSource';
import ViewDownloadModal from './ViewDownloadModal';



function OrderManagementTable() {
  const optionsRef = useRef(null);
  const [optionsOpen,setOptionsOpen] = React.useState(false)
  const [boxId, setBoxId] = React.useState(0)

    
  const handleOpen = (id) => {
    setBoxId(id)
    setOptionsOpen((prev) => !prev)
    console.log(optionsOpen)
  }

   
const actionColumn = [
    {   
      field: 'action', 
      headerName : 'ACTION', 
      width: 70,
      renderCell: (params) => {
          return (
              <div className="inline-flex px-2 
                              py-1 rounded-md 
                            gap-3 items-center font-medium 
                            
                            text-base"  ref={optionsRef}>
                              <button onClick={() => handleOpen(params.row.id)}>

                                    <img src= {params.row.action} />
                              </button>
                 {

                  params.row.id === boxId  && optionsOpen && <ViewDownloadModal/>
                 } 
              </div>
          
          );
        },
  }
]
  return (
    <div style={{ height: "100%", width: '100%', backgroundColor:"#fff"}}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        
        
      />
    </div>
  );
}


export default OrderManagementTable