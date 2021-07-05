import React from "react"
import "./PaymentCard.css"
import background from "../../../src/assets/background/18.jpg"
import discover from "../../../src/assets/types/discover.png"
import chip from "../../assets/chip.png"

function PaymentCard(){
    return( 
        <div className="card">
            <div className="card-front">
                <div className="card-background">
                    <img src={background} alt="" className="card-background-image" />
                </div>
                <div className="card-type">
                    <img src={discover} alt="card-type" className="card-type-image" />
                </div>
                <div className="card-chip">
                    <img src={chip} alt="" className="card-chip-image" />
                </div>
                <div className="card-number">
                    <span>3253</span>
                    <span id="number-gap"> </span>
                    <span>3535</span>
                    <span id="number-gap"> </span>
                    <span>3552</span>
                    <span id="number-gap"> </span>
                    <span>3535</span>
                </div>
                <div className="card-owner">
                    <span id="owner">Card Holder</span>
                    <span id="owner-name">Arighna Chakraborty</span>
                </div>
                <div className="card-exp">
                    <span id="exp">Expires</span>
                    <span id="exp-date">02/23</span>
                </div>
            </div>
            <div className="card-back">
                <div className="card-background">
                    <img src={background} alt="" className="card-background-image" />
                </div>
                <div className="card-strip"></div>
                <div className="card-cvv"></div>
                <div className="card-instructions"></div>
            </div>
        </div>
    )
}

export default PaymentCard