import { useRef, useState, useEffect } from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import BottomNav from '../components/bottom/bottomNav'
import '../components/projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faPlay } from '@fortawesome/free-solid-svg-icons'

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
                  className={`aboutRow ${isAlt ? 'aboutRowAlt' : ''}`}
                />
              )
            })}
          </div>
        </div>
      </div>
      <BottomNav itemCount={5} />
    </>
  )
}