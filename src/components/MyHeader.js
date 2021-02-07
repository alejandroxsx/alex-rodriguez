import React from "react"
import '../scss/MyHeader.scss'

function MyHeader() {
    return(
        <header>
            <h1>Alex Rodriguez</h1>
            <div className="navigation">
                <a>About</a>
                <a>Blog</a>
                <a>Contact</a>
            </div>
        </header>
    )
}

export default MyHeader