import { Input, Textarea } from 'components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import DegreeSelect from './DegreeSelect'

const EducationForm: React.FC<{ formCountHandler: any }> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setValue,
  } = useForm<any>({ mode: 'all' })

  const [formCount, setFormCount] = useState<number>(1)

  const addFormHandler = () => {
    setFormCount(prevState => prevState + 1)
    return props.formCountHandler(formCount)
  }

  const handleSelect = (name: string, value: string) => {
    setValue(name, value, { shouldValidate: true })
  }

  const navigate = useNavigate()

  return (
    <form
      id="education"
      onSubmit={handleSubmit(data => {
        return navigate('/resume')
      })}
    >
      {Array.from(Array(formCount)).map((_, i: number) => {
        return (
          <div key={nanoid()}>
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

              {/* end Date */}
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
              <Textarea
                errors={errors[`descriptionEducation${i}`]}
                isSubmitted={isSubmitted}
                rows={6}
                label={'აღწერა'}
                name={`descriptionEducation${i}`}
                placeholder={'განათლების აღწერა'}
                register={register(`descriptionEducation${i}`, {
                  // required: {
                  //   value: true,
                  //   message: '',
                  // },
                })}
              />
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
