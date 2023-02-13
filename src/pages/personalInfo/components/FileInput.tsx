import { InfoContext } from 'context'
import { useContext } from 'react'
import { ChangeHandler } from 'react-hook-form'

export interface FileInputProps {
  label: string
  name: string
  id: string
  errors: any
  isSubmitted: boolean
  formCount: number | undefined
  placeholder: string
  register: {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    ref: React.Ref<HTMLInputElement>
  }
}

const FileInput: React.FC<FileInputProps> = props => {
  const infoCtx = useContext(InfoContext)

  return (
    <div className="flex flex-row gap-5 items-center">
      <label
        className=" font-Helvetica font-medium text-[#000000] text-lg leading-[22px] mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>

      <label
        htmlFor={props.id}
        className={`  cursor-pointer w-[107px] h-7 bg-[#0E80BF] rounded font-Helvetica font-normal text-[#FFFFFF] text-sm leading-[17px] flex items-center justify-center ${
          props.errors && props.isSubmitted && 'bg-[#E52F2F]'
        } ${!props.errors && props.isSubmitted && 'bg-[#98E37E]'}`}
      >
        ატვირთვა
      </label>
      <input
        type="file"
        name={props.name}
        id={props.id}
        onChange={e => {
          props.register.onChange(e)

          const file = e.target.files?.[0]

          infoCtx.infoHandler({
            name: props.name,
            value: file,
            formCount: props.formCount,
          })
        }}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
        className=" hidden"
      />
    </div>
  )
}

export default FileInput
