/* eslint-disable react/prop-types */
import React from 'react'
import "./PaymentCard.css"
import chip from "../../assets/chip.png"
import type from "../../assets/types/visa.svg"
import background from "../../assets/background/14.jpg"


const PaymentCard = ({rotate, cardNumber, cardOwner, expMonth, expYear, cvv}) => {
    return( 
        <div className="card">
            <div className={`card-inner ${rotate}`}>
                <div className="card-front">
                    <div className="card-background">
                        <img src={background} alt="" className="card-background-image" />
                    </div>
                    <div className="card-type">
                        <img src={type} alt="card-type" className="card-type-image" />
                    </div>
                    <div className="card-chip">
                        <img src={chip} alt="" className="card-chip-image" />
                    </div>
                    <div className="card-number">
                        <span>{cardNumber[0]}</span>
                        <span id="number-gap"> </span>
                        <span>{cardNumber[1]}</span>
                        <span id="number-gap"> </span>
                        <span>{cardNumber[2]}</span>
                        <span id="number-gap"> </span>
                        <span>{cardNumber[3]}</span>
                    </div>
                    <div className="card-owner">
                        <span id="owner">Card Holder</span>
                        <span id="owner-name">{cardOwner}</span>
                    </div>
                    <div className="card-exp">
                        <span id="exp">Expires</span>
                        <span id="exp-date">{expMonth} / {expYear}</span>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-background">
                        <img src={background} alt="" className="card-background-image" />
                    </div>
                    <div className="card-strip"></div>
                    <p id="authorized-signature">Authorized Signature</p>
                    <div className="card-signature"></div>
                    <p id="cvv-text">CVV</p>
                    <div className="card-cvv">{cvv}</div>
                    <div className="card-instructions"></div>
                </div>
            </div>
        </div>
    )
}

export default PaymentCard