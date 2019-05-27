import React from "react"
import ReactDom from "react-dom"
import IMG from './public/img.png'

ReactDom.render(
    (
        <div>
            <h1>hello, world!</h1>
            <img src={IMG} alt="image"/>
        </div>
    ),
    document.getElementById("root")
)