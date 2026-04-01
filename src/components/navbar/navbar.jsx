import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
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

        {/* left section: arrows + first two icon groups at ~1/3 */}
        <div className="navLeft">
          <button className="navArrowBtn" disabled>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="navArrowBtn" disabled>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className="navLeftGroups">
            <div className="navIconGroup">
              <button className="navIconBtn active">
                <FontAwesomeIcon icon={faTableCells} />
              </button>
              <button className="navIconBtn">
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

        {/* center: spacer to push eye+gear to true center */}
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

        {/* right: search */}
        <div className="navRight">
          <div className="navSearch">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navSearchIcon" />
            <input
              type="text"
              placeholder="Search"
              className="navSearchInput"
            />
          </div>
        </div>

      </div>
    </div>
  )
}