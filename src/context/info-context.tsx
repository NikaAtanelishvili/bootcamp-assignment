import React, { ReactNode, useState } from 'react'

interface InfoContextType {
  name: string
  lastname: string
  image: string
  aboutme: string
  email: string
  phoneNumber: string

  experiences:
    | [
        {
          position: string
          employer: string
          startDateExperiences: string
          endDateExperiences: string
          descriptionExperiences: string
        }
      ]
    | []

  educations:
    | [
        {
          school: string
          degree: string
          endDateEducation: string
          descriptionEducation: string
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

/*
experiences: [{
  position: ''
  empluer: ''
  startDate: ''
  endDate: ''
  descriptipn: ''
}]
*/

export const InfoContext = React.createContext<InfoContextType>({
  name: '',
  lastname: '',
  image: '',
  aboutme: '',
  email: '',
  phoneNumber: '',

  experiences: [
    {
      position: '',
      employer: '',
      startDateExperiences: '',
      endDateExperiences: '',
      descriptionExperiences: '',
    },
  ],

  educations: [
    {
      school: '',
      degree: '',
      endDateEducation: '',
      descriptionEducation: '',
    },
  ],

  infoHandler: () => {},
  clearDataHandler: () => {},
})

const setExperiencesHandler = (
  prevState: any,
  value: any,
  formCount: number
) => {
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

  const [educations, setEducations] = useState<[]>([])

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
          setExperiencesHandler(
            prevState,
            { position: props.value },
            props.formCount
          )
        )

      // Employer
      props.name.includes('employer') &&
        setExperiences((prevState: any) =>
          setExperiencesHandler(
            prevState,
            { employer: props.value },
            props.formCount
          )
        )

      // Start date experiences
      props.name.includes('startDateExperiences') &&
        setExperiences((prevState: any) =>
          setExperiencesHandler(
            prevState,
            { startDateExperiences: props.value },
            props.formCount
          )
        )

      // end date experiences
      props.name.includes('endDateExperiences') &&
        setExperiences((prevState: any) =>
          setExperiencesHandler(
            prevState,
            { endDateExperiences: props.value },
            props.formCount
          )
        )
      // description experiences
      props.name.includes('descriptionExperiences') &&
        setExperiences((prevState: any) =>
          setExperiencesHandler(
            prevState,
            { descriptionExperiences: props.value },
            props.formCount
          )
        )

      // School
      props.name.includes('school') &&
        setExperiences((prevState: any) =>
          setExperiencesHandler(
            prevState,
            { school: props.value },
            props.formCount
          )
        )

      // Degree
      props.name.includes('degree') &&
        setExperiences((prevState: any) =>
          setExperiencesHandler(
            prevState,
            { degree: props.value },
            props.formCount
          )
        )
      
      // End date education
      props.name.includes('endDateEducation') &&
        setExperiences((prevState: any) =>
          setExperiencesHandler(
            prevState,
            { endDateEducation: props.value },
            props.formCount
          )
        )

      // Description education
      props.name.includes('descriptionEducation') &&
        setExperiences((prevState: any) =>
          setExperiencesHandler(
            prevState,
            { descriptionEducation: props.value },
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
    lastname: lastname,
    image: image,
    aboutme: aboutme,
    email: email,
    phoneNumber: phoneNumber,

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
