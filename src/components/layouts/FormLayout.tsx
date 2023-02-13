import React from 'react'

import { useNavigate } from 'react-router-dom'

import HomeButton from 'components/HomeButton'

interface FormLayoutProps {
  formTitle: string
  page: number
  form: string
  formCount: number
  back: string | null
  to: string
  children: React.ReactNode
}

const FormLayout: React.FC<FormLayoutProps> = props => {
  const navigate = useNavigate()

  return (
    <div
      className={` h-screen ${
        props.formCount > 0 && 'h-full'
      } w-[1098px] px-32 bg-[#F9F9F9]`}
    >
      <div className="relative flex flex-col h-full pt-11 ">
        <header className=" mb-[69px]">
          <div className=" absolute -left-[81px]">
            <HomeButton />
          </div>

          <div className=" pb-3 flex flex-row justify-between border-b border-[#1A1A1A]">
            <h1 className=" font-Helvetica font-bold text-[#1A1A1A] text-2xl leading-7">
              {props.formTitle}
            </h1>
            <p className=" font-Helvetica font-normal text-[#1A1A1A] text-xl leading-6">
              {props.page}/3
            </p>
          </div>
        </header>
        <div>{props.children}</div>
        <div
          className={` items-end mb-16 flex-grow w-full flex flex-row ${
            props.back ? 'justify-between' : 'justify-end'
          } ${props.formCount > 0 && ' mt-[117px]'} `}
        >
          {props.back && (
            <button
              onClick={() => navigate(props.back!)}
              className="font-Helvetica bg-[#6B40E3] rounded w-[151px] h-12 font-medium text-[#FFFFFF] text-base leading-5 tracking-[0.08em]"
            >
              უკან
            </button>
          )}
          <button
            type="submit"
            form={props.form}
            className=" font-Helvetica bg-[#6B40E3] rounded w-[151px] h-12 font-medium text-[#FFFFFF] text-base leading-5 tracking-[0.08em]"
          >
            {props.to === '/resume' ? 'დასრულება' : 'შემდეგი'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormLayout
