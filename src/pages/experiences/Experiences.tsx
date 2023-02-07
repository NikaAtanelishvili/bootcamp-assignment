import { FormLayout } from 'components'
import { useState } from 'react'
import { ExperiencesForm } from './components'

const Experiences = () => {
  const [formCount, setFormCount] = useState<number>(1)

  const formCountHandler = (formCount: number) => {
    return setFormCount(formCount)
  }

  return (
    <FormLayout
      formTitle={'გამოცდილება'}
      page={2}
      formCount={formCount}
      form={'experiences'}
      back={'/personalinfo'}
      to={'/education'}
    >
      <ExperiencesForm formCountHandler={formCountHandler} />
    </FormLayout>
  )
}

export default Experiences
