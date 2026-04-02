import { useRef, useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import BottomNav from '../../components/bottom/bottomNav'
import BioWindow from './bioWindow'
import FactsWindow from './factsWindow'
import TimelineWindow from './timelineWindow'
import '../components/aboutMe/aboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faPlay } from '@fortawesome/free-solid-svg-icons'

const aboutItems = [
  { id: 'bio',      name: 'bio',       date: '--', size: '--', kind: 'Folder' },
  { id: 'timeline', name: 'timeline',  date: '--', size: '--', kind: 'Folder' },
  { id: 'funFacts', name: 'fun facts', date: '--', size: '--', kind: 'Folder' },
]

const ROW_HEIGHT = 28

export default function AboutMe() {
  const contentRef = useRef(null)
  const [totalRows, setTotalRows] = useState(20)
  const [openWindow, setOpenWindow] = useState(null) // 'bio' | 'timeline' | 'funFacts' | null

  useEffect(() => {
    function calculate() {
      if (contentRef.current) {
        const available = contentRef.current.clientHeight - 25
        const rows = Math.ceil(available / ROW_HEIGHT)
        setTotalRows(Math.max(rows, aboutItems.length))
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
          <div className="aboutContentHeader">
            <span className="aboutHeaderName">Name</span>
            <span className="aboutHeaderDate">Date Modified</span>
            <span className="aboutHeaderSize">Size</span>
            <span className="aboutHeaderKind">Kind</span>
          </div>
          <div className="aboutContentBody">
            {[...Array(totalRows)].map((_, i) => {
              const item = aboutItems[i]
              const isAlt = i % 2 === 0
              if (item) {
                return (
                  <div
                    key={item.id}
                    className={`aboutRow ${isAlt ? 'aboutRowAlt' : ''}`}
                    onClick={() => handleRowClick(item)}
                  >
                    <span className="aboutRowName">
                      <FontAwesomeIcon icon={faPlay} className="aboutRowChevron" />
                      <FontAwesomeIcon icon={faFolder} className="aboutRowFolder" />
                      {item.name}
                    </span>
                    <span className="aboutRowDate">{item.date}</span>
                    <span className="aboutRowSize">{item.size}</span>
                    <span className="aboutRowKind">{item.kind}</span>
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

      {/* Floating windows */}
      {openWindow === 'bio' && (
        <BioWindow onClose={() => setOpenWindow(null)} />
      )}

      {/* Floating windows */}
      {openWindow === 'timeline' && (
        <TimelineWindow onClose={() => setOpenWindow(null)} />
      )}

      {/* Floating windows */}
      {openWindow === 'funFacts' && (
        <FactsWindow onClose={() => setOpenWindow(null)} />
      )}
      

      <BottomNav itemCount={3} />
    </>
  )
}
