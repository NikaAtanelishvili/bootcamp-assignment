import { ChangeHandler } from 'react-hook-form'

export interface InputProps {
  label: string
  type: string
  name: string
  id: string
  placeholder: string
  styleType: string
  register: {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    ref: React.Ref<HTMLInputElement>
  }
}

const Input: React.FC<InputProps> = props => {
  return (
    <div className="flex flex-col">
      <label
        className=" font-Helvetica font-medium text-[#000000] text-base leading-[21px] mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>

      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className={` font-Helvetica px-4 border border-[#BCBCBC] h-12 rounded bg-[#FFFFFF] placeholder-[#00000099] font-normal text-base leading-[21px] ${
          (props.styleType === 'normal' && ' w-full') ||
          (props.styleType === 'long' && ' w-full ')
        }`}
        placeholder={props.placeholder}
        onChange={props.register.onChange}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
      />
    </div>
  )
}

export default Input
