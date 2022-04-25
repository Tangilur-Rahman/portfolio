import "./ProgressBar.css"


const ProgressBar = () => {
  return (
    <>

<div className="container-fluid progress-bar-container">
    <div className="row row-cols-3">
        <div className="col">
            <div className="progress blue">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">90%</div>
            </div>
            <h5>JavaScript</h5>
        </div>
 
        <div className="col">
            <div className="progress green">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">80%</div>
            </div>
            <h5>React JS</h5>
        </div>

        <div className="col">
            <div className="progress pink">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">75%</div>
            </div>
            <h5>Node JS</h5>
        </div>

        <div className="col">
            <div className="progress yellow">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">80%</div>
            </div>
            <h5>Express JS</h5>
        </div>

        <div className="col">
            <div className="progress green">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">90%</div>
            </div>
            <h5>MongoDB</h5>
        </div>

        <div className="col">
            <div className="progress orangered">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">100%</div>
            </div>
            <h5>Github</h5>
        </div>
    </div>
</div>
    </>
  )
}

export default ProgressBar