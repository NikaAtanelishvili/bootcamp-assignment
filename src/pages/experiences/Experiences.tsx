import { FormLayout, ResumeLayout } from 'components'
import { useState } from 'react'
import { ExperiencesForm } from './components'

const Experiences = () => {
  const [formCount, setFormCount] = useState<number>(1)

  const formCountHandler = (formCount: number) => {
    return setFormCount(prevState => formCount)
  }

  return (
    <div className="flex flex-row w-full h-screen">
      <div>
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
      </div>
      <ResumeLayout />
    </div>
  )
}

export default Experiences
