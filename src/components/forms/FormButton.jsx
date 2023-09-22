/* eslint-disable react/prop-types */
const FormButton = ({
    text,
    rounded,
    bgColor,
    type,
    onClick,
    width,
    height

}) => {
  return (
    <button type = {type}
        className = {`${bgColor ? bgColor : "bg-light-green-100" }
                  ${width ? width : "w-full"}
                  ${height ? height :"h-12"}
                  text-gray-50  
                  ${rounded} py-4 lg:px-20 xs:max-md:px-4 text-sm font-semibold`}
        onClick = {onClick}
        >
        <h3 className= "xs:max-md:text-sm  w-full">{text}</h3>
    </button>
  )
}

export default FormButton