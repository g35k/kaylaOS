import '../components/projectWindow.css'
import { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'

export default function ProjectWindow({ project, onClose }) {
  const windowRef = useRef(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const resizeOrigin = useRef({ x: 0, y: 0, width: 0, height: 0 })
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 900, height: 620 })
  const [dragging, setDragging] = useState(false)
  const [resizing, setResizing] = useState(false)

  function getWindowLimits() {
    return {
      minWidth: 700,
      minHeight: 480,
      maxWidth: Math.floor(window.innerWidth * 0.7),
      maxHeight: Math.floor(window.innerHeight * 0.7),
    }
  }

  useEffect(() => {
    const { minWidth, minHeight, maxWidth, maxHeight } = getWindowLimits()
    const width = Math.max(minWidth, Math.min(900, maxWidth))
    const height = Math.max(minHeight, Math.min(620, maxHeight))
    setSize({ width, height })
    setPos({
      x: (window.innerWidth - width) / 2,
      y: (window.innerHeight - height) / 2,
    })
  }, [])

  useEffect(() => {
    function onViewportResize() {
      const { minWidth, minHeight, maxWidth, maxHeight } = getWindowLimits()
      setSize(prev => ({
        width: Math.max(minWidth, Math.min(prev.width, maxWidth)),
        height: Math.max(minHeight, Math.min(prev.height, maxHeight)),
      }))
    }

    window.addEventListener('resize', onViewportResize)
    return () => window.removeEventListener('resize', onViewportResize)
  }, [])

  function onMouseDown(e) {
    if (e.target.closest('.projWinBtn') || e.target.closest('.projWinResizeGrip')) return
    setDragging(true)
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    }
  }

  function onResizeMouseDown(e) {
    e.preventDefault()
    e.stopPropagation()
    setResizing(true)
    resizeOrigin.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    }
  }

  useEffect(() => {
    function onMouseMove(e) {
      if (dragging) {
        setPos({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        })
        return
      }

      if (!resizing) return

      const { minWidth, minHeight, maxWidth, maxHeight } = getWindowLimits()
      const widthDelta = e.clientX - resizeOrigin.current.x
      const heightDelta = e.clientY - resizeOrigin.current.y
      const nextWidth = Math.min(
        maxWidth,
        Math.max(minWidth, resizeOrigin.current.width + widthDelta),
      )
      const nextHeight = Math.min(
        maxHeight,
        Math.max(minHeight, resizeOrigin.current.height + heightDelta),
      )

      setSize({
        width: nextWidth,
        height: nextHeight,
      })
    }
    function onMouseUp() {
      setDragging(false)
      setResizing(false)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [dragging, resizing])

  return (
    <div className="projWinOverlay" onClick={onClose}>
      <div
        ref={windowRef}
        className="projWin"
        style={{ left: pos.x, top: pos.y, width: size.width, height: size.height }}
        onClick={e => e.stopPropagation()}
      >
        {/* title bar */}
        <div
          className="projWinTitleBar"
          onMouseDown={onMouseDown}
        >
          <div className="projWinTrafficLights">
            <button className="projWinBtn projWinClose" onClick={onClose} />
            <button className="projWinBtn projWinMinimize" />
            <button className="projWinBtn projWinZoom" />
          </div>
          <span className="projWinTitle">
            <FontAwesomeIcon icon={faDisplay} className="projWinTitleIcon" />
            {project.name}
          </span>
          <div className="projWinTitleSpacer" />
        </div>

        {/* content */}
        <div className="projWinBody">

          {/* top: name + status */}
          <div className="projWinHeader">
            <h1 className="projWinName">{project.name}</h1>
            {project.status && (
              <span className={`projWinStatus projWinStatus--${project.status}`}>
                {project.status === 'inProgress' ? 'In Progress' : 'Archived'}
              </span>
            )}
          </div>

          {/* description */}
          <p className="projWinDesc">{project.description}</p>

          {/* two col: stack + role */}
          <div className="projWinMeta">
            <div className="projWinMetaCol">
              <div className="projWinLabel">Tech Stack</div>
              <div className="projWinTags">
                {project.stack.map(tag => (
                  <span key={tag} className="projWinTag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="projWinMetaCol">
              <div className="projWinLabel">My Role</div>
              <p className="projWinRole">{project.role}</p>
            </div>
          </div>

          {/* screenshot */}
          <div className="projWinImgWrap">
            {project.image
              ? <img src={project.image} alt={project.name} className="projWinImg" />
              : <div className="projWinImgPlaceholder">screenshot / demo gif</div>
            }
          </div>

          {/* buttons */}
          <div className="projWinBtns">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                className="projWinAquaBtn projWinAquaBtn--primary">
                View Live
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="projWinAquaBtn projWinAquaBtn--secondary">
                GitHub
              </a>
            )}
          </div>

        </div>
        <div className="projWinResizeGrip" onMouseDown={onResizeMouseDown} />
      </div>
    </div>
  )
}
