import { ChangeHandler } from 'react-hook-form'

export interface FileInputProps {
  label: string
  name: string
  id: string
  placeholder: string
  register: {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    ref: React.Ref<HTMLInputElement>
  }
}

const FileInput: React.FC<FileInputProps> = props => {
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
        className="  cursor-pointer w-[107px] h-7 bg-[#0E80BF] rounded font-Helvetica font-normal text-[#FFFFFF] text-sm leading-[17px] flex items-center justify-center"
      >
        ატვირთვა
      </label>
      <input
        type="file"
        name={props.name}
        id={props.id}
        onChange={props.register.onChange}
        onBlur={props.register.onBlur}
        ref={props.register.ref}
        className=" hidden"
      />
    </div>
  )
}

export default FileInput
