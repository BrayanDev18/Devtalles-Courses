interface ButtonProps {
  to?: string;
  label: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    label,
    to,
    icon,
    textColor,
    fullWidth,
    borderColor,
    backgroundColor,
  } = props

  return (
    <button
      className={`flex justify-center items-center gap-2 px-5 py-3 border text-[17px] leading-none
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-[#FF6500] text-white border-[#FF6500]"
        } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {icon && (
        <img
          src={icon}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  )
}