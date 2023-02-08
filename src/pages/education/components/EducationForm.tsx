import { Input, Textarea } from 'components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
interface EducationFormType {
  school: string
  degree: string
  endDateEducation: Date
  descriptionEducation: string
}

const EducationForm: React.FC<{ formCountHandler: any }> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<EducationFormType>({ mode: 'all' })

  const [formCount, setFormCount] = useState<number>(1)

  const addFormHandler = () => {
    setFormCount(prevState => prevState + 1)
    return props.formCountHandler(formCount)
  }

  const navigate = useNavigate()

  return (
    <form
      id="education"
      onSubmit={handleSubmit(data => {
        return navigate('/resume')
      })}
    >
      {Array.from(Array(formCount)).map(() => {
        return (
          <div key={nanoid()}>
            <div className=" mb-8">
              <div className=" mb-2">
                <Input
                  isSubmitted={isSubmitted}
                  errors={errors['school']}
                  type={'text'}
                  label={'სასწავლებელი'}
                  name={'school'}
                  styleType={'long'}
                  placeholder={'სასწავლებელი'}
                  register={register('school', {
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
            <div className=" mb-8">
              {/* Degrees */}
              <div>{/* WIP */}</div>

              {/* end Date */}
              <div>
                <Input
                  type={'date'}
                  isSubmitted={isSubmitted}
                  errors={errors['endDateEducation']}
                  label={'დამთავრების რიცხვი'}
                  name={'endDateEducation'}
                  styleType={'normal'}
                  placeholder={''}
                  register={register('endDateEducation', {
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
                errors={errors['descriptionEducation']}
                isSubmitted={isSubmitted}
                rows={6}
                label={'აღწერა'}
                name={'descriptionEducation'}
                placeholder={'განათლების აღწერა'}
                register={register('descriptionEducation', {
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
