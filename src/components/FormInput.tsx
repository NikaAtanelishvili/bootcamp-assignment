import { ChangeHandler } from 'react-hook-form'

export interface FormInputType {
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

const FormInput: React.FC<FormInputType> = props => {
  return (
    <div className="flex flex-col">
      <label
        className=" font-medium text-[#1A1A1A] text-base leading-[21px] mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className={` pl-4 border border-[#BCBCBC] rounded bg-[#FFFFFF] placeholder-[#00000099] font-normal text-base leading-[21px] ${
          (props.styleType === 'normal' && ' w-[371px] h-12') ||
          (props.styleType === 'long' && ' w-full h-12') ||
          (props.styleType === 'large' && 'w-full h-[103px]')
        }`}
        placeholder={props.placeholder}
        onChange={props.register.onChange}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
      />
    </div>
  )
}

export default FormInput
