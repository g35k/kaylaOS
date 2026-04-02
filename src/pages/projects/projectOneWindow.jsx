import '../../components/projects/projectOneWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export default function ProjectOneWindow({ onClose }) {
  return (
    <div className="projectOneOverlay" onClick={onClose}>
      <div
        className="projectOneWindow"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="projectOneTitleBar">
          <div className="projectOneTrafficLights">
            <button
              className="projectOneTrafficBtn projectOneTrafficClose"
              onClick={onClose}
              title="Close"
            />
            <button
              className="projectOneTrafficBtn projectOneTrafficMinimize"
              title="Minimize"
            />
            <button
              className="projectOneTrafficBtn projectOneTrafficZoom"
              title="Zoom"
            />
          </div>

          <span className="projectOneTitleText">
            <FontAwesomeIcon icon={faFolderOpen} className="projectOneTitleIcon" />
            Project One
          </span>

          <div className="projectOneTitleSpacer" />
        </div>

        {/* Content */}
        <div className="projectOneWindowContent">
          <div className="projectOneIntro">
            <h1 className="projectOneHeading">Project One</h1>
            <p className="projectOneSubtext">
              Add your project overview, screenshots, links, and writeup here.
            </p>
          </div>

          <section className="projectOneSection">
            <h2 className="projectOneSectionTitle">Overview</h2>
            <p className="projectOneBodyText">
              Write a short description of what this project is, what it does,
              and what role you played in it.
            </p>
          </section>

          <section className="projectOneSection">
            <h2 className="projectOneSectionTitle">Tools Used</h2>
            <p className="projectOneBodyText">
              Add your stack here, such as React, JavaScript, CSS, Figma, or anything else.
            </p>
          </section>

          <section className="projectOneSection">
            <h2 className="projectOneSectionTitle">Highlights</h2>
            <p className="projectOneBodyText">
              Add notable features, design decisions, challenges, or outcomes here.
            </p>
          </section>
        </div>

        {/* Resize grip */}
        <div className="projectOneResizeGrip" />
      </div>
    </div>
  )
}