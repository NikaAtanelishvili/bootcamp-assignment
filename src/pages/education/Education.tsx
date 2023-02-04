import { EducationForm } from './components'
import { FormLayout } from 'components'

const Education = () => {
  return (
    <FormLayout
      formTitle={'განათლება'}
      page={2}
      back={'/education'}
      to={'/resume'}
    >
      <EducationForm />
    </FormLayout>
  )
}

export default Education
