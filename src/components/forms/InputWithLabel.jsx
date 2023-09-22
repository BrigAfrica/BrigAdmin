/* eslint-disable react/prop-types */
const InputWithLabel = ({
  label,
  inputType,
  inputName,
  placeholder,
  width,
  required,
}) => {
  return (
    <div className="mt-8">
      <label className="text-black text-opacity-50">{label}</label>
      <div className="mt-2">
        <input
          type={inputType}
          name={inputName}
          className={`px-6 py-3.5 focus:outline-none focus:text-gray-900 bg-[#F3F5F6] placeholder:text-base rounded-md ${
            width ? width : `w-full`
          }`}
          placeholder={placeholder}
          required={required ? required : null}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
