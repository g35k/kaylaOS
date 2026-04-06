import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Welcome from './pages/welcome'
import AboutMe from './pages/aboutMe'
import Projects from './pages/projects'
import Resume from './pages/resume'
import Email from './pages/email'

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
        </Routes>
      </div>
    </Router>
  )
}

export default App