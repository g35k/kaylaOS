import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretLeft,
  faCaretRight,
  faTableCells,
  faBars,
  faTableColumns,
  faFilm,
  faGear,
  faEye,
  faMagnifyingGlass,
  faFolder,
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navTopRow">
        <div className="trafficLights">
          <span className="trafficLight red" />
          <span className="trafficLight orange" />
          <span className="trafficLight green" />
        </div>
        <div className="navTitle">
          <FontAwesomeIcon icon={faFolder} className="navTitleFolder" />
          KaylaOS
        </div>
      </div>

      <div className="navBottomRow">
        <div className="navLeft">
        <div className="navArrowGroup">
          <button className="navArrowBtn" disabled>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button className="navArrowBtn" disabled>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>

          <div className="navLeftGroups">
            <div className="navIconGroup">
              <button className="navIconBtn">
                <FontAwesomeIcon icon={faTableCells} />
              </button>
              <button className="navIconBtn active">
                <FontAwesomeIcon icon={faBars} />
              </button>
              <button className="navIconBtn">
                <FontAwesomeIcon icon={faTableColumns} />
              </button>
              <button className="navIconBtn">
                <FontAwesomeIcon icon={faFilm} />
              </button>
            </div>

            <div className="navIconGroup">
              <button className="navIconBtn">
                <FontAwesomeIcon icon={faTableCells} />
              </button>
            </div>
          </div>
        </div>

        <div className="navCenter">
          <div className="navIconGroupAdjacent">
            <div className="navIconGroup">
              <button className="navIconBtn">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
            <div className="navIconGroup">
              <button className="navIconBtn">
                <FontAwesomeIcon icon={faGear} />
              </button>
            </div>
          </div>
        </div>

        <div className="navRight">
          <div className="navSearch">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navSearchIcon" />
            <input
              type="text"
              
              className="navSearchInput"
            />
          </div>
        </div>
      </div>
    </div>
  )
}