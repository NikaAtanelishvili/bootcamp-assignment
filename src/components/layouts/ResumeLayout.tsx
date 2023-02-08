import { AtIcon, PhoneIcon } from 'components/svgs'
import { InfoContext } from 'context'
import { useContext } from 'react'

const ResumeLayout = () => {
  const infoCtx = useContext(InfoContext)

  const experiencesAvaliable =
    !!infoCtx.position ||
    !!infoCtx.employer ||
    !!infoCtx.startDateExperiences ||
    !!infoCtx.endDateExperiences ||
    !!infoCtx.descriptionExperiences

  const educationAvaliable =
    !!infoCtx.school ||
    !!infoCtx.degree ||
    !!infoCtx.endDateEducation ||
    !!infoCtx.descriptionEducation

  return (
    <div className=" pl-[60px] pt-[68px] w-full">
      {/* Personal Info */}
      <div>
        <div className=" flex flex-row gap-5 ">
          <h1 className=" font-Helvetica font-bold text-[34px] leading-[42px] text-[#F93B1D] mb-4">
            {infoCtx.name}
          </h1>
          <h1 className=" font-Helvetica font-bold text-[34px] leading-[42px] text-[#F93B1D]">
            {infoCtx.lastname}
          </h1>
        </div>
        <div className="flex flex-col gap-[10px] mb-9">
          {infoCtx.email && (
            <div className="flex flex-row items-center gap-3">
              <AtIcon />
              <p className=" font-Helvetica font-normal text-lg leading-[21px] text-[#1A1A1A] ">
                {infoCtx.email}
              </p>
            </div>
          )}
          {infoCtx.phoneNumber && (
            <div className="flex flex-row items-center gap-3">
              <PhoneIcon />
              <p className=" font-Helvetica font-normal text-lg leading-[21px] text-[#1A1A1A] ">
                {infoCtx.phoneNumber}
              </p>
            </div>
          )}
        </div>
        {infoCtx.aboutme && (
          <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
            ჩემ შესახებ
          </h3>
        )}
        <p className="font-Helvetica font-normal text-base leading-[22px] text-[#1A1A1A] lowercase mb-5">
          {infoCtx.aboutme}
        </p>
      </div>

      {experiencesAvaliable && <hr className=" mb-6" />}

      {/* Experiences */}
      <div>
        {experiencesAvaliable && (
          <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
            გამოცდილება
          </h3>
        )}

        <p className=" font-Helvetica font-medium text-base leading-5 text-[#1A1A1A] mb-2">
          {`${infoCtx.position} ${infoCtx.employer}`}
        </p>
        <p className=" font-Helvetica font-normal text-base leading-[19px] text-[#919191] mb-4">{`${infoCtx.startDateExperiences} ${infoCtx.endDateExperiences}`}</p>
        <p className=" font-Helvetica font-normal text-base leading-[22px] text-[#000000] mb-8">
          {infoCtx.descriptionExperiences}
        </p>
      </div>

      {educationAvaliable && <hr className=" mb-6" />}

      {/* Education */}
      <div>
        {educationAvaliable && (
          <h3 className="font-Helvetica font-bold text-lg leading-[22px] text-[#F93B1D] mb-4">
            განათლება
          </h3>
        )}
        <p className=" font-Helvetica font-medium text-base leading-5 text-[#1A1A1A] mb-2">
          {`${infoCtx.school} ${infoCtx.degree}`}
        </p>
        <p className=" font-Helvetica font-normal text-base leading-[19px] text-[#919191] mb-4">
          {infoCtx.endDateEducation}
        </p>
        <p className=" font-Helvetica font-normal text-base leading-[22px] text-[#000000]">
          {infoCtx.descriptionEducation}
        </p>
      </div>
    </div>
  )
}

export default ResumeLayout
