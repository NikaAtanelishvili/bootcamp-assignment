import { ChangeHandler } from 'react-hook-form'
import { CheckIcon, ErrorIcon } from './svgs'

export interface InputProps {
  label: string
  type: string
  name: string
  errors: any
  isSubmitted: boolean
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
        className={` font-Helvetica font-medium text-[#000000] text-base leading-[21px] mb-2 ${
          props.errors && props.isSubmitted && 'text-[#E52F2F]'
        }`}
        htmlFor={props.name}
      >
        {props.label}
      </label>

      <div className="flex flex-row items-center w-full relative">
        <input
          id={props.name}
          type={props.type}
          name={props.name}
          className={` font-Helvetica px-4 border border-[#BCBCBC] focus:outline-none ${
            !props.errors &&
            !props.isSubmitted &&
            'focus:outline-none focus:border-2'
          } ${
            props.errors && props.isSubmitted && 'border-[#EF5050]'
          } h-12 rounded bg-[#FFFFFF] placeholder-[#00000099] font-normal text-base leading-[21px] ${
            (props.styleType === 'normal' && ' w-full') ||
            (props.styleType === 'long' && ' w-full ')
          }`}
          placeholder={props.placeholder}
          onChange={props.register.onChange}
          onBlur={props.register.onBlur}
          ref={props.register.ref}
        />
        {props.errors && props.styleType === 'long' && props.isSubmitted && (
          <div className="absolute -right-9">
            <ErrorIcon />
          </div>
        )}
        {!props.errors && props.isSubmitted && props.type !== 'date' && (
          <div className="absolute right-4">
            <CheckIcon />
          </div>
        )}
      </div>
    </div>
  )
}

export default Input
