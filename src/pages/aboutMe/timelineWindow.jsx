import '../components/aboutMe/timelineWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

export default function TimelineWindow({ onClose }) {
  return (
    <div className="timelineOverlay" onClick={onClose}>
      <div
        className="timelineWindow"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="timelineTitleBar">
          <div className="timelineTrafficLights">
            <button
              className="timelineTrafficBtn timelineTrafficClose"
              onClick={onClose}
              title="Close"
            />
            <button className="timelineTrafficBtn timelineTrafficMinimize" title="Minimize" />
            <button className="timelineTrafficBtn timelineTrafficZoom" title="Zoom" />
          </div>
          <span className="timelineTitleText">
            <FontAwesomeIcon icon={faClockRotateLeft} className="timelineTitleIcon" />
            Timeline
          </span>
          <div className="timelineTitleSpacer" />
        </div>

        {/* Content */}
        <div className="timelineWindowContent">
          {/* Timeline content goes here */}
        </div>

        {/* Resize grip (decorative) */}
        <div className="timelineResizeGrip" />
      </div>
    </div>
  )
}
