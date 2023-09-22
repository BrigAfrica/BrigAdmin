 import { userColumns, userRows } from './AdminDataTable'
import { DataGrid } from '@mui/x-data-grid'

const AdminTable = () => {

    const actionColumn = [
        {   
          field: 'action', 
          headerClassName: "super-app-theme--header",
          headerName : 'ACTION', 
          width: 100,
          renderCell: (params) => {
              return (
                  <div className="inline-flex px-2 
                                  py-1 rounded-md 
                                gap-3 items-center font-medium 
                                
                                text-base">
                                  <button onClick={() => {}}>
    
                                        <img src= {params.row.action} />
                                  </button>
                     {
    
                    //   params.row.id === boxId  && optionsOpen && <ViewDownloadModal/>
                     } 
                  </div>
              
              );
            },
      }
    ]

  return (
    <div>
        <div style={{ height: "100%", width: '100%', backgroundColor:"#fff" }}>
            <DataGrid
            sx={{

                '& .super-app-theme--header': {
                    borderBottom:" 1px solid #CFF0EF",
                    background: "rgba(15, 177, 170, 0.07)"
                },
            }
            }
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[10]}
            
            />
        <div>
    </div>
</div>
</div>

)}


export default AdminTable