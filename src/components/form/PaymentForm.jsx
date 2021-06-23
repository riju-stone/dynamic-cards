import React from "react"
import "./Form.css"
import PaymentCard from "../card/PaymentCard"

function PaymentForm () {
    return(
        <div className="form-wrapper">
            <PaymentCard/>
            <div className="form-container"></div>
        </div>
    )
}

export default PaymentForm