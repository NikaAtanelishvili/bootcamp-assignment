import React, { ReactNode, useEffect, useState } from 'react'

interface InfoContextType {
  name: string
  surname: string
  image: any
  about_me: string
  email: string
  phone_number: string

  experiences:
    | {
        position: string
        employer: string
        start_date: string
        due_date: string
        description: string
      }[]
    | []

  educations:
    | {
        institute: string
        degree_id: number | null
        due_date: string
        description: string
      }[]
    | []

  infoHandler: any
  clearDataHandler: any
}

interface InfoHandlerProps {
  name: string
  value: any
  formCount: any
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
      degree_id: null,
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
  const [image, setImage] = useState<any>()
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

    if (Number(props.name.slice(-1)) !== undefined) {
      // Position
      props.name.includes('position') &&
        setExperiences((prevState: any) =>
          setInfoHandler(
            prevState,
            { position: props.value },
            Number(props.name.slice(-1))
          )
        )

      // Employer
      props.name.includes('employer') &&
        setExperiences((prevState: any) =>
          setInfoHandler(
            prevState,
            { employer: props.value },
            Number(props.name.slice(-1))
          )
        )

      // Start date experiences
      props.name.includes('startDateExperiences') &&
        setExperiences((prevState: any) =>
          setInfoHandler(
            prevState,
            { start_date: props.value },
            Number(props.name.slice(-1))
          )
        )

      // end date experiences
      props.name.includes('endDateExperiences') &&
        setExperiences((prevState: any) =>
          setInfoHandler(
            prevState,
            { due_date: props.value },
            Number(props.name.slice(-1))
          )
        )

      // description experiences
      props.name.includes('descriptionExperiences') &&
        setExperiences((prevState: any) =>
          setInfoHandler(
            prevState,
            { description: props.value },
            Number(props.name.slice(-1))
          )
        )

      // School
      props.name.includes('school') &&
        setEducations((prevState: any) =>
          setInfoHandler(prevState, { institute: props.value }, Number(props.name.slice(-1)))
        )

      // Degree
      props.name.includes('degree') &&
        setEducations((prevState: any) =>
          setInfoHandler(prevState, { degree_id: props.value }, Number(props.name.slice(-1)))
        )

      // End date education
      props.name.includes('endDateEducation') &&
        setEducations((prevState: any) =>
          setInfoHandler(prevState, { due_date: props.value }, Number(props.name.slice(-1)))
        )

      // Description education
      props.name.includes('descriptionEducation') &&
        setEducations((prevState: any) =>
          setInfoHandler(
            prevState,
            { description: props.value },
            Number(props.name.slice(-1))
          )
        )
    }
  }

  const clearDataHandler = () => {
    setName('')
    setLastname('')
    setImage(null)
    setAboutme('')
    setPhoneNumber('')
    setEmail('')
    setExperiences([])
    setEducations([])
  }
  useEffect(() => {
    if (localStorage.getItem('personalInfo')) {
      const personalInfo = JSON.parse(localStorage.getItem('personalInfo')!)
      for (let [name, value] of Object.entries(personalInfo!)) {
        const props = {
          name: name,
          value: value,
          formCount: undefined,
        }
        infoHandler(props)
      }
    }

    if (localStorage.getItem('experiences')) {
      const experiences = JSON.parse(localStorage.getItem('experiences')!)
      for (let [name, value] of Object.entries(experiences!)) {
        const props = {
          name: name,
          value: value,
          formCount: Number(name.slice(-1)),
        }
        infoHandler(props)
      }
    }

    if (localStorage.getItem('educations')) {
      const educations = JSON.parse(localStorage.getItem('educations')!)
      for (let [name, value] of Object.entries(educations!)) {
        const props = {
          name: name,
          value: value,
          formCount: Number(name.slice(-1)),
        }
        infoHandler(props)
      }
    }
  }, [])

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
