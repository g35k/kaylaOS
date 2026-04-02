import '../components/factsWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function FunFactsWindow({ onClose }) {
  return (
    <div className="funFactsOverlay" onClick={onClose}>
      <div
        className="funFactsWindow"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="funFactsTitleBar">
          <div className="funFactsTrafficLights">
            <button
              className="funFactsTrafficBtn funFactsTrafficClose"
              onClick={onClose}
              title="Close"
            />
            <button className="funFactsTrafficBtn funFactsTrafficMinimize" title="Minimize" />
            <button className="funFactsTrafficBtn funFactsTrafficZoom" title="Zoom" />
          </div>
          <span className="funFactsTitleText">
            <FontAwesomeIcon icon={faStar} className="funFactsTitleIcon" />
            Fun Facts
          </span>
          <div className="funFactsTitleSpacer" />
        </div>

        {/* Content */}
        <div className="funFactsWindowContent">
          {/* Fun facts content goes here */}
        </div>

        {/* Resize grip (decorative) */}
        <div className="funFactsResizeGrip" />
      </div>
    </div>
  )
}
