import { FormLayout } from 'components'
import { ExperiencesForm } from './components'

const Experiences = () => {
  return (
    <FormLayout
      formTitle={'გამოცდილება'}
      page={2}
      form={'experiences'}
      back={'/personalinfo'}
      to={'/education'}
    >
      <ExperiencesForm />
    </FormLayout>
  )
}

export default Experiences
