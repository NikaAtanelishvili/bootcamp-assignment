import { useContext } from 'react'

import { AtIcon, PhoneIcon, ResumeLogo } from 'components/svgs'

import { InfoContext } from 'context'

interface ExperienceType {
  position: string
  employer: string
  start_date: string
  due_date: string
  description: string
}

interface EducationType {
  institute: string
  degree_id: {
    id: string
    title: string
  }
  due_date: string
  description: string
}

const ResumeLayout: React.FC = () => {
  const infoCtx = useContext(InfoContext)

  return (
    <div className=" pl-[60px] pr-[60px] pt-[68px] pb-11 w-full h-full bg-[#FFFFFF] relative">
      <div className=" absolute bottom-11 left-20">
        <ResumeLogo />
      </div>
      {/* Personal Info */}
      <div className="flex flex-row justify-between ">
        <div className=" flex-grow">
          <div className=" w-[400px] break-words">
            <h1 className=" font-Helvetica font-bold text-[34px] leading-[42px] text-[#F93B1D] mb-4">
              {`${infoCtx.name} ${infoCtx.surname}`}
            </h1>
          </div>
          <div className="flex flex-col gap-[10px] mb-9">
            {infoCtx.email && (
              <div className="flex flex-row items-center gap-3 ">
                <AtIcon />
                <div className="w-[400px] break-words">
                  <p className=" font-Helvetica font-normal text-lg leading-[21px] text-[#1A1A1A] ">
                    {infoCtx.email}
                  </p>
                </div>
              </div>
            )}
            {infoCtx.phone_number && (
              <div className="flex flex-row items-center gap-3 ">
                <PhoneIcon />
                <div className="w-[400px] break-words">
                  <p className=" font-Helvetica font-normal text-lg leading-[21px] text-[#1A1A1A] ">
                    {infoCtx.phone_number}
                  </p>
                </div>
              </div>
            )}
          </div>
          {infoCtx.about_me && (
            <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
              ჩემ შესახებ
            </h3>
          )}
          <div className="w-[400px] break-words">
            <p className="font-Helvetica font-normal text-base leading-[22px] text-[#1A1A1A] lowercase mb-5">
              {infoCtx.about_me}
            </p>
          </div>
        </div>

        <div className=" w-[246px] h-[246px] top-[48px] right-[75px] ">
          <img
            src={infoCtx.image}
            className="rounded-[50%]"
            alt="profile"
            width="246px"
            height="246px"
          />
        </div>
      </div>

      {infoCtx.experiences[0] && <hr className=" mb-6 w-full" />}

      {/* Experiences */}
      <div>
        {infoCtx.experiences[0] && (
          <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
            გამოცდილება
          </h3>
        )}
        {infoCtx.experiences.map((experience: ExperienceType) => {
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

      {infoCtx.educations[0] && <hr className=" mb-6 w-full" />}
      {/* Education */}
      <div>
        {infoCtx.educations[0] && (
          <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
            განათლება
          </h3>
        )}
        {infoCtx.educations.map((education: EducationType) => {
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
                    {`, ${education.degree_id.title}`}
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
  )
}

export default ResumeLayout
