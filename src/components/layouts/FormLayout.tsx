import { NavigationArrow } from 'components/svgs'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface FormLayoutProps {
  formTitle: string
  page: number
  back: string | null
  to: string
  children: React.ReactNode
}

const FormLayout: React.FC<FormLayoutProps> = props => {
  const navigate = useNavigate()

  return (
    <div className=" h-screen max-w-[1098px] px-32 bg-[#F9F9F9]">
      <div className="relative h-full">
        <header className=" mb-[69px]">
          <Link
            className=" h-10 w-10 flex justify-center items-center rounded-[50%] bg-[#FFFFFF]"
            to="/"
          >
            <NavigationArrow />
          </Link>
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
          className={`absolute w-full bottom-16 flex flex-row ${
            props.back ? 'justify-between' : 'justify-end'
          } `}
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
            onClick={() => navigate(props.to)}
            className=" font-Helvetica bg-[#6B40E3] rounded w-[151px] h-12 font-medium text-[#FFFFFF] text-base leading-5 tracking-[0.08em]"
          >
            შემდეგი
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormLayout
