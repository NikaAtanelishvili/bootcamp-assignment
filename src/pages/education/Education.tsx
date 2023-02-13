import { useState } from 'react'

import { FormLayout, ResumeLayout } from 'components'
import { EducationForm } from './components'

const Education = () => {
  const [formCount, setFormCount] = useState<number>(1)

  const formCountHandler = (formCount: number) => setFormCount(formCount)

  return (
    <div className="flex flex-row w-full">
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
      <div className="h-screen">
        <ResumeLayout />
      </div>
    </div>
  )
}

export default Education
