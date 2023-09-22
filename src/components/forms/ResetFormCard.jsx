/* eslint-disable no-unused-vars */
import {useState} from "react"
import FormButton from "./FormButton"
import InputField from "./InputField"
import { NavLink } from "react-router-dom"

const ResetForm = () => {

    const [user, setUser] = useState({
        email:'',
        password: ""
    })
  return (
    <div className=" w-120 shadow-xl rounded-md px-12 py-14 z-9999 bg-white">


        <div id="title" className="form_title">
            <h3>Reset Your Password</h3>
            <p className = "text-[14px] font-normal my-2 leading-6">
                Don’t worry it happens to the best of us. <br />
                Enter your email and we’ll send a link to reset your password.
            </p>
        </div>

        <div className = "my-4">
             <h3 className= "form_label">Email Address</h3>
                <InputField
                    type = "email"
                    value = {user.email}
                    rounded = "rounded-md"
                    name = "email"
                    placeholder= "francis.enebeli@mail.com"
                    disabled={false}
                    required={true}
                    onChange={() => {}}
                />
                        
         </div>

         <div>
                <FormButton
                    text= "Reset Password"
                    rounded = "rounded-md"
                    type = "submit"
                    onClick={() => {}}
                />
        </div>

        <div>
            <NavLink to = "/admin/login">

            <h3 className = "text-light-green-100 font-bold mt-6 text-xs">Back to login</h3>
            </NavLink>
        </div>

    </div>
  )
}

export default ResetForm