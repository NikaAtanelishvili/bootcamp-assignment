import { Input, Textarea } from 'components'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface EducationFormType {
  school: string
  degree: string
  endDate: Date
  description: string
}

const EducationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<EducationFormType>({ mode: 'all' })

  const navigate = useNavigate()

  return (
    <form
      id="education"
      onSubmit={handleSubmit(data => {
        return navigate('/resume')
      })}
    >
      {/* School */}
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
            errors={errors['endDate']}
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
      <div className=" mb-11">
        <Textarea
          rows={6}
          label={'აღწერა'}
          name={'description'}
          placeholder={'განათლების აღწერა'}
          register={register('description', {
            required: {
              value: true,
              message: '',
            },
          })}
        />
      </div>

      <hr className=" mb-11" />

      {/* WIP */}
      <button
        className=" font-Helvetica flex justify-center items-center bg-[#62A1EB] h-12 w-[289px] rounded font-medium text-[#FFFFFF] text-base leading-5"
        type="button"
      >
        სხვა სასწავლებლის დამატება
      </button>
    </form>
  )
}

export default EducationForm
