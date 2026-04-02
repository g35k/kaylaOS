import '../../components/projects/projectTwoWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export default function projectTwoWindow({ onClose }) {
  return (
    <div className="projectTwoOverlay" onClick={onClose}>
      <div
        className="projectTwoWindow"
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="projectTwoTitleBar">
          <div className="projectTwoTrafficLights">
            <button
              className="projectTwoTrafficBtn projectTwoTrafficClose"
              onClick={onClose}
              title="Close"
            />
            <button
              className="projectTwoTrafficBtn projectTwoTrafficMinimize"
              title="Minimize"
            />
            <button
              className="projectTwoTrafficBtn projectTwoTrafficZoom"
              title="Zoom"
            />
          </div>

          <span className="projectTwoTitleText">
            <FontAwesomeIcon icon={faFolderOpen} className="projectTwoTitleIcon" />
            Project Two
          </span>

          <div className="projectTwoTitleSpacer" />
        </div>

        {/* Content */}
        <div className="projectTwoWindowContent">
          <div className="projectTwoIntro">
            <h1 className="projectTwoHeading">Project Two</h1>
            <p className="projectTwoSubtext">
              Add your project overview, screenshots, links, and writeup here.
            </p>
          </div>

          <section className="projectTwoSection">
            <h2 className="projectTwoSectionTitle">Overview</h2>
            <p className="projectTwoBodyText">
              Write a short description of what this project is, what it does,
              and what role you played in it.
            </p>
          </section>

          <section className="projectTwoSection">
            <h2 className="projectTwoSectionTitle">Tools Used</h2>
            <p className="projectTwoBodyText">
              Add your stack here, such as React, JavaScript, CSS, Figma, or anything else.
            </p>
          </section>

          <section className="projectTwoSection">
            <h2 className="projectTwoSectionTitle">Highlights</h2>
            <p className="projectTwoBodyText">
              Add notable features, design decisions, challenges, or outcomes here.
            </p>
          </section>
        </div>

        {/* Resize grip */}
        <div className="projectTwoResizeGrip" />
      </div>
    </div>
  )
}