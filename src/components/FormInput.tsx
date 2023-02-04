import { ChangeHandler } from 'react-hook-form'

export interface FormInputType {
  label: string
  type: string
  name: string
  id: string
  placeholder: string
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
        className=" font-medium text-[#000000] text-base leading-[21px]"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className=" border border-[#BCBCBC] rounded-[4px]"
        placeholder={props.placeholder}
        onChange={props.register.onChange}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
      />
    </div>
  )
}

export default FormInput
