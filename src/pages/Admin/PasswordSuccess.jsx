import FormButton from "../../components/forms/FormButton";
import BrigLogo from "./../../assets/logo/logo.svg";


const PasswordSuccess = () => {
  return (
    <div className = "flex flex-col justify-between items-center w-full h-screen">
        <div id="top" className = "bg-primary h-36 w-full flex justify-center">
                <img src={BrigLogo} alt="" />
        </div>
        <div id="mid" className="text-center">
            <h3 className="form_title">Your password has been reset successfully! </h3>
            <p className = "leading-6 font-normal text-xs my-6">You now have access to your account, kindly login with your details to continue.
            </p>

            <FormButton
                text= "Login to your account"
                rounded = "rounded-md"
                type = "submit"
                width= "w-50"
                height="h-12"
                onClick={() => {}}
            />
        </div>
        <div id="bottom" className="text-center">
            <p className = "font-light leading-5 text-sm mb-2">Having issues?</p>

            <h3 className="text-light-green-100 font-extrabold text-sm">
                Contact Support
            </h3>
        </div>

    </div>
  )
}

export default PasswordSuccess