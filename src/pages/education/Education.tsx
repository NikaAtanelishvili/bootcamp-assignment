import { EducationForm } from './components'
import { FormLayout, ResumeLayout } from 'components'
import { useState } from 'react'

const Education = () => {
  const [formCount, setFormCount] = useState<number>(1)

  const formCountHandler = (formCount: number) => {
    return setFormCount(formCount)
  }
  return (
    <div className="flex flex-row w-full h-screen">
      <div>
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
      </div>
      <ResumeLayout />
    </div>
  )
}

export default Education
