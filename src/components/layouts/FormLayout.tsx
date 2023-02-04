import { NavigationArrow } from 'components/svgs'
import React from 'react'
import { Link } from 'react-router-dom'

interface FormLayoutProps {
    formTitle: string,
    page: number
    children: React.ReactNode
}

const FormLayout: React.FC<FormLayoutProps> = props => {
  return (
    <div>
      <header>
        <Link
          className=" h-10 w-10 flex justify-center items-center rounded-[50%] bg-[#FFFFFF]"
          to="/"
        >
          <NavigationArrow />
        </Link>
        <div className="flex flex-row justify-between border-b border-[#1A1A1A]">
          <h1 className=" font-bold text-[#1A1A1A] text-2xl leading-7">
            {props.formTitle}
          </h1>
          <p>{props.page}/3</p>
        </div>
      </header>
      <div>{props.children}</div>
      <button className="fles justify-center items-center bg-[#6B40E3] rounded max-w-[151px] h-12 font-medium text-[#FFFFFF] text-base leading-5 tracking-[0.08em]">
        შემდეგი
      </button>
    </div>
  )
}

export default FormLayout
