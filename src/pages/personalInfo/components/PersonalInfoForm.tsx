import { Input } from 'components'
import { InfoContext } from 'context'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FileInput from './FileInput'

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
    handleSubmit,

    formState: { errors, isSubmitted },
  } = useForm<PersonalInfoType>({ mode: 'onChange' })

  const infoCtx = useContext(InfoContext)
  const navigate = useNavigate()

  return (
    <form
      id="personalinfo"
      onSubmit={handleSubmit(data => {
        console.log(data)

        return navigate('/experiences')
      })}
      className="flex flex-col"
    >
      <div className="flex flex-row w-full justify-between mb-14">
        {/* Name */}
        <div className=" w-[46%]">
          <div className=" mb-2">
            <Input
              value={''}
              isSubmitted={isSubmitted}
              errors={errors['name']}
              type={'text'}
              label={'სახელი'}
              name={'name'}
              styleType={'normal'}
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
              formCount={undefined}
            />
          </div>
          <p className=" font-Helvetica font-light text-sm text-[#2E2E2E] leading-5">
            მინიმუმ ორი ასო, ქართული ასოები
          </p>
        </div>

        {/* Lastname */}
        <div className=" w-[46%]">
          <div className=" mb-2">
            <Input
              value={''}
              formCount={undefined}
              isSubmitted={isSubmitted}
              errors={errors['lastname']}
              type={'text'}
              label={'გვარი'}
              name={'lastname'}
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
          <p className=" font-Helvetica font-light text-sm text-[#2E2E2E] leading-5">
            მინიმუმ ორი ასო, ქართული ასოები
          </p>
        </div>
      </div>

      {/* Image */}
      <div className=" mb-12">
        <FileInput
          formCount={undefined}
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
      <div className=" mb-8">
        <div className="flex flex-col">
          <label
            className={` font-Helvetica font-medium text-[#000000] text-base leading-[21px] mb-2 ${
              errors['aboutme'] && isSubmitted && 'text-[#E52F2F]'
            }`}
            htmlFor={'aboutme'}
          >
            ჩემ შესახებ (არასავალდებულო)
          </label>
          <textarea
            className={`focus:outline-none focus:border-2 resize-none bg-[#FFFFFF] border border-[#BCBCBC] rounded font-Helvetica font-normal placeholder-[#00000099] w-full text-base leading-[21px] pl-4 pt-3 ${
              !errors['aboutme'] &&
              !isSubmitted &&
              'focus:outline-none focus:border-2'
            } ${
              errors['aboutme'] &&
              isSubmitted &&
              'border-[#EF5050] focus:border'
            }
          ${!errors['aboutme'] && isSubmitted && 'border-[#98E37E]'}`}
            id={`aboutme`}
            placeholder={'ზოგადი ინფო შენ შესახებ'}
            rows={4}
            {...(register(`aboutme`),
            {
              onChange(e) {
                infoCtx.infoHandler({
                  name: `aboutme`,
                  value: e.target.value,
                  formCount: undefined,
                })
              },
            })}
          />
        </div>
      </div>

      {/* Email */}
      <div className=" mb-7">
        <div className=" mb-2">
          <Input
            value={''}
            formCount={undefined}
            isSubmitted={isSubmitted}
            errors={errors['email']}
            type={'text'}
            label={'ელ.ფოსტა'}
            name={'email'}
            styleType={'long'}
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
        <p className=" font-Helvetica font-light text-sm text-[#2E2E2E] leading-5">
          უნდა მთავრდებოდეს @redberry.ge-თი
        </p>
      </div>

      {/* Phone number */}
      <div>
        <div className=" mb-2">
          <Input
            value={''}
            formCount={undefined}
            isSubmitted={isSubmitted}
            errors={errors['phoneNumber']}
            type={'text'}
            label={'მობილურის ნომერი'}
            name={'phoneNumber'}
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
        <p className=" font-Helvetica font-light text-sm text-[#2E2E2E] leading-5">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
      </div>
    </form>
  )
}

export default PersonalInfoForm
