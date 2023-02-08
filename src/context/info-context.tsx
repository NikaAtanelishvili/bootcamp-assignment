import React, { ReactNode, useState } from 'react'

interface InfoContextType {
  name: string
  lastname: string
  image: string
  aboutme: string
  email: string
  phoneNumber: string

  position: []
  employer: []
  startDateExperiences: []
  endDateExperiences: []
  descriptionExperiences: []

  school: []
  degree: []
  endDateEducation: []
  descriptionEducation: []

  infoHandler: any
}

interface InfoHandlerProps {
  name: string
  value: string
}

export const InfoContext = React.createContext<InfoContextType>({
  name: '',
  lastname: '',
  image: '',
  aboutme: '',
  email: '',
  phoneNumber: '',

  position: [],
  employer: [],
  startDateExperiences: [],
  endDateExperiences: [],
  descriptionExperiences: [],

  school: [],
  degree: [],
  endDateEducation: [],
  descriptionEducation: [],

  infoHandler: () => {},
})

export const InfoContextProvider: React.FC<{ children: ReactNode }> = props => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [aboutme, setAboutme] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const [position, setPosition] = useState<any>([])
  const [employer, setEmployer] = useState<any>([])
  const [startDateExperiences, setStartDateExperiences] = useState<any>([])
  const [endDateExperiences, setEndDateExperiences] = useState<any>([])
  const [descriptionExperiences, setDescriptionExperiences] = useState<any>([])

  const [school, setSchool] = useState<any>([])
  const [degree, setDegree] = useState<any>([])
  const [endDateEducation, setEndDateEducation] = useState<any>([])
  const [descriptionEducation, setDescriptionEducation] = useState<any>([])

  const infoHandler = (props: InfoHandlerProps) => {
    props.name === 'name' && setName(props.value)
    props.name === 'email' && setEmail(props.value)
    props.name === 'image' && setImage(props.value)
    props.name === 'aboutme' && setAboutme(props.value)
    props.name === 'lastname' && setLastname(props.value)
    props.name === 'phoneNumber' && setPhoneNumber(props.value)

    props.name === 'position' && setPosition(position.push(props.value))
    props.name === 'employer' && setEmployer(employer.push(props.value))
    props.name === 'startDateExperiences' &&
      setStartDateExperiences(startDateExperiences.push(props.value))
    props.name === 'endDateExperiences' &&
      setEndDateExperiences(endDateExperiences.push(props.value))
    props.name === 'descriptionExperiences' &&
      setDescriptionExperiences(descriptionExperiences.push(props.value))

    props.name === 'school' && setSchool(school.push(props.value))
    props.name === 'degree' && setDegree(degree.push(props.value))
    props.name === 'endDateEducation' &&
      setEndDateEducation(endDateEducation.push(props.value))
    props.name === 'descriptionEducation' &&
      setDescriptionEducation(descriptionEducation.push(props.value))
  }

  const contextValue: InfoContextType = {
    name: name,
    lastname: lastname,
    image: image,
    aboutme: aboutme,
    email: email,
    phoneNumber: phoneNumber,

    position: position,
    employer: employer,
    startDateExperiences: startDateExperiences,
    endDateExperiences: endDateExperiences,
    descriptionExperiences: descriptionExperiences,

    school: school,
    degree: degree,
    endDateEducation: endDateEducation,
    descriptionEducation: descriptionEducation,

    infoHandler: infoHandler,
  }

  return (
    <InfoContext.Provider value={contextValue}>
      {props.children}
    </InfoContext.Provider>
  )
}
