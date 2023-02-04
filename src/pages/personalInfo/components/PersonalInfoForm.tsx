import { FormInput } from 'components'
import { useForm } from 'react-hook-form'

interface PersonalInfoType {
  name: string
  lastname: string
  image: string
  aboutme: string
  email: string
  phoneNumber: string
}

const PersonalInfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<PersonalInfoType>()

  return (
    <div className='flex flex-col'>
      <div className="flex flex-row justify-between">
        {/* Name */}
        <div>
          <FormInput
            type={'text'}
            label={'სახელი'}
            name={'name'}
            id={'name'}
            placeholder={'ანზორ'}
            register={register('name', {
              required: {
                value: true,
                message: 'მინიმუმ ორი ასო, ქართული ასოები',
              },
              minLength: {
                value: 2,
                message: 'მინიმუმ ორი ასო, ქართული ასოები',
              },
              pattern: {
                value: /^[\u10A0-\u10FF]+$/i,
                message: 'მინიმუმ ორი ასო, ქართული ასოები',
              },
            })}
          />
          {errors['name'] && (
            <p className=" absolute font-light text-sm text-[#2E2E2E] leading-5">
              {errors.name?.message}
            </p>
          )}
        </div>
        {/* Lastname */}
        <div>
          <FormInput
            type={'text'}
            label={'გვარი'}
            name={'lastname'}
            id={'lastname'}
            placeholder={'მუმლაძე'}
            register={register('lastname', {
              required: {
                value: true,
                message: 'მინიმუმ ორი ასო, ქართული ასოები',
              },
              minLength: {
                value: 2,
                message: 'მინიმუმ ორი ასო, ქართული ასოები',
              },
              pattern: {
                value: /^[\u10A0-\u10FF]+$/i,
                message: 'მინიმუმ ორი ასო, ქართული ასოები',
              },
            })}
          />
          {errors['lastname'] && (
            <p className=" absolute font-light text-sm text-[#2E2E2E] leading-5">
              {errors.lastname?.message}
            </p>
          )}
        </div>
      </div>
      {/* Image */}
      <div>
        <FormInput
          type={'file'}
          label={'პირადი ფოტოს ატვირთვა'}
          name={'image'}
          id={'image'}
          placeholder={''}
          register={register('image', {
            required: {
              value: true,
              message: '',
            },
          })}
        />
      </div>
      {/* {About me} */}
      <div>
        <FormInput
          type={'textarea'}
          label={'ჩემ შესახებ (არასავალდებულო)'}
          name={'aboutme'}
          id={'aboutme'}
          placeholder={'ზოგადი ინფო შენ შესახებ'}
          register={register('aboutme')}
        />
        {errors['aboutme'] && (
          <p className=" absolute font-light text-sm text-[#2E2E2E] leading-5">
            {errors.aboutme?.message}
          </p>
        )}
      </div>
      {/* Email */}
      <div>
        <FormInput
          type={'text'}
          label={'ელ.ფოსტა'}
          name={'email'}
          id={'email'}
          placeholder={'anzorr666@redberry.ge'}
          register={register('email', {
            required: {
              value: true,
              message: 'უნდა მთავრდებოდეს @redberry.ge-თი',
            },
            pattern: {
              value: /.*@redberry.ge$/i,
              message: 'უნდა მთავრდებოდეს @redberry.ge-თი',
            },
          })}
        />
        {errors['email'] && (
          <p className=" absolute font-light text-sm text-[#2E2E2E] leading-5">
            {errors.email?.message}
          </p>
        )}
      </div>
      {/* Phone number */}
      <div>
        <FormInput
          type={'text'}
          label={'მობილურის ნომერი'}
          name={'phoneNumber'}
          id={'phoneNumber'}
          placeholder={'+995 551 12 34 56'}
          register={register('phoneNumber', {
            required: {
              value: true,
              message: 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს',
            },
          })}
        />
        {errors['phoneNumber'] && (
          <p className=" absolute font-light text-sm text-[#2E2E2E] leading-5">
            {errors.phoneNumber?.message}
          </p>
        )}
      </div>
    </div>
  )
}

export default PersonalInfoForm
