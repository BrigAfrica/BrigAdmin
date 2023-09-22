import FormButton from "../../components/forms/FormButton"
import InputField from "../../components/forms/InputField"
import BrigLogoAlt from "./../../assets/logo/logoalt.svg";
import BrigLogo from "./../../assets/logo/logo.svg";


const NewPassword = () => {
  return (
    <div className = "flex h-[1020px]">
        <div id="left " className = "flex-[3_3_0%] flex justify-between mt-40 items-center flex-col h-100  relative">

            <div className=" w-116 shadow-2xl rounded-xl px-12 py-14 z-9999 bg-white">
                  <div className="">
                    <div className="form_title">
                        <h3 className="">Reset Your Password</h3>
                        <p className = "leading-6 font-normal text-xs">
                            Password should include 6-10 characters and must contain an uppercase and a special character
                        </p>
                    </div>

                    <div className = "mb-6 mt-10">
                       <h3 className= "form_label">New password</h3>
                       <InputField 
                        type = "password"
                        value = ""
                        rounded = "rounded-md"
                        name = "email"
                        placeholder= ""
                        disabled={false}
                        required={true}
                        onChange={() => {}}
                        />
                        
                    </div>

                    <div>
                       <h3 className= "form_label">Re-enter New password</h3>
                       <InputField 
                        type = "password"
                        value = ""
                        rounded = "rounded-md"
                        name = "email"
                        placeholder= ""
                        disabled={false}
                        required={true}
                        onChange={() => {}}
                        />
                        
                    </div>

                    <div className = "mt-5">
                        <FormButton
                            text= "Continue"
                            rounded = "rounded-md"
                            type = "submit"
                            onClick={() => {}}
                        />
                    </div>

                    <div className = "flex gap-1 items-center mt-6">
                        <h4 className = "text-light-green-100 font-semibold text-sm">Back to Login</h4>
                    </div>


                  </div>
            </div>

            <div id="textBox" className="flex items-center gap-1 absolute bottom-10 left-20">
                <p className="text-xs font-normal relative top-0.5 ">Powered by </p>
                <img src={BrigLogoAlt} alt="logo"     
                className="w-[43px] h-[25px]"/>
            </div>
        </div>



        <div id="right " 
            className = {`flex-[2_2_0%] 
            bg-sideGradient
            bg-cover bg-no-repeat flex flex-col      
            justify-between pt-16 pb-11 pl-10 text-white`}> 

                <div id="top">
                    <img src={BrigLogo} alt="" />
                </div>
                <div id="mid">
                    <h3 className = "leading-10 font-extrabold text-2xl mr-40">
                        Powering the process of end-to-end satisfaction between vendors and customers
                    </h3>
                </div>
                <div id="bottom">
                    <p className = "font-light leading-5 text-sm mb-2">Having issues?</p>

                    <h3 className="text-light-green-100 font-extrabold text-sm">
                        Contact Support
                     </h3>
                </div>

        </div>
    </div>
  )
}

export default NewPassword