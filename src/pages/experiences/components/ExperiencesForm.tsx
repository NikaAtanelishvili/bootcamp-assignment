import { Input } from 'components'
import { InfoContext } from 'context'
import { nanoid } from 'nanoid'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const ExperiencesForm: React.FC<{ formCountHandler: any }> = props => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<any>({ mode: 'all' })

  const [formCount, setFormCount] = useState<number>(1)
  const infoCtx = useContext(InfoContext)

  useEffect(() => {
    if (localStorage.getItem('experiences')) {
      const storedValues = JSON.parse(localStorage.getItem('experiences')!)

      for (let [name, value] of Object.entries(storedValues)) {
        setValue(name, value)
      }
    }

    if (localStorage.getItem('experiencesFormCount')) {
      setFormCount(Number(localStorage.getItem('experiencesFormCount')))
    }
  }, [setValue])

  document.onvisibilitychange = () => {
    const values = getValues()

    infoCtx.experiences.forEach((_, i) => {
      values[`description${i}`] = infoCtx.experiences[i].description
    })

    localStorage.setItem('experiences', JSON.stringify(values))
    localStorage.setItem('experiencesFormCount', formCount.toString())
  }

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
      {Array.from(Array(formCount)).map((_, i: number) => {
        return (
          <div key={nanoid()}>
            {/* position */}
            <div className=" mb-8">
              <div className=" mb-2">
                <Input
                  value={''}
                  formCount={i}
                  type={'text'}
                  isSubmitted={isSubmitted}
                  errors={errors[`position${i}`]}
                  label={'თანამდებობა'}
                  name={`position${i}`}
                  styleType={'long'}
                  placeholder={'დეველოპერი, დიზაინერი, ა.შ.'}
                  register={register(`position${i}`, {
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
            {/* employer */}
            <div className=" mb-8">
              <div className=" mb-2">
                <Input
                  value={''}
                  formCount={i}
                  isSubmitted={isSubmitted}
                  errors={errors[`employer${i}`]}
                  type={'text'}
                  label={'დამსაქმებელი'}
                  name={`employer${i}`}
                  styleType={'long'}
                  placeholder={'დამსაქმებელი'}
                  register={register(`employer${i}`, {
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
            {/* Start date - Due date */}
            <div className="flex flex-row w-full justify-between mb-8">
              {/* Start date */}
              <div className=" w-[46%]">
                <Input
                  value={''}
                  formCount={i}
                  isSubmitted={isSubmitted}
                  errors={errors[`startDateExperiences${i}`]}
                  type={'date'}
                  label={'დაწყების რიცხვი'}
                  name={`startDateExperiences${i}`}
                  styleType={'normal'}
                  placeholder={''}
                  register={register(`startDateExperiences${i}`, {
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
                  isSubmitted={isSubmitted}
                  errors={errors[`endDateExperiences${i}`]}
                  type={'date'}
                  label={'დამთავრების რიცხვი'}
                  name={`endDateExperiences${i}`}
                  styleType={'normal'}
                  placeholder={''}
                  register={register(`endDateExperiences${i}`, {
                    required: {
                      value: true,
                      message: '',
                    },
                  })}
                />
              </div>
            </div>
            {/* Description */}
            <div className=" mb-14">
              <div className="flex flex-col">
                <label
                  className={` font-Helvetica font-medium text-[#000000] text-base leading-[21px] mb-2 ${
                    errors[`descriptionExperiences${i}`] &&
                    isSubmitted &&
                    'text-[#E52F2F]'
                  }`}
                  htmlFor={`descriptionExperiences${i}`}
                >
                  აღწერა
                </label>
                <textarea
                  className={`focus:outline-none focus:border-2 resize-none bg-[#FFFFFF] border border-[#BCBCBC] rounded font-Helvetica font-normal placeholder-[#00000099] w-full text-base leading-[21px] pl-4 pt-3 ${
                    !errors[`descriptionExperiences${i}`] &&
                    !isSubmitted &&
                    'focus:outline-none focus:border-2'
                  } ${
                    errors[`descriptionExperiences${i}`] &&
                    isSubmitted &&
                    'border-[#EF5050] focus:border'
                  }
                ${
                  !errors[`descriptionExperiences${i}`] &&
                  isSubmitted &&
                  'border-[#98E37E]'
                }`}
                  id={`descriptionExperiences${i}`}
                  placeholder={'როლი თანამდებობაზე და ზოგადი აღწერა'}
                  {...register(`descriptionExperiences${i}`, {
                    required: {
                      value: true,
                      message: '',
                    },
                    onChange(e) {
                      infoCtx.infoHandler({
                        name: `descriptionExperiences${i}`,
                        value: e.target.value,
                        formCount: i,
                      })
                    },
                  })}
                  rows={5}
                />
              </div>
            </div>
            <hr className=" mb-11" />
          </div>
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
