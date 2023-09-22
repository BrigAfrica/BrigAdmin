export const PrimaryButton = ({
  btnText,
  width,
  bgColor,
  textColor,
  border,
  borderColor,
  onClick,
}) => {
  return (
    <button
      className={`${bgColor} px-8 py-3 ${textColor} ${border} ${borderColor} rounded disabled:opacity-50 ${
        width && `${width} m-auto`
      }`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};
export const PrimaryButtonWithIcon = ({
  btnText,
  width,
  icon,
  bgColor,
  textColor,
  onClick,
}) => {
  return (
    <button
      className={`${bgColor} myShadow border border-brand-color md:px-8 md:py-3 flex items-center gap-2 ${textColor} rounded disabled:opacity-50 ${
        width && width
      }`}
      onClick={onClick}
    >
      <div>
        <img src={icon} alt="Filter Icon" />
      </div>
      <span>{btnText}</span>
    </button>
  );
};
export const PrimaryButtonActive = ({
  btnText,
  width,
  border,
  isActive,
  activeBgColor,
  activeTextColor,
  inactiveBgColor,
  inactiveTextColor,
  onClick,
}) => {
  const buttonClasses = `px-8 py-3 rounded disabled:opacity-50 ${
    width && `${width} m-auto`
  } ${border} ${isActive ? activeBgColor : inactiveBgColor} ${isActive ? activeTextColor : inactiveTextColor}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

