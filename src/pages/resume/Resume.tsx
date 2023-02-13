import { AtIcon, HomeButton, PhoneIcon, ResumeLogo } from 'components'
import { InfoContext } from 'context'
import { useContext, useEffect, useState } from 'react'
import { Popup } from './components'

const Resume = () => {
  const [popupVisibility, setPopupVisibility] = useState<boolean>(true)
  const [resumeData, setResumeData] = useState<any>()

  const handlePopupClose = () => {
    setPopupVisibility(false)
  }

  interface ExperienceType {
    position: string
    employer: string
    start_date: string
    due_date: string
    description: string
  }

  interface EducationType {
    institute: string
    degree_id: string
    due_date: string
    description: string
  }

  const infoCtx = useContext(InfoContext)

  useEffect(() => {
    const sendCV = async () => {
      const cv = {
        name: infoCtx.name,
        surname: infoCtx.surname,
        phoneNumber: infoCtx.phone_number,
        email: infoCtx.email,
        about_me: infoCtx.about_me,
        image: infoCtx.image,
        experiences: infoCtx.experiences,
        educations: infoCtx.educations,
      }
      const request = await fetch(
        'https://resume.redberryinternship.ge/api/cvs',
        {
          method: 'POST',
          body: JSON.stringify(cv),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      )

      const response = await request.json()

      if (response.status === 200) {
        setResumeData(response.body)
      }
    }
    sendCV()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className=" w-full pt-14 pb-32 h-screen flex relative items-center justify-center">
      <div className="top-11 left-12 absolute">
        <HomeButton />
      </div>
      <div className="  h-full w-[822px] flex border border-[#000000]">
        {resumeData && (
          <div className=" pl-[60px] pr-[60px] pt-[68px] pb-11 w-full h-full bg-[#FFFFFF] relative">
            <div className=" absolute bottom-11 left-20">
              <ResumeLogo />
            </div>
            {/* Personal Info */}
            <div className="flex flex-row justify-between ">
              <div className=" flex-grow">
                <div className=" w-[400px] break-words">
                  <h1 className=" font-Helvetica font-bold text-[34px] leading-[42px] text-[#F93B1D] mb-4">
                    {`${resumeData.name} ${resumeData.surname}`}
                  </h1>
                </div>
                <div className="flex flex-col gap-[10px] mb-9">
                  {resumeData.email && (
                    <div className="flex flex-row items-center gap-3 ">
                      <AtIcon />
                      <div className="w-[400px] break-words">
                        <p className=" font-Helvetica font-normal text-lg leading-[21px] text-[#1A1A1A] ">
                          {resumeData.email}
                        </p>
                      </div>
                    </div>
                  )}
                  {resumeData.phone_number && (
                    <div className="flex flex-row items-center gap-3 ">
                      <PhoneIcon />
                      <div className="w-[400px] break-words">
                        <p className=" font-Helvetica font-normal text-lg leading-[21px] text-[#1A1A1A] ">
                          {resumeData.phone_number}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {resumeData.about_me && (
                  <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
                    ჩემ შესახებ
                  </h3>
                )}
                <div className="w-[400px] break-words">
                  <p className="font-Helvetica font-normal text-base leading-[22px] text-[#1A1A1A] lowercase mb-5">
                    {resumeData.about_me}
                  </p>
                </div>
              </div>

              <div className=" w-[246px] h-[246px] top-[48px] right-[75px] ">
                <img
                  src={resumeData.image}
                  className="rounded-[50%]"
                  alt="profile"
                  width="246px"
                  height="246px"
                />
              </div>
            </div>

            {resumeData.experiences[0] && <hr className=" mb-6 w-full" />}

            {/* Experiences */}
            <div>
              {resumeData.experiences[0] && (
                <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
                  გამოცდილება
                </h3>
              )}
              {resumeData.experiences.map((experience: ExperienceType) => {
                return (
                  <div>
                    <p className=" font-Helvetica font-medium text-base leading-5 text-[#1A1A1A] mb-2">
                      {`${experience.position} ${experience.employer}`}
                    </p>
                    <p className=" font-Helvetica font-normal text-base leading-[19px] text-[#919191] mb-4">{`${experience.start_date} ${experience.due_date}`}</p>
                    <p className=" font-Helvetica font-normal text-base leading-[22px] text-[#000000] mb-8">
                      {experience.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {resumeData.educations[0] && <hr className=" mb-6 w-full" />}
            {/* Education */}
            <div>
              {resumeData.educations[0] && (
                <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
                  განათლება
                </h3>
              )}
              {resumeData.educations.map((education: EducationType) => {
                return (
                  <div>
                    <div className="flex flex-row items-center">
                      {education.institute && (
                        <p className=" font-Helvetica font-medium text-base leading-5 text-[#1A1A1A] mb-2">
                          {`${education.institute}`}
                        </p>
                      )}
                      {education.degree_id && (
                        <p className=" font-Helvetica font-medium text-base leading-5 text-[#1A1A1A] mb-2">
                          {`, ${education.degree_id}`}
                        </p>
                      )}
                    </div>
                    {education.due_date && (
                      <p className=" font-Helvetica font-normal text-base leading-[19px] text-[#919191] mb-4">
                        {education.due_date}
                      </p>
                    )}
                    {education.description && (
                      <p className=" font-Helvetica font-normal text-base leading-[22px] text-[#000000]">
                        {education.description}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
      {popupVisibility && <Popup handlePopupClose={handlePopupClose} />}
    </div>
  )
}

export default Resume
