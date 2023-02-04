import { FormLayout } from 'components'
import { PersonalInfoForm } from './components'

const PersonalInfo = () => {
  return (
    <FormLayout formTitle={'პირადი ინფო'} page={1}>
      <PersonalInfoForm />
    </FormLayout>
  )
}

export default PersonalInfo
