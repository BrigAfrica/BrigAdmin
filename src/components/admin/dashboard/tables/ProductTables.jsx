import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import iPhone13 from "./../../../../assets/icons/iPhone13.svg"
import appleMac from "./../../../../assets/icons/appleMac.svg"
import appleWatchSeries from "./../../../../assets/icons/appleWatchSeries.svg"


function createData(
    image, 
    product,
     totalOrder, 
     status,
      price
) {
  return { image,product, totalOrder, status, price };
}

const rows = [
  createData(iPhone13, "Apple iPhone 13", "001",false,"N200.00"),
  createData(appleMac, "Apple Mac i5", "002",true,"N800.00"),
  createData(appleWatchSeries, "Apple Watch Series 7", "003",true,"N125.00"),
  createData(appleMac, "Apple Mac i5", "004",true,"N1000.00"),
  createData(appleMac, "Apple Mac i5", "005",true,"N1000.00"),
  createData(iPhone13, "Apple iPhone 13", "006",false,"N750.00"),

];

const ProductTables = () => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead  sx = {{backgroundColor: "#f8f9fa"}}>
        <TableRow>
          <TableCell  sx = {{paddingY:2}}>
                <h3 className="extrabold">PRODUCT</h3>
            </TableCell>
          <TableCell align="left">
            <h3 className="extra-bold text-[#8B909A]">TOTAL ORDER</h3>
            </TableCell>
          <TableCell align="left">
          <h3 className="extra-bold text-[#8B909A]">STATUS</h3>
          </TableCell>
          <TableCell align="left">
          <h3 className="extra-bold text-[#8B909A]">PRICE</h3>
          </TableCell>
    
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,idx) => (
          <TableRow
            key={idx}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
                <div className='flex gap-2'>
                    <img src= {row.image} alt="" />
                    <h3 className='font-extrabold'>Apple iPhone 13</h3>
                </div>
            </TableCell>
            <TableCell align="left" sx = {{paddingY:2}}>
                <h3 className='font-extrabold'>{row.product}</h3>
            </TableCell>
            <TableCell align="left" >
                <div className={`inline rounded-md w-auto px-2 py-1 border ${row.status ? 'border-[#FF7070] bg-[#FFC3C3]' : 'border-[#97FD95] bg-[#E1FFE0]'} `}>
                   {row.status ? "In stock" : "Out of Stock"}
                </div>
            </TableCell>
            <TableCell align="left">
                <h3 className='font-extrabold'>{row.price}</h3>
            </TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ProductTables