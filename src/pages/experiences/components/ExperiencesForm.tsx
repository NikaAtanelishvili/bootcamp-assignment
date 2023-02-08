import { Input, Textarea } from 'components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface ExperiencesFormType {
  position: string
  employer: string
  startDateExperiences: Date
  endDateExperiences: Date
  descriptionExperiences: string
}

const ExperiencesForm: React.FC<{ formCountHandler: any }> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ExperiencesFormType>({ mode: 'all' })

  const [formCount, setFormCount] = useState<number>(1)

  const addFormHandler = () => {
    setFormCount(prevState => prevState + 1)
    return props.formCountHandler(formCount)
  }

  const navigate = useNavigate()

  return (
    <form
      id="experiences"
      onSubmit={handleSubmit(data => {
        console.log('submited')
        return navigate('/education')
      })}
    >
      {Array.from(Array(formCount)).map(() => {
        return (
          <>
            <div className=" mb-8">
              <div className=" mb-2">
                <Input
                  type={'text'}
                  isSubmitted={isSubmitted}
                  errors={errors['position']}
                  label={'თანამდებობა'}
                  name={'position'}
                  styleType={'long'}
                  placeholder={'დეველოპერი, დიზაინერი, ა.შ.'}
                  register={register('position', {
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
              <div className=" mb-2">
                <Input
                  isSubmitted={isSubmitted}
                  errors={errors['employer']}
                  type={'text'}
                  label={'დამსაქმებელი'}
                  name={'employer'}
                  styleType={'long'}
                  placeholder={'დამსაქმებელი'}
                  register={register('employer', {
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
              <div className=" w-[46%]">
                <Input
                  isSubmitted={isSubmitted}
                  errors={errors['startDateExperiences']}
                  type={'date'}
                  label={'დაწყების რიცხვი'}
                  name={'startDateExperiences'}
                  styleType={'normal'}
                  placeholder={''}
                  register={register('startDateExperiences', {
                    required: {
                      value: true,
                      message: '',
                    },
                  })}
                />
              </div>
              <div className=" w-[46%]">
                <Input
                  isSubmitted={isSubmitted}
                  errors={errors['endDateExperiences']}
                  type={'date'}
                  label={'დამთავრების რიცხვი'}
                  name={'endDateExperiences'}
                  styleType={'normal'}
                  placeholder={''}
                  register={register('endDateExperiences', {
                    required: {
                      value: true,
                      message: '',
                    },
                  })}
                />
              </div>
            </div>
            <div className=" mb-14">
              <Textarea
                rows={5}
                label={'აღწერა'}
                name={'descriptionExperiences'}
                placeholder={'როლი თანამდებობაზე და ზოგადი აღწერა'}
                register={register('descriptionExperiences', {
                  // required: {
                  //   value: true,
                  //   message: '',
                  // },
                })}
              />
            </div>

            <hr className=" mb-11" />
          </>
        )
      })}
      <button
        onClick={addFormHandler}
        className=" font-Helvetica flex justify-center items-center bg-[#62A1EB] h-12 w-[289px] rounded font-medium text-[#FFFFFF] text-base leading-5"
        type="button"
      >
        მეტი გამოცდილების დამატება
      </button>
    </form>
  )
}

export default ExperiencesForm
