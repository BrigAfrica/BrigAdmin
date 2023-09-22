import { AddCircle, ArrowCircleLeft, ArrowDown2,ArrowRight2,ArrowUp2,Box, Home, Profile2User, ProfileTick, ReceiptText, Setting, ShoppingCart } from "iconsax-react"
import BrigLogoAlt from "./../../assets/logo/logoalt.svg"
import { NavLink, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import { ToggleContext } from "../../context/toggleContext"
import useViewPort from "../../helpers/useViewPort"


const features = [
  {
    icon: <Home color="#003937" variant="TwoTone"/>,
    title: "Dashboard",
    route: "dashboard"

  },

  {
    icon: <ShoppingCart color="#003937" variant="TwoTone"/>,
    title: "Order Management",
    route: "order-management"

  },
  {
    icon: <ReceiptText color="#003937" variant="TwoTone"/>,
    title: "Payments",
    route: "payments"

  },
  {
    icon: <Profile2User color="#003937" variant="TwoTone"/>,
    title: "Customers",
    route: "customers"

  },
  {
    icon: <Box color="#003937" size = "20" variant="TwoTone"/>,
    title: "Products",
    route: "products"


  }
]


const admin = [
  {
    icon : <ProfileTick color="#003937" variant="TwoTone"/>,
    title: "Manage Admin",
    route: "manage-admin"
  },

  {
    icon:  <Setting color="#003937" variant="TwoTone"/>,
    title: "Admin Roles",
    route: "admin-roles"
  }
]

const Sidebar = () => {
  const location = useLocation();
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const {isSidebarOpen,setIsSidebarOpen} = useContext(ToggleContext)

  const {width} = useViewPort()
  

  const handleClick = (e) => {
      e.stopPropagation();
      setDropDownOpen(prev => !prev)
  }
  return (
    <aside className={`flex  
                      left-0  
                      transition-transform 
                      transform 
                      flex-col min-h-full
                      bg-white 
                      divide-2 divide-y-2 
                      shadow-lg
                      shadow-light-green-100
                      ${width > 992 || isSidebarOpen ?
                      `translate-x-0 xs:max-lg:fixed 
                      xs:max-sm:right-1/2 
                      xs:max-lg:right-2/3
                      
                      z-9999`
                      : 
                      `-translate-x-full hidden`
                      }
                    `}
    >
      <div id="top" 
            className="h-24  flex 
                      justify-between 
                     
                      items-center pl-8 xs:max-lg:pl-5 pr-2"
      >
        <NavLink to  = "/" > 
        
        <img src={BrigLogoAlt} alt=""  className="xs:max-lg:h-10 xs:max-lg:order-2"/>
        </NavLink>
  
        <ArrowCircleLeft size="32" color="#8b909a"
          className="cursor-pointer xs:max-lg:order-1"
         onClick={() => setIsSidebarOpen(false)}/>
     
      </div>

      <div id="mid" className="mt-5">
            <small className="px-8 xs:max-lg:px-2">MAIN MENU</small>
            <ul>
                {
                  features.map((feature,idx) => (

                    <li key = {idx}
                      className={`flex gap-2 
                      px-4 py-2 
                      mx-4 my-2
                      text-[#003937B2]
                      ${location.pathname === `/admin/${feature.route}` ? 
                            "text-black bg-light-green-200"
                             : 
                              ""
                        }  
                      `}
                     >
                      <NavLink to = {`/admin/${feature.route}`} > 
                      <div className="flex gap-2 pr-2">
                        {feature.icon}
                        <p className="text-sm ">
                          {feature.title}
                        </p>

                      </div>
                        </NavLink>
                        {
                          feature.title === "Products" ? 
                            <div 
                                className="ml-auto 
                                            flex justify-center 
                                            items-center
                                            w-6 h-6 hover:bg-[#8B909A]/[0.1] 
                                            cursor-pointer
                                            rounded-full" 
                                          onClick={handleClick}>

                              {
                                dropDownOpen ? 
                                  <ArrowDown2 size="20" 
                                      color="#8B909A" 
                                      variant="TwoTone"
                                  />
          
                                :

                                  <ArrowRight2 size="18" 
                                        color="#8B909A" 
                                        className= "mt-1" 
                                        variant="TwoTone"
                                  />
                                
                              }
                            </div>: null
                            
                        }
                    </li>
                  
                    ))
                }

                  {/* dropdown to add new products */}
                {
                  dropDownOpen &&
                  <NavLink to = {`/admin/new-product`} > 
                    <li className={`flex 
                                    justify-end 
                                    gap-3
                                  text-[#003937B2]
                                    py-2
                                    text-base pr-5 
                                    items-center 
                                 ${location.pathname === `/admin/new-product` 
                                    ? "text-black bg-light-green-200" 
                                    : ""
                                    
                                  }`}>
                      <AddCircle className=" text-[#003937B2]" size={18}/>
                      <p className="text-sm">
                         Add New Products
                      </p>
                    </li>
                  </NavLink>
                }
            </ul>
            </div>



           
            <div id="end" className="pt-8">
              <small className="pl-8">ADMIN</small>
              <ul>
                {
                  admin.map((item,idx) => (
                    <NavLink to = {`/admin/${item.route}`} key = {idx} >
                      <li 
                          className="flex gap-2 
                                    px-4 py-2 mx-4 my-2
                                    text-[#003937B2]
                                    hover:text-black
                                     hover:bg-light-green-200
                                      "
                      >
                      
                        {item.icon}
                        <p className="text-sm cursor-pointer">
                          {item.title}
                        </p>
                      </li>

                    </NavLink>
                  ))
                }
              </ul>
            </div>

    </aside>
  )
}

export default Sidebar