import { Input, Textarea } from 'components'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface ExperiencesFormType {
  position: string
  employer: string
  startDate: Date
  endDate: Date
  description: string
}

const ExperiencesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ExperiencesFormType>({ mode: 'all' })
  console.log(errors)
  const navigate = useNavigate()

  return (
    <form
      id="experiences"
      onSubmit={handleSubmit(data => {
        console.log('submited')
        return navigate('/education')
      })}
    >
      {/* Job Position */}
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

      {/* Employer */}
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

      {/* Intervals */}
      <div className="flex flex-row w-full justify-between mb-8">
        {/* Start date */}
        <div className=" w-[46%]">
          <Input
            isSubmitted={isSubmitted}
            errors={errors['startDate']}
            type={'date'}
            label={'დაწყების რიცხვი'}
            name={'startDate'}
            styleType={'normal'}
            placeholder={''}
            register={register('startDate', {
              required: {
                value: true,
                message: '',
              },
            })}
          />
        </div>
        {/* End date */}
        <div className=" w-[46%]">
          <Input
            isSubmitted={isSubmitted}
            errors={errors['endDate']}
            type={'date'}
            label={'დამთავრების რიცხვი'}
            name={'endDate'}
            styleType={'normal'}
            placeholder={''}
            register={register('endDate', {
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
        <Textarea
          rows={5}
          label={'აღწერა'}
          name={'description'}
          placeholder={'როლი თანამდებობაზე და ზოგადი აღწერა'}
          register={register('description', {
            // required: {
            //   value: true,
            //   message: '',
            // },
          })}
        />
      </div>

      <hr className=" mb-11" />

      {/* WIP */}
      <button
        className=" font-Helvetica flex justify-center items-center bg-[#62A1EB] h-12 w-[289px] rounded font-medium text-[#FFFFFF] text-base leading-5"
        type="button"
      >
        მეტი გამოცდილების დამატება
      </button>
    </form>
  )
}

export default ExperiencesForm
