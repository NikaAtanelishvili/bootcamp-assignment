import { FormInput } from 'components'
import { useForm } from 'react-hook-form'

interface EducationFormType {
  school: string
  degree: string
  endDate: Date
  description: string
}

const EducationForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<EducationFormType>()

  return (
    <div>
      {/* School */}
      <div>
        <FormInput
          type={'text'}
          label={'სასწავლებელი'}
          name={'school'}
          styleType={'long'}
          id={'school'}
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
        {errors['school'] && (
          <p className=" absolute font-light text-sm text-[#2E2E2E] leading-5">
            {errors.school?.message}
          </p>
        )}
      </div>
      {/* Degrees */}
      <div>{/* WIP */}</div>
      {/* end Date */}
      <div>
        <FormInput
          type={'date'}
          label={'დამთავრების რიცხვი'}
          name={'endDate'}
          styleType={'normal'}
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
      {/* Description */}
      <div>
        <FormInput
          type={'textarea'}
          label={'აღწერა'}
          name={'description'}
          styleType={'large'}
          id={'description'}
          placeholder={'განათლების აღწერა'}
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
        სხვა სასწავლებლის დამატება
      </button>
    </div>
  )
}

export default EducationForm
