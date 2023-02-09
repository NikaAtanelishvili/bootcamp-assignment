import { Education, Experiences, Home, PersonalInfo, Resume } from 'pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personalinfo" element={<PersonalInfo />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/education" element={<Education />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}

export default App
