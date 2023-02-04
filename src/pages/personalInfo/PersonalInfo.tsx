import { FormLayout } from 'components'
import { PersonalInfoForm } from './components'

const PersonalInfo = () => {
  return (
    <FormLayout
      formTitle={'პირადი ინფო'}
      page={1}
      back={null}
      to={'/experiences'}
    >
      <PersonalInfoForm />
    </FormLayout>
  )
}

export default PersonalInfo
