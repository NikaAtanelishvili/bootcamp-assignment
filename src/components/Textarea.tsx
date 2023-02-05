import { ChangeHandler } from 'react-hook-form'

export interface TextareaProps {
  label: string
  name: string
  id: string
  placeholder: string
  rows: number
  register: {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    ref: React.Ref<HTMLInputElement>
  }
}

const Textarea: React.FC<TextareaProps> = props => {
  return (
    <div className="flex flex-col">
      <label
        className=" font-Helvetica font-medium text-[#000000] text-base leading-[21px] mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>

      <textarea
        className=" resize-none bg-[#FFFFFF] border border-[#BCBCBC] rounded font-Helvetica font-normal placeholder-[#00000099] text-base leading-[21px] pl-4 pt-3"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.register.onChange}
        onBlur={props.register.onBlur}
        rows={props.rows}
      />
    </div>
  )
}

export default Textarea
