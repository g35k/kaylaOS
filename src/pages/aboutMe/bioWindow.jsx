import '../../components/aboutMe/bioWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const bioFacts = [
  'Senior in Computer Science',
  '2x hackathon winner, 4x hackathon participant',
  'U.S. Department of State Gilman Scholar',
  'One year abroad in Yokohama, Japan',
  'Placeholder fact five',
  'Placeholder fact six',
]

export default function BioWindow({ onClose }) {
  return (
    <div className="bioOverlay" onClick={onClose}>
      <div
        className="bioWindow"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="bioTitleBar">
          <div className="bioTrafficLights">
            <button
              className="bioTrafficBtn bioTrafficClose"
              onClick={onClose}
              title="Close"
            />
            <button className="bioTrafficBtn bioTrafficMinimize" title="Minimize" />
            <button className="bioTrafficBtn bioTrafficZoom" title="Zoom" />
          </div>
          <span className="bioTitleText">
            <FontAwesomeIcon icon={faUser} className="bioTitleIcon" />
            About Me
          </span>
          {/* spacer to balance traffic lights */}
          <div className="bioTitleSpacer" />
        </div>

        {/* Content */}
        <div className="bioWindowContent">

          {/* Header — avatar + name */}
          <div className="bioHeader">
            <div className="bioAvatar">
              <FontAwesomeIcon icon={faUser} className="bioAvatarIcon" />
            </div>
            <div className="bioNameBlock">
              <h1 className="bioName">Kayla Garibay</h1>
              <p className="bioTitle">Frontend & CS Student</p>
            </div>
          </div>

          {/* Bullet facts */}
          <ul className="bioFactsList">
            {bioFacts.map((fact, i) => (
              <li key={i} className="bioFactItem">{fact}</li>
            ))}
          </ul>

        </div>

        {/* Resize grip (decorative) */}
        <div className="bioResizeGrip" />
      </div>
    </div>
  )
}
