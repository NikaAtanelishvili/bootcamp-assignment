import { HomeButton, ResumeLayout } from 'components'
import { useState } from 'react'
import { Popup } from './components'

const Resume = () => {
  const [popupVisibility, setPopupVisibility] = useState<boolean>(true)

  const handlePopupClose = () => {
    setPopupVisibility(false)
  }

  return (
    <div className=" w-full pt-14 pb-32 h-screen flex relative items-center justify-center">
      <div className="top-11 left-12 absolute">
        <HomeButton />
      </div>
      <div className="  h-full w-[822px] flex border border-[#000000]">
        <ResumeLayout />
      </div>
      {popupVisibility && <Popup handlePopupClose={handlePopupClose} />}
    </div>
  )
}

export default Resume
