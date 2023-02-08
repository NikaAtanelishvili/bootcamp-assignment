import { FormLayout, ResumeLayout } from 'components'
import { PersonalInfoForm } from './components'

const PersonalInfo = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <div>
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
      </div>
      <ResumeLayout />
    </div>
  )
}

export default PersonalInfo
