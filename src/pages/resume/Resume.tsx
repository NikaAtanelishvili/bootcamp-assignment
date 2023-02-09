import { HomeButton, ResumeLayout } from 'components'

const Resume = () => {
  return (
    <div className=" w-full pt-14 pb-32 h-screen flex relative items-center justify-center">
      <div className="absolute top-11 left-12">
        <HomeButton />
      </div>
      <div className=" h-full w-[822px] flex border border-[#000000]">
        <div className=" flex-grow">
          <ResumeLayout />
        </div>
      </div>
    </div>
  )
}

export default Resume
