import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import '../components/welcome.css'

export default function Welcome() {
  return (
    <>
      <Navbar />
      <div className="finderBody">
        <Sidebar />
        <div className="finderContent welcomeContent">
          <h1 className="welcomeTitle">Welcome to KaylaOS</h1>
          <p className="welcomeSubtitle">click an item in the sidebar to begin</p>
        </div>
      </div>
    </>
  )
}