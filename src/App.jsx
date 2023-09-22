import { Routes, Route } from "react-router-dom";
import Login from "./pages/Admin/Login";
import EmailSent from "./pages/Admin/EmailSent";
import NewPassword from "./pages/Admin/NewPassword";
import PasswordReset from "./pages/Admin/PasswordReset";
import PasswordSuccess from "./pages/Admin/PasswordSuccess";
import Dashboard from "./pages/Admin/Dashboard";
import OrderManagement from "./pages/Admin/OrderManagement";
import Payment from "./pages/Admin/Payment";
import Customer from "./pages/Admin/Customer";
import Product from "./pages/Admin/Product"
import CustomerOverview from "./pages/Admin/CustomerOverview";
import NewProduct from "./pages/Admin/NewProduct"
import ManageAdmin from "./pages/Admin/ManageAdmin"
import AdminRoles from "./pages/Admin/AdminRoles"


function App() {
  return (
    <div className=""> 
      <Routes>
        <Route path="/admin/login" element={<Login/>} />
        <Route path="/admin/password-reset" element={<PasswordReset/>} />
        <Route path="/admin/new-password" element={<NewPassword/>} />
        <Route path="/admin/email-sent" element={<EmailSent/>} />
        <Route path="/admin/password-success" element={<PasswordSuccess/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/order-management" element={<OrderManagement/>} />
        <Route path="/admin/payments" element={<Payment/>} />
        <Route path="/admin/customers" element={<Customer/>} />
        <Route path="/admin/customer-overview" element={<CustomerOverview/>} />
        <Route path="/admin/products" element={<Product/>} />
        <Route path="/admin/new-product" element={<NewProduct/>} />
        <Route path="/admin/manage-admin" element={<ManageAdmin/>} />
        <Route path="/admin/admin-roles" element={<AdminRoles/>} />


        
      </Routes> 
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;
