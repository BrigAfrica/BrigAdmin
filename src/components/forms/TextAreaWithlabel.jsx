/* eslint-disable react/prop-types */
const TextAreaWithLabel = ({ label, inputName, placeholder }) => {
  return (
    <div className="mt-8 flex flex-col">
      <label className="text-black text-opacity-50">{label}</label>
      <textarea
        name={inputName}
        cols="30"
        rows="5"
        placeholder={placeholder}
        className="px-8 py-6 mt-2 focus:outline-none focus:text-gray-900 bg-[#F3F5F6] placeholder:text-base rounded-2xl"
      ></textarea>
    </div>
  );
};

export default TextAreaWithLabel;
