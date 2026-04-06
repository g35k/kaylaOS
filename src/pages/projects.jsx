import { useRef, useState, useEffect } from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import BottomNav from '../components/bottom/bottomNav'
import ProjectWindow from './projectWindow'
import '../components/projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faPlay, faDisplay, faHeart } from '@fortawesome/free-solid-svg-icons'

const mainProjects = [
  {
    id: 'senso',
    name: 'SENSO',
    icon: faDisplay,
    kind: 'Application',
    status: 'inProgress',
    description: 'Addressing low literacy rates among the visually impaired community, SENSO is a handheld Braille learning tool that teaches literacy through simple lessons and tactile input with sensory and auditory feedback. Won 1st place in open innovation at Hornet Hacks 4.0.',
    stack: ['React', 'Flask', 'Python', 'Raspberry Pi', 'SQL', 'JavaScript', 'CSS'],
    role: 'Founder · Project Manager · Scrum Master · Full Stack Developer',
    liveLink: null,
    github: 'https://github.com/g35k',
    image: null,
  },
  {
    id: 'floorahep',
    name: 'FlooraHEP',
    icon: faDisplay,
    kind: 'Application',
    status: 'inProgress',
    description: 'Developing the Floora HEP digital platform to enhance quality and consistency of client care. Includes a client mobile application (iOS & Android) and an admin dashboard. Launching on iOS App Store in late April 2026.',
    stack: ['React', 'React Native', 'Supabase', 'Vitest', 'Jest', 'PostgreSQL', 'TypeScript', 'CSS'],
    role: 'Full Stack Developer · Integrator',
    liveLink: null,
    github: 'https://github.com/g35k',
    image: null,
  },
  {
    id: 'handitdown',
    name: 'Hand It Down',
    icon: faDisplay,
    kind: 'Application',
    status: 'archived',
    description: 'An online platform facilitating material and textbook exchanges within one university system, alleviating financial burden and increasing accessibility for college students. Won 1st place in sustainability at a 48-hour hackathon.',
    stack: ['React', 'JavaScript'],
    role: 'Founder · Project Manager · Frontend Developer',
    liveLink: 'https://your-live-link.com',
    github: 'https://github.com/g35k',
    image: null,
  },
  {
    id: 'futuresparks',
    name: 'Future Sparks',
    icon: faDisplay,
    kind: 'Application',
    status: 'archived',
    description: 'An interactive, kid-friendly web app teaching children about the United Nations\' Sustainable Development Goals through short descriptions and AI-augmented mini-games. Built in one week for Hornet Hacks 2.0.',
    stack: ['React', 'Django', 'Python', 'JavaScript', 'CSS', 'HTML'],
    role: 'Founder · Project Manager · UI/UX Designer · Frontend Developer',
    liveLink: null,
    github: 'https://github.com/g35k',
    image: null,
  },
  {
    id: 'deltatrack',
    name: 'Delta Track',
    icon: faDisplay,
    kind: 'Application',
    status: 'archived',
    description: 'An expense tracker website helping users manage their finances better.',
    stack: ['JavaScript', 'CSS', 'HTML'],
    role: 'Developer',
    liveLink: null,
    github: null,
    image: null,
  },
]

const loveCalculator = {
  id: 'lovecalculator',
  name: 'Love Calculator',
  icon: faHeart,
  kind: 'Application',
  status: 'archived',
  description: 'A fun Valentine\'s Day project — enter two names and find out your compatibility score. Built for laughs.',
  stack: ['React', 'JavaScript', 'CSS'],
  role: 'Sole Developer',
  liveLink: null,
  github: 'https://github.com/g35k',
  image: null,
}

const ROW_HEIGHT = 28

export default function Projects() {
  const contentRef = useRef(null)
  const [totalRows, setTotalRows] = useState(20)
  const [openProject, setOpenProject] = useState(null)
  const [folderOpen, setFolderOpen] = useState(false)

  useEffect(() => {
    function calculate() {
      if (contentRef.current) {
        const available = contentRef.current.clientHeight - 25
        const rows = Math.ceil(available / ROW_HEIGHT)
        const itemCount = mainProjects.length + 1 + (folderOpen ? 1 : 0)
        setTotalRows(Math.max(rows, itemCount))
      }
    }
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [folderOpen])

  function handleRowClick(item) {
    if (item.isFolder) {
      setFolderOpen(prev => !prev)
      return
    }
    setOpenProject(item)
  }

  const visibleRows = [
    ...mainProjects,
    {
      id: 'justforfun',
      name: 'just for fun',
      icon: faFolder,
      kind: 'Folder',
      isFolder: true,
    },
    ...(folderOpen ? [{ ...loveCalculator, isNested: true }] : []),
  ]

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
              const item = visibleRows[i]
              const isAlt = i % 2 === 0

              if (item) {
                return (
                  <div
                    key={item.id}
                    className={`projectsRow ${isAlt ? 'projectsRowAlt' : ''}`}
                    onClick={() => handleRowClick(item)}
                    style={item.isNested ? { animation: 'projectsRowAquaUnfold 0.22s cubic-bezier(0.2, 0.9, 0.22, 1)' } : {}}
                  >
                    <span className="projectsRowName">
                      {item.isFolder ? (
                        <FontAwesomeIcon
                          icon={faPlay}
                          className={`projectsRowChevron ${folderOpen ? 'projectsRowChevronOpen' : ''}`}
                        />
                      ) : (
                        <span className="projectsRowChevronPlaceholder" />
                      )}
                      {item.isNested && <span className="projectsRowNestedIndent" />}
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={
                          item.isFolder
                            ? 'projectsRowFolder'
                            : item.id === 'lovecalculator'
                            ? 'projectsRowHeart'
                            : 'projectsRowApp'
                        }
                      />
                      {item.name}
                    </span>
                    <span className="projectsRowDate">--</span>
                    <span className="projectsRowSize">--</span>
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

      <BottomNav itemCount={mainProjects.length + 1} />

      {openProject && (
        <ProjectWindow
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </>
  )
}
