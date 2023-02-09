import { ChangeHandler } from 'react-hook-form'
import { useContext } from 'react'
import { InfoContext } from 'context'

export interface TextareaProps {
  label: string
  name: string
  placeholder: string
  errors: any
  isSubmitted: boolean
  rows: number
  register: {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    ref: React.Ref<HTMLInputElement>
  }
}

const Textarea: React.FC<TextareaProps> = props => {
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
      <textarea
        className={`focus:outline-none focus:border-2 resize-none bg-[#FFFFFF] border border-[#BCBCBC] rounded font-Helvetica font-normal placeholder-[#00000099] text-base leading-[21px] pl-4 pt-3 ${
          !props.errors &&
          !props.isSubmitted &&
          'focus:outline-none focus:border-2'
        } ${
          props.errors && props.isSubmitted && 'border-[#EF5050] focus:border'
        }
        ${!props.errors && props.isSubmitted && 'border-[#98E37E]'}`}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        onChange={e => {
          props.register.onChange(e)
          infoCtx.infoHandler({ name: props.name, value: e.target.value })
        }}
        onBlur={props.register.onBlur}
        rows={props.rows}
      />
    </div>
  )
}

export default Textarea
