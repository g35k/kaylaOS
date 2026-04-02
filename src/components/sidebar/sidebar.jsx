import './sidebar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faFolderOpen,
  faFileLines,
  faEnvelope,
  faHouse,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const sections = [
  {
    heading: 'Places',
    items: [
      { id: 'home', label: 'Home', icon: faHouse, path: '/' },
    ],
  },
  {
    heading: 'Favorites',
    items: [
      { id: 'about',    label: 'About Me', icon: faUser,       path: '/about' },
      { id: 'projects', label: 'Projects', icon: faFolderOpen, path: '/projects' },
      { id: 'resume',   label: 'Resume',   icon: faFileLines,  path: '/resume' },
    ],
  },
  {
    heading: 'Contact Me',
    items: [
      { id: 'email',    label: 'Email',    icon: faEnvelope, path: '/email' },
      { id: 'github',   label: 'GitHub',   icon: faGithub,   path: null, external: 'https://github.com/g35k' },
      { id: 'linkedin', label: 'LinkedIn', icon: faLinkedin, path: null, external: 'https://linkedin.com/in/kaylagaribay' },
    ],
  },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeId = sections
    .flatMap(s => s.items)
    .find(item => item.path === location.pathname)?.id ?? 'home'

  function handleClick(item) {
    if (item.external) {
      window.open(item.external, '_blank', 'noopener,noreferrer')
    } else if (item.path) {
      navigate(item.path)
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebarContent">
        {sections.map((section) => (
          <div className="sidebarSection" key={section.heading}>
            <div className="sidebarSectionHeader">{section.heading}</div>
            {section.items.map(item => (
              <div
                key={item.id}
                className={`sidebarItem ${activeId === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item)}
              >
                <span className="sidebarIcon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                {item.label}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="sidebarFooter">
        <div className="sidebarFooterText">Kayla Garibay © 2026</div>
      </div>
    </div>
  )
}