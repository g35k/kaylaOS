import './sidebar.css'
import { useState } from 'react'
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
    heading: 'Favorites',
    items: [
      { id: 'about', label: 'About Me', icon: faUser },
      { id: 'projects', label: 'Projects', icon: faFolderOpen },
      { id: 'resume', label: 'Resume', icon: faFileLines },
    ],
  },
  {
    heading: 'Contact Me',
    items: [
      { id: 'email', label: 'Email', icon: faEnvelope },
      { id: 'github', label: 'GitHub', icon: faGithub },
      { id: 'linkedin', label: 'LinkedIn', icon: faLinkedin },
    ],
  },
  {
    heading: 'Places',
    items: [
      { id: 'home', label: 'Home', icon: faHouse },
    ],
  },
]

export default function Sidebar() {
  const [activeId, setActiveId] = useState('home')

  return (
    <div className="sidebar">
      {sections.map((section) => (
        <div className="sidebarSection" key={section.heading}>
          <div className="sidebarSectionHeader">{section.heading}</div>
          {section.items.map(item => (
            <div
              key={item.id}
              className={`sidebarItem ${activeId === item.id ? 'active' : ''}`}
              onClick={() => setActiveId(item.id)}
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
  )
}