import React from "react"
import "../scss/PortfolioObject.scss"

function PortfolioObject() {
    return(
        <div className="">
            <section className="portfolioContainer">
                <div className="column column__left">
                    <div className="portfolioItem">One</div>
                    <div className="portfolioItem">Two</div>
                </div>
                <div className="column column__right">
                    <div className="portfolioItem">Three</div>
                    <div className="portfolioItem">Four</div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioObject