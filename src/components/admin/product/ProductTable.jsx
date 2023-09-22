import  {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';

import ViewDownloadModal from './../orderManagement/ViewDownloadModal';
import { productColumns, productRows } from './ProductDataSource';

const ProductTable = () => {

const [optionsOpen, setOptionsOpen] = useState(false)
const [boxId, setBoxId] = useState(0)

const handleOpen = (id) => {
 
  setOptionsOpen(true)
  setBoxId(id)
  
}

const handleClose = () => {
  setOptionsOpen(false)
}

useEffect(() => {

  const handleClickOutside = (e) => {
    if(e.target == e.target.closest(".option-overlay")){
        handleClose();
    }
  }
  document.addEventListener("click",handleClickOutside)


  return () => {
    document.removeEventListener("click", handleClickOutside)
  }

},[])

  const actionColumn = [
    {   
      field: 'action', 
      headerName : 'ACTION', 
      width: 100,
      renderCell: (params) => {
          return (


            <div className='relative'> 
              <div className="inline-flex w-20 
              border border-green-500
                               rounded-md   
                            gap-3 items-center font-medium 
                            text-base options-box" >
                              <button className='border border-red-500 w-full' onClick={(e) => 
                                {
                                  console.log(e.target)
                                  handleOpen(params.row.id)
                                }
                              }>

                                    <img src= {params.row.action} className='m-auto'/>
                              </button>
                              </div>
                  {

                   boxId == params.row.id && optionsOpen && <ViewDownloadModal/> 
                   } 

            </div>
          
          );
        },
  }
]
  return (
    <div style={{ height: "100%", width: '100%', backgroundColor:"#fff" }} className='mt-6'>
      <DataGrid
        rows={productRows}
        columns={productColumns.concat(actionColumn)}
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

export default ProductTable