import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Welcome from './pages/welcome'

function App() {
  return (
    <Router>
      <div className="finderWindow">
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App