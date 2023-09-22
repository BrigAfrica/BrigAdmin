/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom"
import Checkbox from "./Checkbox"
import FormButton from "./FormButton"
import InputField from "./InputField"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux'
import { brigAdminApi } from "../../redux/admin/axios"
import { setToken } from "../../redux/admin/auth/authSlice"


const LoginForm = () => {
    // const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {token, user}= useSelector((state) => state.adminAuth)
    const { register,handleSubmit,formState: { errors },} = useForm();

    const onSubmit = async(data) => {
        try{
            const res = await brigAdminApi.post('/auth/login',data)
            const {token, ...usersData} = res.data
            console.log(res.data)

            dispatch(setToken(token))
            // dispatch(setUsers(usersData))
          
            
        }catch(e){
            console.log(e.message)
        }
     }

return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="xs:max-md:w-80
                        lg:w-116 
                        shadow-xl 
                        rounded-md 
                        px-12 py-14 
                        z-9999
                        bg-white"
        >
            <div className="">
                <div id="title" 
                        className="form_title 
                                    mb-10"
                    >
                    <h3>Enter your log in details to continue.</h3>
                </div>

                <div>
                    <h3 className= "form_label">Email Address</h3>
                    <InputField 
                    {...register('email')}
                    type = "email"
                    inputName= "email"
                    rounded = "rounded-md"
                    name = "email"
                    placeholder= ""
                    disabled={false}
                    required={true}
                    // onChange={(e) => {setUser({...user, email:e.target.value})}}
                    />
                        
                </div>

                <div>
                    <div id="label" className = "form_label flex justify-between mt-3">
                        <h4>password</h4>

                        <NavLink to= "/admin/password-reset">
                            <h4 className = "text-light-green-100 hover:underline cursor-pointer">Reset my password </h4>
                        </NavLink>
                        
                        
                    </div>

                    <InputField
                            {...register('password')}
                        type = "password"
                        inputName= "password"
                        placeholder = ""
                        rounded = "rounded-md"
                        disabled={false}
                        required = {true}
                        // onChange={(e) => {setUser({...user, password:e.target.value})}}
                        
                    />

                </div>


                <div className = "w-full mb-3">
                    <Checkbox
                        labelTitle= "Remember me on this device"
                        rounded = "rounded-md"
                        onChecked = {() => {}}  
                        bgColor= "bg-primary"
                    />
                </div>

                <div>
                    <FormButton
                        text= "Sign In"
                        rounded = "rounded-md"
                        type = "submit"  
                    />

                    {loading ? <h1> loading </h1> : <h1> </h1>}
                </div>

                <div className = "flex gap-1 items-center mt-6">
                    <h4 className = "text-sm">Don&apos;t have an account?</h4>
                    <h4 className = "text-light-green-100 font-semibold text-sm xs:max-md">
                        <NavLink to= "/admin/login">Sign Up</NavLink></h4>
                </div>


            </div>
        </div>

    </form>
  )
}

export default LoginForm