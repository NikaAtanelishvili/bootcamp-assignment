import { Input, Textarea } from 'components'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import DegreeSelect from './DegreeSelect'
import { InfoContext } from 'context'

const EducationForm: React.FC<{ formCountHandler: any }> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setValue,
  } = useForm<any>({ mode: 'all' })

  const infoCtx = useContext(InfoContext)

  const [formCount, setFormCount] = useState<number>(1)

  const addFormHandler = () => {
    setFormCount(prevState => prevState + 1)
    return props.formCountHandler(formCount)
  }

  const handleSelect = (name: string, value: string) => {
    setValue(name, value, { shouldValidate: true })
  }

  const sendCV = async () => {
    const cv = {
      name: infoCtx.name,
      surname: infoCtx.surname,
      phone_number: infoCtx.phone_number,
      about_me: infoCtx.about_me,
      image: infoCtx.image,
      experiences: infoCtx.experiences,
      education: infoCtx.educations,
    }

    const request = await fetch(
      'https://resume.redberryinternship.ge/api/cvs',
      {
        method: 'POST',
        body: JSON.stringify(cv),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const response = await request.json()

    if (response.status === 201) {
      navigate('/resume')
    }
    return false
  }

  const navigate = useNavigate()

  return (
    <form
      id="education"
      onSubmit={handleSubmit(data => {
        sendCV()
      })}
    >
      {Array.from(Array(formCount)).map((_, i: number) => {
        return (
          <div key={nanoid()}>
            {/* School */}
            <div className=" mb-8">
              <div className=" mb-2">
                <Input
                  value={''}
                  formCount={i}
                  isSubmitted={isSubmitted}
                  errors={errors[`school${i}`]}
                  type={'text'}
                  label={'სასწავლებელი'}
                  name={`school${i}`}
                  styleType={'long'}
                  placeholder={'სასწავლებელი'}
                  register={register(`school${i}`, {
                    required: {
                      value: true,
                      message: 'მინუმუმ 2 სიმბოლო',
                    },
                    minLength: {
                      value: 2,
                      message: 'მინუმუმ 2 სიმბოლო',
                    },
                  })}
                />
              </div>
              <p className=" font-light text-sm text-[#2E2E2E] leading-5">
                მინუმუმ 2 სიმბოლო
              </p>
            </div>
            {/* Degrees - Due date */}
            <div className="flex flex-row w-full justify-between mb-8">
              {/* Degrees */}
              <div className=" w-[46%]">
                <DegreeSelect
                  label={'ხარისხი'}
                  placeholder={'აირჩიეთ ხარისხი'}
                  name={`degrees${i}`}
                  errors={errors[`degrees${i}`]}
                  formCount={i}
                  isSubmitted={isSubmitted}
                  handleSelect={handleSelect}
                  register={register(`degrees${i}`, {
                    required: {
                      value: true,
                      message: '',
                    },
                  })}
                />
              </div>

              {/* Due date */}
              <div className=" w-[46%]">
                <Input
                  value={''}
                  formCount={i}
                  type={'date'}
                  isSubmitted={isSubmitted}
                  errors={errors[`endDateEducation${i}`]}
                  label={'დამთავრების რიცხვი'}
                  name={`endDateEducation${i}`}
                  styleType={'normal'}
                  placeholder={''}
                  register={register(`endDateEducation${i}`, {
                    required: {
                      value: true,
                      message: '',
                    },
                  })}
                />
              </div>
            </div>
            {/* Description */}
            <div className=" mb-11">
              <div className="flex flex-col">
                <label
                  className={` font-Helvetica font-medium text-[#000000] text-base leading-[21px] mb-2 ${
                    errors[`descriptionEducation${i}`] &&
                    isSubmitted &&
                    'text-[#E52F2F]'
                  }`}
                  htmlFor={`descriptionEducation${i}`}
                >
                  განათლების აღწერა
                </label>
                <textarea
                  className={`focus:outline-none focus:border-2 resize-none bg-[#FFFFFF] border border-[#BCBCBC] rounded font-Helvetica font-normal placeholder-[#00000099] w-full text-base leading-[21px] pl-4 pt-3 ${
                    !errors[`descriptionEducation${i}`] &&
                    !isSubmitted &&
                    'focus:outline-none focus:border-2'
                  } ${
                    errors[`descriptionEducation${i}`] &&
                    isSubmitted &&
                    'border-[#EF5050] focus:border'
                  }
          ${
            !errors[`descriptionEducation${i}`] &&
            isSubmitted &&
            'border-[#98E37E]'
          }`}
                  id={`descriptionEducation${i}`}
                  placeholder={'განათლების აღწერა'}
                  rows={6}
                  {...register(`descriptionEducation${i}`, {
                    required: {
                      value: true,
                      message: '',
                    },
                    onChange(e) {
                      infoCtx.infoHandler({
                        name: `descriptionEducation${i}`,
                        value: e.target.value,
                        formCount: i,
                      })
                    },
                  })}
                />
              </div>
              <hr className=" mb-11" />
            </div>
          </div>
        )
      })}
      <button
        onClick={addFormHandler}
        className=" font-Helvetica flex justify-center items-center bg-[#62A1EB] h-12 w-[289px] rounded font-medium text-[#FFFFFF] text-base leading-5"
        type="button"
      >
        სხვა სასწავლებლის დამატება
      </button>
    </form>
  )
}

export default EducationForm
