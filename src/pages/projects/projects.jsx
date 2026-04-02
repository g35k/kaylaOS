import { useRef, useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import BottomNav from '../../components/bottom/bottomNav'
import '../components/aboutMe/projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faPlay } from '@fortawesome/free-solid-svg-icons'

/* placeholder window imports
import ProjectOneWindow from './ProjectOneWindow'
import ProjectTwoWindow from './ProjectTwoWindow'
import ProjectThreeWindow from './ProjectThreeWindow'
import ProjectFourWindow from './ProjectFourWindow'
import ProjectFiveWindow from './ProjectFiveWindow'
*/

const projectItems = [
  { id: 'project1', name: 'project one', date: '--', size: '--', kind: 'Folder' },
  { id: 'project2', name: 'project two', date: '--', size: '--', kind: 'Folder' },
  { id: 'project3', name: 'project three', date: '--', size: '--', kind: 'Folder' },
  { id: 'project4', name: 'project four', date: '--', size: '--', kind: 'Folder' },
  { id: 'project5', name: 'project five', date: '--', size: '--', kind: 'Folder' },
]

const ROW_HEIGHT = 28

export default function Projects() {
  const contentRef = useRef(null)
  const [totalRows, setTotalRows] = useState(20)
  const [openWindow, setOpenWindow] = useState(null) // 'project1' | 'project2' | 'project3' | 'project4' | 'project5' | null

  useEffect(() => {
    function calculate() {
      if (contentRef.current) {
        const available = contentRef.current.clientHeight - 25
        const rows = Math.ceil(available / ROW_HEIGHT)
        setTotalRows(Math.max(rows, projectItems.length))
      }
    }
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [])

  function handleRowClick(item) {
    if (item?.id) setOpenWindow(item.id)
  }

  return (
    <>
      <Navbar />
      <div className="finderBody">
        <Sidebar />
        <div className="finderContent" ref={contentRef}>
          <div className="projectsContentHeader">
            <span className="projectsHeaderName">Name</span>
            <span className="projectsHeaderDate">Date Modified</span>
            <span className="projectsHeaderSize">Size</span>
            <span className="projectsHeaderKind">Kind</span>
          </div>

          <div className="projectsContentBody">
            {[...Array(totalRows)].map((_, i) => {
              const item = projectItems[i]
              const isAlt = i % 2 === 0

              if (item) {
                return (
                  <div
                    key={item.id}
                    className={`projectsRow ${isAlt ? 'projectsRowAlt' : ''}`}
                    onClick={() => handleRowClick(item)}
                  >
                    <span className="projectsRowName">
                      <FontAwesomeIcon icon={faPlay} className="projectsRowChevron" />
                      <FontAwesomeIcon icon={faFolder} className="projectsRowFolder" />
                      {item.name}
                    </span>
                    <span className="projectsRowDate">{item.date}</span>
                    <span className="projectsRowSize">{item.size}</span>
                    <span className="projectsRowKind">{item.kind}</span>
                  </div>
                )
              }

              return (
                <div
                  key={i}
                  className={`projectsRow ${isAlt ? 'projectsRowAlt' : ''}`}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Floating windows */}
      {openWindow === 'project1' && (
        // <ProjectOneWindow onClose={() => setOpenWindow(null)} />
        <div>Project 1 Window Placeholder</div>
      )}

      {openWindow === 'project2' && (
        // <ProjectTwoWindow onClose={() => setOpenWindow(null)} />
        <div>Project 2 Window Placeholder</div>
      )}

      {openWindow === 'project3' && (
        // <ProjectThreeWindow onClose={() => setOpenWindow(null)} />
        <div>Project 3 Window Placeholder</div>
      )}

      {openWindow === 'project4' && (
        // <ProjectFourWindow onClose={() => setOpenWindow(null)} />
        <div>Project 4 Window Placeholder</div>
      )}

      {openWindow === 'project5' && (
        // <ProjectFiveWindow onClose={() => setOpenWindow(null)} />
        <div>Project 5 Window Placeholder</div>
      )}

      <BottomNav itemCount={5} />
    </>
  )
}