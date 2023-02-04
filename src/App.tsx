import { Home, PersonalInfo } from 'pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personalinfo" element={<PersonalInfo />} />
    </Routes>
  )
}

export default App
