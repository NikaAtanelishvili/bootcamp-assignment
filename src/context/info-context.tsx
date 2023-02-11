import React, { ReactNode, useState } from 'react'

interface InfoContextType {
  name: string
  surname: string
  image: string
  about_me: string
  email: string
  phone_number: string

  experiences:
    | [
        {
          position: string
          employer: string
          start_date: string
          due_date: string
          description: string
        }
      ]
    | []

  educations:
    | [
        {
          institute: string
          degree: string
          due_date: string
          description: string
        }
      ]
    | []

  infoHandler: any
  clearDataHandler: any
}

interface InfoHandlerProps {
  name: string
  value: string
  formCount: number
}

export const InfoContext = React.createContext<InfoContextType>({
  name: '',
  surname: '',
  image: '',
  about_me: '',
  email: '',
  phone_number: '',

  experiences: [
    {
      position: '',
      employer: '',
      start_date: '',
      due_date: '',
      description: '',
    },
  ],

  educations: [
    {
      institute: '',
      degree: '',
      due_date: '',
      description: '',
    },
  ],

  infoHandler: () => {},
  clearDataHandler: () => {},
})

const setInfoHandler = (prevState: any, value: any, formCount: number) => {
  prevState[formCount] = { ...prevState[formCount], ...value }
  return [...prevState].flat()
}

export const InfoContextProvider: React.FC<{ children: ReactNode }> = props => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [aboutme, setAboutme] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const [experiences, setExperiences] = useState<any>([])

  const [educations, setEducations] = useState<any>([])

  const infoHandler = (props: InfoHandlerProps) => {
    props.name === 'name' && setName(props.value)
    props.name === 'email' && setEmail(props.value)
    props.name === 'image' && setImage(props.value)
    props.name === 'aboutme' && setAboutme(props.value)
    props.name === 'lastname' && setLastname(props.value)
    props.name === 'phoneNumber' && setPhoneNumber(props.value)

    if (props.formCount !== undefined) {
      // Position
      props.name.includes('position') &&
        setExperiences((prevState: any) =>
          setInfoHandler(prevState, { position: props.value }, props.formCount)
        )

      // Employer
      props.name.includes('employer') &&
        setExperiences((prevState: any) =>
          setInfoHandler(prevState, { employer: props.value }, props.formCount)
        )

      // Start date experiences
      props.name.includes('startDateExperiences') &&
        setExperiences((prevState: any) =>
          setInfoHandler(
            prevState,
            { start_date: props.value },
            props.formCount
          )
        )

      // end date experiences
      props.name.includes('endDateExperiences') &&
        setExperiences((prevState: any) =>
          setInfoHandler(prevState, { due_date: props.value }, props.formCount)
        )
        
      // description experiences
      props.name.includes('descriptionExperiences') &&
        setExperiences((prevState: any) =>
          setInfoHandler(
            prevState,
            { description: props.value },
            props.formCount
          )
        )

      // School
      props.name.includes('school') &&
        setEducations((prevState: any) =>
          setInfoHandler(prevState, { institute: props.value }, props.formCount)
        )

      // Degree
      props.name.includes('degree') &&
        setEducations((prevState: any) =>
          setInfoHandler(prevState, { degree: props.value }, props.formCount)
        )

      // End date education
      props.name.includes('endDateEducation') &&
        setEducations((prevState: any) =>
          setInfoHandler(prevState, { due_date: props.value }, props.formCount)
        )

      // Description education
      props.name.includes('descriptionEducation') &&
        setEducations((prevState: any) =>
          setInfoHandler(
            prevState,
            { description: props.value },
            props.formCount
          )
        )
    }
  }

  const clearDataHandler = () => {
    setName('')
    setLastname('')
    setImage('')
    setAboutme('')
    setPhoneNumber('')

    setExperiences([])
    setEducations([])
  }

  const contextValue: InfoContextType = {
    name: name,
    surname: lastname,
    image: image,
    about_me: aboutme,
    email: email,
    phone_number: phoneNumber,

    experiences: experiences,

    educations: educations,

    infoHandler: infoHandler,
    clearDataHandler: clearDataHandler,
  }

  return (
    <InfoContext.Provider value={contextValue}>
      {props.children}
    </InfoContext.Provider>
  )
}
