import AuthBackdrop from "../../components/admin/AuthBackdrop"
import LoginForm from "../../components/forms/LoginFormCard"


const Login = () => {
  return (
        <>
            <AuthBackdrop/>

            <div className=" m-auto absolute top-[40%] left-1/2 
            -translate-x-1/2 ">
                <LoginForm/>

            </div>
        </>
  )
}

export default Login