import { Education, Experiences, Home, PersonalInfo } from 'pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personalinfo" element={<PersonalInfo />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  )
}

export default App
