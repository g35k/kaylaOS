import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Welcome from './pages/welcome'
import AboutMe from './pages/aboutMe/aboutMe'
import Projects from './pages/projects/projects'
import Resume from './pages/resume'
import Email from './pages/email'
import ProjectOneWIndow from './pages/projects/projectOneWindow'
import ProjectTwoWIndow from './pages/projects/projectTwoWindow'
import ProjectThreeWIndow from './pages/projects/projectThreeWindow'
import ProjectFourWIndow from './pages/projects/projectFourWindow'
import ProjectFiveWIndow from './pages/projects/projectFiveWindow'

function App() {
  return (
    <Router>
      <div className="finderWindow">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/email" element={<Email />} />
          <Route path="/project-one" element={<ProjectOneWIndow />} />
          <Route path="/project-two" element={<ProjectTwoWIndow />} />
          <Route path="/project-three" element={<ProjectThreeWIndow />} />
          <Route path="/project-four" element={<ProjectFourWIndow />} />
          <Route path="/project-five" element={<ProjectFiveWIndow />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App