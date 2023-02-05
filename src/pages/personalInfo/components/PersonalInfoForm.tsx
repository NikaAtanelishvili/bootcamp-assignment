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
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        {/* Name */}
        <div>
          <div className=" mb-2">
            <FormInput
              type={'text'}
              label={'სახელი'}
              name={'name'}
              styleType={'normal'}
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
          </div>
          <p className=" font-light text-sm text-[#2E2E2E] leading-5">
            მინიმუმ ორი ასო, ქართული ასოები'
          </p>
        </div>

        {/* Lastname */}
        <div>
          <div className=" mb-2">
            <FormInput
              type={'text'}
              label={'გვარი'}
              name={'lastname'}
              id={'lastname'}
              styleType={'normal'}
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
          </div>
          <p className=" font-light text-sm text-[#2E2E2E] leading-5">
            მინიმუმ ორი ასო, ქართული ასოები'
          </p>
        </div>
      </div>

      {/* Image */}
      <div className=" mb-12">
        <FormInput
          type={'file'}
          label={'პირადი ფოტოს ატვირთვა'}
          name={'image'}
          id={'image'}
          styleType={'normal'}
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
      <div className=" mb-8">
        <FormInput
          type={'textarea'}
          label={'ჩემ შესახებ (არასავალდებულო)'}
          name={'aboutme'}
          styleType={'large'}
          id={'aboutme'}
          placeholder={'ზოგადი ინფო შენ შესახებ'}
          register={register('aboutme')}
        />
      </div>

      {/* Email */}
      <div className=" mb-7">
        <div className=" mb-2">
          <FormInput
            type={'text'}
            label={'ელ.ფოსტა'}
            name={'email'}
            styleType={'long'}
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
        </div>
        <p className=" font-light text-sm text-[#2E2E2E] leading-5">
          უნდა მთავრდებოდეს @redberry.ge-თი
        </p>
      </div>

      {/* Phone number */}
      <div>
        <div className=" mb-2">
          <FormInput
            type={'text'}
            label={'მობილურის ნომერი'}
            name={'phoneNumber'}
            id={'phoneNumber'}
            styleType={'long'}
            placeholder={'+995 551 12 34 56'}
            register={register('phoneNumber', {
              required: {
                value: true,
                message: 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს',
              },
            })}
          />
        </div>
        <p className=" font-light text-sm text-[#2E2E2E] leading-5">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
      </div>
    </div>
  )
}

export default PersonalInfoForm
