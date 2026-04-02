import '../../components/projects/projectFourWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export default function projectFourWindow({ onClose }) {
  return (
    <div className="projectFourOverlay" onClick={onClose}>
      <div
        className="projectFourWindow"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="projectFourTitleBar">
          <div className="projectFourTrafficLights">
            <button
              className="projectFourTrafficBtn projectFourTrafficClose"
              onClick={onClose}
              title="Close"
            />
            <button
              className="projectFourTrafficBtn projectFourTrafficMinimize"
              title="Minimize"
            />
            <button
              className="projectFourTrafficBtn projectFourTrafficZoom"
              title="Zoom"
            />
          </div>

          <span className="projectFourTitleText">
            <FontAwesomeIcon icon={faFolderOpen} className="projectFourTitleIcon" />
            Project Four
          </span>

          <div className="projectFourTitleSpacer" />
        </div>

        {/* Content */}
        <div className="projectFourWindowContent">
          <div className="projectFourIntro">
            <h1 className="projectFourHeading">Project Four</h1>
            <p className="projectFourSubtext">
              Add your project overview, screenshots, links, and writeup here.
            </p>
          </div>

          <section className="projectFourSection">
            <h2 className="projectFourSectionTitle">Overview</h2>
            <p className="projectFourBodyText">
              Write a short description of what this project is, what it does,
              and what role you played in it.
            </p>
          </section>

          <section className="projectFourSection">
            <h2 className="projectFourSectionTitle">Tools Used</h2>
            <p className="projectFourBodyText">
              Add your stack here, such as React, JavaScript, CSS, Figma, or anything else.
            </p>
          </section>

          <section className="projectFourSection">
            <h2 className="projectFourSectionTitle">Highlights</h2>
            <p className="projectFourBodyText">
              Add notable features, design decisions, challenges, or outcomes here.
            </p>
          </section>
        </div>

        {/* Resize grip */}
        <div className="projectFourResizeGrip" />
      </div>
    </div>
  )
}