/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Checkbox = ({
    labelTitle,
    rounded,
    bgColor}) => {
  return (
    
    <div className="flex items-center">
        <input  
                id="bordered-checkbox-2" 
                type="checkbox" 
                value="" 
                name="bordered-checkbox" 
                className={`
          
                    relative peer shrink-0
                    appearance-none w-4 h-4 border-2 border-light-green-100 rounded-sm bg-white
                    mt-1 checked:bg-light-green-100 
                    checked:border-0
                    text-white`
                  }
                
        />
        <label htmlFor="bordered-checkbox-2" 
                className="w-full 
                        py-4 
                        ml-2 
                        text-sm 
                        font-medium 
                        text-gray-900
                        dark:text-gray-300"
                    >
                        {labelTitle}
        </label>
        <svg
          className="
            absolute 
            text-white
            w-4 h-4 mt-1
            hidden peer-checked:block
            pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
  )
}

export default Checkbox