import { useContext, useEffect, useState } from 'react'

import { ChangeHandler } from 'react-hook-form'
import { nanoid } from 'nanoid'

import { InfoContext } from 'context'

export interface SelectProps {
  label: string
  name: string
  errors: any
  isSubmitted: boolean
  formCount: number
  placeholder: string
  handleSelect: any
  register: {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    ref: React.Ref<HTMLInputElement>
  }
}

const DegreeSelect: React.FC<SelectProps> = props => {
  const [dropdownStatus, setDropdownStatus] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<string>('')
  const [degrees, setDegrees] = useState<any>([])

  const infoCtx = useContext(InfoContext)

  useEffect(() => {
    ;(async () => {
      const request = await fetch(
        'https://resume.redberryinternship.ge/api/degrees'
      )

      const response = await request.json()

      setDegrees(response)
    })()
  }, [])

  return (
    <div className="flex flex-col z-20 relative">
      {dropdownStatus && (
        <div
          onClick={() => setDropdownStatus(false)}
          className="fixed top-0 left-0 right-0 bottom-0 bg-transparent"
        />
      )}
      <label
        className={` font-Helvetica font-medium text-[#000000] text-base leading-[21px] mb-2 ${
          props.errors && props.isSubmitted && 'text-[#E52F2F]'
        }`}
        htmlFor={props.name}
      >
        {props.label}
      </label>

      <div className="flex flex-row items-center w-full relative">
        <div className="flex flex-col w-full">
          <input
            readOnly
            id={props.name}
            className={` cursor-pointer font-Helvetica px-4 border border-[#BCBCBC] focus:outline-none ${
              !props.errors &&
              !props.isSubmitted &&
              'focus:outline-none focus:border-2'
            } ${
              props.errors && props.isSubmitted && 'border-[#EF5050]'
            } h-12 rounded bg-[#FFFFFF] placeholder-[#00000099] font-normal text-base leading-[21px] w-full ${
              !props.errors && props.isSubmitted && 'border-[#98E37E]'
            }`}
            placeholder={props.placeholder}
            onBlur={e => {
              props.register.onBlur(e)
            }}
            value={selectValue}
            onChange={props.register.onChange}
            ref={props.register.ref}
            onClick={() => setDropdownStatus(prevState => !prevState)}
          ></input>

          {dropdownStatus && (
            <div className=" rounded absolute w-full top-12 shadow-xl">
              {degrees.map((degree: { title: string; id: string }) => {
                return (
                  <div
                    onClick={() => {
                      props.handleSelect(props.name, degree.title)
                      setSelectValue(degree.title)

                      infoCtx.infoHandler({
                        name: props.name,
                        value: degree.title,
                        formCount: props.formCount,
                      })

                      setDropdownStatus(false)
                    }}
                    key={nanoid()}
                    className=" cursor-pointer py-[10px] pl-4 bg-[#FFFFFF] font-normal font-Helvetica text-[#1A1A1A] text-base leading-[21px] hover:bg-[#C3DCEE]"
                  >
                    {degree.title}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DegreeSelect
