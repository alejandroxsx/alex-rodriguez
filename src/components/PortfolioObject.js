import React from "react"
import "../scss/PortfolioObject.scss"

function PortfolioObject() {
    return(
        <div className="mainBody">
            <section>
                <div className="column">
                    <div className="portfolioObject">One</div>
                    <div className="portfolioObject">Two</div>
                </div>
                <div className="column">
                    <div className="portfolioObject">Three</div>
                    <div className="portfolioObject">Four</div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioObject