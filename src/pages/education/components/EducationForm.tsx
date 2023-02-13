import { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import DegreeSelect from './DegreeSelect'
import { InfoContext } from 'context'
import { Input } from 'components'

const EducationForm: React.FC<{ formCountHandler: any }> = props => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<any>({ mode: 'all' })

  const [formCount, setFormCount] = useState<number>(1)

  const infoCtx = useContext(InfoContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('educations')) {
      const values = JSON.parse(localStorage.getItem('educations')!)

      for (let [name, value] of Object.entries(values)) {
        setValue(name, value)
      }
    }
    if (localStorage.getItem('educationsFormCount')) {
      setFormCount(Number(localStorage.getItem('educationsFormCount')))
    }
  }, [setValue])

  document.onvisibilitychange = () => {
    const values = getValues()

    infoCtx.educations.forEach((_, i) => {
      values[`description${i}`] = infoCtx.educations[i].description
    })

    localStorage.setItem('educations', JSON.stringify(values))
    localStorage.setItem('educationsFormCount', formCount.toString())
  }

  const addFormHandler = () => {
    setFormCount(prevState => prevState + 1)
    return props.formCountHandler(formCount)
  }

  const handleSelect = (name: string, value: string) => {
    setValue(name, value, { shouldValidate: true })
  }
  const formData = new FormData()
  formData.append('name', JSON.stringify(infoCtx.experiences))
  return (
    <form
      id="education"
      onSubmit={handleSubmit(() => {
        const values = getValues()

        infoCtx.educations.forEach((_, i) => {
          values[`description${i}`] = infoCtx.educations[i].description
        })

        localStorage.setItem('educations', JSON.stringify(values))
        localStorage.setItem('educationsFormCount', formCount.toString())

        const sendCV = async () => {
          const formData = new FormData()

          formData.append('name', infoCtx.name)
          formData.append('surname', infoCtx.surname)
          formData.append('phone_number', infoCtx.phone_number)
          formData.append('about_me', infoCtx.about_me)
          formData.append('email', infoCtx.email)
          formData.append('image', infoCtx.image)

          infoCtx.experiences.forEach((experience, i) => {
            formData.append(`experiences[${i}][employer]`, experience.employer)
            formData.append(
              `experiences[${i}][start_date]`,
              experience.start_date
            )
            formData.append(`experiences[${i}][position]`, experience.position)
            formData.append(`experiences[${i}][due_date]`, experience.due_date)
            formData.append(
              `experiences[${i}][description]`,
              experience.description
            )
          })
          console.log(infoCtx.educations[0].degree_id)
          infoCtx.educations.forEach((education, i) => {
            formData.append(`educations[${i}][institute]`, education.institute)
            formData.append(`educations[${i}][degree_id]`, education.degree_id)
            formData.append(`educations[${i}][due_date]`, education.due_date)
            formData.append(
              `educations[${i}][description]`,
              education.description
            )
          })

          try {
            const response = await fetch(
              'https://resume.redberryinternship.ge/api/cvs',
              {
                method: 'POST',
                body: formData,
                headers: {
                  Accept: 'application/json',
                },
              }
            )

            const data = await response.json()
            console.log()
            if (response.status === 201) {
              navigate('/resume', { state: data })
            }
          } catch (err) {
            console.log(err)
          }
        }
        sendCV()
      })}
    >
      {Array.from(Array(formCount)).map((_, i: number) => {
        return (
          <div>
            <div className=" mb-8">
              <div className=" mb-2">
                <Input
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
                    'border-[#EF5050] focus:outline-none focus:border'
                  }
                  ${
                    !errors[`descriptionEducation${i}`] &&
                    isSubmitted &&
                    'border-[#98E37E] focus:outline-none focus:border'
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
