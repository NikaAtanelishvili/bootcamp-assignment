import { FormInput } from 'components'
import { useForm } from 'react-hook-form'

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
    formState: { errors },
  } = useForm<ExperiencesFormType>()

  return (
    <div>
      {/* Job Position */}
      <div>
        <FormInput
          type={'text'}
          label={'თანამდებობა'}
          name={'position'}
          id={'position'}
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
        {errors['position'] && (
          <p className=" absolute font-light text-sm text-[#2E2E2E] leading-5">
            {errors.position?.message}
          </p>
        )}
      </div>
      {/* Employer */}
      <div>
        <FormInput
          type={'text'}
          label={'დამსაქმებელი'}
          name={'employer'}
          id={'employer'}
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
        {errors['employer'] && (
          <p className=" absolute font-light text-sm text-[#2E2E2E] leading-5">
            {errors.employer?.message}
          </p>
        )}
      </div>
      {/* Intervals */}
      <div className="flex flex-row justify-between">
        {/* Start date */}
        <div>
          <FormInput
            type={'date'}
            label={'დაწყების რიცხვი'}
            name={'startDate'}
            id={'startDate'}
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
        <div>
          <FormInput
            type={'date'}
            label={'დამთავრების რიცხვი'}
            name={'endDate'}
            id={'endDate'}
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
      <div>
        <FormInput
          type={'textarea'}
          label={'აღწერა'}
          name={'description'}
          id={'description'}
          placeholder={'როლი თანამდებობაზე და ზოგადი აღწერა'}
          register={register('description', {
            required: {
              value: true,
              message: '',
            },
          })}
        />
      </div>
      <hr />
      {/* WIP */}
      <button
        className="flex justify-center items-center bg-[#62A1EB] h-12 w-[289px] rounded font-medium text-[#FFFFFF] text-base leading-5"
        type="button"
      >
        მეტი გამოცდილების დამატება
      </button>
    </div>
  )
}

export default ExperiencesForm
