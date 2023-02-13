import { ChangeHandler } from 'react-hook-form'
import { CheckIcon, ErrorIcon } from './svgs'
import { useContext } from 'react'

import { InfoContext } from 'context'

export interface InputProps {
  label?: string
  type?: string
  name?: string
  errors?: any
  isSubmitted?: boolean
  formCount?: number
  placeholder?: string
  styleType?: string
  register: {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    ref: React.Ref<HTMLInputElement>
  }
}

const Input: React.FC<InputProps> = props => {
  const infoCtx = useContext(InfoContext)
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
          className={`focus:outline-none focus:border-2 font-Helvetica px-4 border border-[#BCBCBC] ${
            !props.errors &&
            !props.isSubmitted &&
            'focus:outline-none focus:border-2'
          } ${
            props.errors &&
            props.isSubmitted &&
            'border-[#EF5050] focus:outline-none focus:border'
          } h-12 rounded bg-[#FFFFFF] placeholder-[#00000099] font-normal text-base leading-[21px] ${
            (props.styleType === 'normal' && ' w-full') ||
            (props.styleType === 'long' && ' w-full ')
          } ${
            !props.errors &&
            props.isSubmitted &&
            'border-[#98E37E] focus:outline-none focus:border'
          }`}
          placeholder={props.placeholder}
          onBlur={props.register.onBlur}
          ref={props.register.ref}
          onChange={e => {
            props.register.onChange(e)
            infoCtx.infoHandler({
              name: props.name,
              value: e.target.value,
            })
          }}
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
