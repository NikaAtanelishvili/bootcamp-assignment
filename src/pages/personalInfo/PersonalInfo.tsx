import { FormLayout } from 'components'
import { PersonalInfoForm } from './components'

const PersonalInfo = () => {
  return (
    <FormLayout
      formTitle={'პირადი ინფო'}
      page={1}
      formCount={1}
      back={null}
      form={'personalinfo'}
      to={'/experiences'}
    >
      <PersonalInfoForm />
    </FormLayout>
  )
}

export default PersonalInfo
