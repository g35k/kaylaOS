import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import BottomNav from '../components/bottom/bottomNav'
import '../components/resume.css'

export default function Resume() {
  return (
    <>
      <Navbar />
      <div className="finderBody">
        <Sidebar />
        <div className="finderContent resumeContent">
          <div className="resumeToolbar">
            <div className="resumeToolbarLeft">
              <span className="resumeFilename">
                📄 resume.pdf
              </span>
            </div>
            <div className="resumeToolbarRight">
              <a
                href="/assets/resume.pdf"
                download
                className="resumeDownloadBtn"
              >
                Download
              </a>
            </div>
          </div>
          <div className="resumeViewerWrapper">
            <iframe
              src="/assets/resume.pdf"
              className="resumeIframe"
              title="Resume"
            />
          </div>
        </div>
      </div>
      <BottomNav itemCount={1} />
    </>
  )
}