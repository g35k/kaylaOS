import '../../components/projects/projectThreeWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export default function projectThreeWindow({ onClose }) {
  return (
    <div className="projectThreeOverlay" onClick={onClose}>
      <div
        className="projectThreeWindow"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="projectThreeTitleBar">
          <div className="projectThreeTrafficLights">
            <button
              className="projectThreeTrafficBtn projectThreeTrafficClose"
              onClick={onClose}
              title="Close"
            />
            <button
              className="projectThreeTrafficBtn projectThreeTrafficMinimize"
              title="Minimize"
            />
            <button
              className="projectThreeTrafficBtn projectThreeTrafficZoom"
              title="Zoom"
            />
          </div>

          <span className="projectThreeTitleText">
            <FontAwesomeIcon icon={faFolderOpen} className="projectThreeTitleIcon" />
            Project Three
          </span>

          <div className="projectThreeTitleSpacer" />
        </div>

        {/* Content */}
        <div className="projectThreeWindowContent">
          <div className="projectThreeIntro">
            <h1 className="projectThreeHeading">Project Three</h1>
            <p className="projectThreeSubtext">
              Add your project overview, screenshots, links, and writeup here.
            </p>
          </div>

          <section className="projectThreeSection">
            <h2 className="projectThreeSectionTitle">Overview</h2>
            <p className="projectThreeBodyText">
              Write a short description of what this project is, what it does,
              and what role you played in it.
            </p>
          </section>

          <section className="projectThreeSection">
            <h2 className="projectThreeSectionTitle">Tools Used</h2>
            <p className="projectThreeBodyText">
              Add your stack here, such as React, JavaScript, CSS, Figma, or anything else.
            </p>
          </section>

          <section className="projectThreeSection">
            <h2 className="projectThreeSectionTitle">Highlights</h2>
            <p className="projectThreeBodyText">
              Add notable features, design decisions, challenges, or outcomes here.
            </p>
          </section>
        </div>

        {/* Resize grip */}
        <div className="projectThreeResizeGrip" />
      </div>
    </div>
  )
}