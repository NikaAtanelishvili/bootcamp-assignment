import { EducationForm } from './components'
import { FormLayout } from 'components'

const Education = () => {
  return (
    <FormLayout
      formTitle={'განათლება'}
      page={3}
      back={'/experiences'}
      to={'/resume'}
    >
      <EducationForm />
    </FormLayout>
  )
}

export default Education
