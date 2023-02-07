import { EducationForm } from './components'
import { FormLayout } from 'components'
import { useState } from 'react'

const Education = () => {
  const [formCount, setFormCount] = useState<number>(1)

  const formCountHandler = (formCount: number) => {
    return setFormCount(formCount)
  }
  return (
    <FormLayout
      formTitle={'განათლება'}
      page={3}
      formCount={formCount}
      form={'education'}
      back={'/experiences'}
      to={'/resume'}
    >
      <EducationForm formCountHandler={formCountHandler} />
    </FormLayout>
  )
}

export default Education
