import "./Copyright.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCopyright} from "@fortawesome/free-regular-svg-icons"

const Copyright = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col copyright-container">
            <FontAwesomeIcon icon={faCopyright} spin className="copyright-icon"/>
            <h2 className="owner">Tangilur Rahman</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Copyright