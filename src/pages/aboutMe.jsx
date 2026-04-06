import { useRef, useState, useEffect } from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import BottomNav from '../components/bottom/bottomNav'
import '../components/aboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDisplay,
  faFolder,
  faPlay,
  faUser,
  faStar,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons'

const aboutItems = [
  { id: 'bio', name: 'bio', date: '--', size: '--', kind: 'Application', icon: faDisplay },
  { id: 'timeline', name: 'timeline', date: '--', size: '--', kind: 'Application', icon: faDisplay },
  { id: 'funFacts', name: 'fun facts', date: '--', size: '--', kind: 'Application', icon: faDisplay },
]

const studyAbroadItem = {
  id: 'study-abroad-entry',
  name: 'coming soon',
  date: '--',
  size: '--',
  kind: 'Application',
  icon: faDisplay,
  isNested: true,
}

const ROW_HEIGHT = 28
const BIO_FACTS = [
  'Senior in Computer Science',
  '2x hackathon winner, 4x hackathon participant',
  'U.S. Department of State Gilman Scholar',
  'One year abroad in Yokohama, Japan',
  'Passionate about building useful software with human-centered design',
  'Focused on frontend engineering, product thinking, and accessibility',
]
const TIMELINE_ITEMS = [
  { year: '2022', text: 'Started Computer Science studies and began coding projects.' },
  { year: '2023', text: 'Participated in multiple hackathons and built first full-stack apps.' },
  { year: '2024', text: 'Awarded Gilman Scholarship and studied abroad in Yokohama, Japan.' },
  { year: '2025', text: 'Expanded leadership in team projects and won hackathon awards.' },
  { year: '2026', text: 'Senior year focused on portfolio-ready products and impact projects.' },
]
const FUN_FACT_ITEMS = [
  'I enjoy turning ideas into polished, interactive interfaces.',
  'Hackathons are one of my favorite ways to learn quickly.',
  'I love blending creativity with technical execution.',
  'I am especially interested in accessibility-focused products.',
]
const STUDY_ABROAD_ITEMS = [
  'Completed a year abroad at Yokohama National University in 2023.',
  'Focused on global perspective, language growth, and cross-cultural collaboration.',
  'Built resilience and independence by adapting to a new academic environment.',
  'Expanded my perspective on human-centered design in international contexts.',
]

function AboutPopup({ item, onClose }) {
  const windowRef = useRef(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const resizeOrigin = useRef({ x: 0, y: 0, width: 0, height: 0 })
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 900, height: 620 })
  const [dragging, setDragging] = useState(false)
  const [resizing, setResizing] = useState(false)

  function getWindowLimits() {
    return {
      minWidth: 700,
      minHeight: 480,
      maxWidth: Math.floor(window.innerWidth * 0.7),
      maxHeight: Math.floor(window.innerHeight * 0.7),
    }
  }

  useEffect(() => {
    const { minWidth, minHeight, maxWidth, maxHeight } = getWindowLimits()
    const width = Math.max(minWidth, Math.min(900, maxWidth))
    const height = Math.max(minHeight, Math.min(620, maxHeight))
    setSize({ width, height })
    setPos({
      x: (window.innerWidth - width) / 2,
      y: (window.innerHeight - height) / 2,
    })
  }, [])

  useEffect(() => {
    function onViewportResize() {
      const { minWidth, minHeight, maxWidth, maxHeight } = getWindowLimits()
      setSize(prev => ({
        width: Math.max(minWidth, Math.min(prev.width, maxWidth)),
        height: Math.max(minHeight, Math.min(prev.height, maxHeight)),
      }))
    }

    window.addEventListener('resize', onViewportResize)
    return () => window.removeEventListener('resize', onViewportResize)
  }, [])

  function onMouseDown(e) {
    if (e.target.closest('.aboutPopupBtn') || e.target.closest('.aboutPopupResizeGrip')) return
    setDragging(true)
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    }
  }

  function onResizeMouseDown(e) {
    e.preventDefault()
    e.stopPropagation()
    setResizing(true)
    resizeOrigin.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    }
  }

  useEffect(() => {
    function onMouseMove(e) {
      if (dragging) {
        setPos({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        })
        return
      }

      if (!resizing) return

      const { minWidth, minHeight, maxWidth, maxHeight } = getWindowLimits()
      const widthDelta = e.clientX - resizeOrigin.current.x
      const heightDelta = e.clientY - resizeOrigin.current.y
      const nextWidth = Math.min(maxWidth, Math.max(minWidth, resizeOrigin.current.width + widthDelta))
      const nextHeight = Math.min(maxHeight, Math.max(minHeight, resizeOrigin.current.height + heightDelta))

      setSize({ width: nextWidth, height: nextHeight })
    }

    function onMouseUp() {
      setDragging(false)
      setResizing(false)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [dragging, resizing])

  function renderPopupBody() {
    if (item.id === 'bio') {
      return (
        <div className="aboutPopupSection">
          <div className="aboutPopupBioHeader">
            <div className="aboutPopupAvatar">
              <FontAwesomeIcon icon={faUser} className="aboutPopupAvatarIcon" />
            </div>
            <div className="aboutPopupBioNameBlock">
              <h1 className="aboutPopupBioName">Kayla Garibay</h1>
              <p className="aboutPopupBioTitle">Frontend & CS Student</p>
            </div>
          </div>
          <ul className="aboutPopupList">
            {BIO_FACTS.map((fact, index) => (
              <li key={index} className="aboutPopupListItem">{fact}</li>
            ))}
          </ul>
        </div>
      )
    }

    if (item.id === 'timeline') {
      return (
        <div className="aboutPopupSection">
          <h2 className="aboutPopupHeading">Timeline</h2>
          <div className="aboutPopupTimelineList">
            {TIMELINE_ITEMS.map(entry => (
              <div key={entry.year} className="aboutPopupTimelineItem">
                <div className="aboutPopupTimelineYear">{entry.year}</div>
                <div className="aboutPopupTimelineText">{entry.text}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (item.id === 'study-abroad-entry') {
      return (
        <div className="aboutPopupSection">
          <h2 className="aboutPopupHeading">Yokohama National University</h2>
          <p className="aboutPopupSubheading">2023</p>
          <ul className="aboutPopupList">
            {STUDY_ABROAD_ITEMS.map((fact, index) => (
              <li key={index} className="aboutPopupListItem">{fact}</li>
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="aboutPopupSection">
        <h2 className="aboutPopupHeading">Fun Facts</h2>
        <ul className="aboutPopupList">
          {FUN_FACT_ITEMS.map((fact, index) => (
            <li key={index} className="aboutPopupListItem">{fact}</li>
          ))}
        </ul>
      </div>
    )
  }

  const titleIcon = item.id === 'bio'
    ? faUser
    : item.id === 'timeline'
    ? faClockRotateLeft
    : item.id === 'study-abroad-entry'
    ? faDisplay
    : faStar
  const titleText = item.id === 'bio'
    ? 'About Me'
    : item.id === 'timeline'
    ? 'Timeline'
    : item.id === 'study-abroad-entry'
    ? 'Yokohama National University, 2023'
    : 'Fun Facts'

  return (
    <div className="aboutPopupOverlay" onClick={onClose}>
      <div
        ref={windowRef}
        className="aboutPopupWindow"
        style={{ left: pos.x, top: pos.y, width: size.width, height: size.height }}
        onClick={e => e.stopPropagation()}
      >
        <div className="aboutPopupTitleBar" onMouseDown={onMouseDown}>
          <div className="aboutPopupTrafficLights">
            <button className="aboutPopupBtn aboutPopupClose" onClick={onClose} />
            <button className="aboutPopupBtn aboutPopupMinimize" />
            <button className="aboutPopupBtn aboutPopupZoom" />
          </div>
          <span className="aboutPopupTitle">
            <FontAwesomeIcon icon={titleIcon} className="aboutPopupTitleIcon" />
            {titleText}
          </span>
          <div className="aboutPopupTitleSpacer" />
        </div>
        <div className="aboutPopupBody">{renderPopupBody()}</div>
        <div className="aboutPopupResizeGrip" onMouseDown={onResizeMouseDown} />
      </div>
    </div>
  )
}

export default function AboutMe() {
  const contentRef = useRef(null)
  const [totalRows, setTotalRows] = useState(20)
  const [openWindow, setOpenWindow] = useState(null)
  const [studyAbroadOpen, setStudyAbroadOpen] = useState(false)

  useEffect(() => {
    function calculate() {
      if (contentRef.current) {
        const available = contentRef.current.clientHeight - 25
        const rows = Math.ceil(available / ROW_HEIGHT)
        const itemCount = aboutItems.length + 1 + (studyAbroadOpen ? 1 : 0)
        setTotalRows(Math.max(rows, itemCount))
      }
    }
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [studyAbroadOpen])

  function handleRowClick(item) {
    if (item?.isFolder) {
      setStudyAbroadOpen(prev => !prev)
      return
    }
    if (item?.id) setOpenWindow(item)
  }

  const visibleRows = [
    ...aboutItems,
    {
      id: 'study-abroad-folder',
      name: 'study abroad',
      date: '--',
      size: '--',
      kind: 'Folder',
      icon: faFolder,
      isFolder: true,
    },
    ...(studyAbroadOpen ? [studyAbroadItem] : []),
  ]

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
              const item = visibleRows[i]
              const isAlt = i % 2 === 0
              if (item) {
                return (
                  <div
                    key={item.id}
                    className={`aboutRow ${isAlt ? 'aboutRowAlt' : ''}`}
                    onClick={() => handleRowClick(item)}
                    style={item.isNested ? { animation: 'aboutRowAquaUnfold 0.22s cubic-bezier(0.2, 0.9, 0.22, 1)' } : {}}
                  >
                    <span className="aboutRowName">
                      {item.isFolder ? (
                        <FontAwesomeIcon
                          icon={faPlay}
                          className={`aboutRowChevron ${studyAbroadOpen ? 'aboutRowChevronOpen' : ''}`}
                        />
                      ) : (
                        <span className="aboutRowChevronPlaceholder" />
                      )}
                      {item.isNested && <span className="aboutRowNestedIndent" />}
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={item.isFolder ? 'aboutRowFolder' : 'aboutRowApp'}
                      />
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

      {openWindow && <AboutPopup item={openWindow} onClose={() => setOpenWindow(null)} />}

      <BottomNav itemCount={aboutItems.length + 1} />
    </>
  )
}
