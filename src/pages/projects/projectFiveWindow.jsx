import '../../components/projects/projectFiveWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export default function projectFiveWindow({ onClose }) {
  return (
    <div className="projectFiveOverlay" onClick={onClose}>
      <div
        className="projectFiveWindow"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="projectFiveTitleBar">
          <div className="projectFiveTrafficLights">
            <button
              className="projectFiveTrafficBtn projectFiveTrafficClose"
              onClick={onClose}
              title="Close"
            />
            <button
              className="projectFiveTrafficBtn projectFiveTrafficMinimize"
              title="Minimize"
            />
            <button
              className="projectFiveTrafficBtn projectFiveTrafficZoom"
              title="Zoom"
            />
          </div>

          <span className="projectFiveTitleText">
            <FontAwesomeIcon icon={faFolderOpen} className="projectFiveTitleIcon" />
            Project Five
          </span>

          <div className="projectFiveTitleSpacer" />
        </div>

        {/* Content */}
        <div className="projectFiveWindowContent">
          <div className="projectFiveIntro">
            <h1 className="projectFiveHeading">Project Five</h1>
            <p className="projectFiveSubtext">
              Add your project overview, screenshots, links, and writeup here.
            </p>
          </div>

          <section className="projectFiveSection">
            <h2 className="projectFiveSectionTitle">Overview</h2>
            <p className="projectFiveBodyText">
              Write a short description of what this project is, what it does,
              and what role you played in it.
            </p>
          </section>

          <section className="projectFiveSection">
            <h2 className="projectFiveSectionTitle">Tools Used</h2>
            <p className="projectFiveBodyText">
              Add your stack here, such as React, JavaScript, CSS, Figma, or anything else.
            </p>
          </section>

          <section className="projectFiveSection">
            <h2 className="projectFiveSectionTitle">Highlights</h2>
            <p className="projectFiveBodyText">
              Add notable features, design decisions, challenges, or outcomes here.
            </p>
          </section>
        </div>

        {/* Resize grip */}
        <div className="projectFiveResizeGrip" />
      </div>
    </div>
  )
}