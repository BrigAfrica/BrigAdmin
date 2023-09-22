/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 

const Selectdropdown = ({
placeholder,
inputName,
inputType,
options, 
value,
width,
height,
bgColor,
border,
onChange,
disabled,
error,
required
}) => {
  return (
       <div className={` rounded-md h-12 
                        ${width ? width :"sm:w-44 lg:w-64" }
                        ${height ? height : "" }
                        ${border}
                        ${bgColor ? bgColor : "bg-white"}
                         py-2 px-3  shadow-md 
                         text-[#003937B2] `}>

                <select 
                    value={value}
                    name={inputName} 
                    id="" 
                    disabled={disabled}
                    required={required}
                    onChange={onChange}
                    placeholder={placeholder}
                    // defaultValue= {placeholder}
                    className= {`w-full
                    h-full 
                    outline-none 
                    bg-inherit`}
                  >
                {
                    options?.map((option,index) => (

                        <option key = {index} value= {option} className='bg-[#EEF9F9] selection:bg-red-500'>{option}</option>
                  ))
                }
                </select>

        </div>
  )
}

export default Selectdropdown