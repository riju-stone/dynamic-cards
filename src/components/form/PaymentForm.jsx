/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import "./PaymentForm.css"
import PaymentCard from "../card/PaymentCard"

function PaymentForm () {
    const [cardNumber, setCardNumber] = useState(['XXXX', 'XXXX', 'XXXX', 'XXXX'])
    const [cardOwner, setCardOwner] = useState('Card Owner Name')
    const [expMonth, setExpMonth] = useState('01')
    const [expYear, setExpYear] = useState('21')
    const [cvv, setCvv] = useState('')
    const [rotation, setRotation] = useState('')

    const showBackside = () => {
        setRotation('flip')
    }

    const showFrontside = () => {
        setRotation('')
    }

    const handleCardNumber = () => {
        console.log('Card Number Changed')
    }

    const handleCardOwner = () => {
        console.log('Card Owner Changed')
    }

    const handleExpMonth = () => {
        console.log('Exp Month Changed')
    }

    const handleExpYear = () => {
        console.log('Exp Year Changed')
    }

    const handleCvv = () => {
        console.log('Cvv Changed')
    }

    return(
        <div className="form-wrapper">
            <PaymentCard 
                rotate={rotation} 
                cardNumber = {cardNumber} 
                cardOwner={cardOwner} 
                expMonth={expMonth} 
                expYear = {expYear} 
                cvv={cvv}/>
            <div className="form-container">
                <form action="" method="post" className="form-input-container">
                    <div className="form-element">
                        <p className="form-heading">Card Number</p>
                        <input type="text" className="form-input" maxLength="16" onClick={showFrontside} onChange={handleCardNumber}/>
                    </div>

                    <div className="form-element">
                        <p className="form-heading">Card Holder Name</p>
                        <input type="text" className="form-input" onClick={showFrontside} onChange={handleCardOwner}/>
                    </div>

                    <div className="form-element-details">
                        <div className="form-element">
                            <div className="exp-element">
                                <p className="form-heading">Expiry Date</p>
                                <select name="" id="month" className="form-input exp" onClick={showFrontside} onChange={handleExpMonth}>
                                    <option value="initial" disabled selected>Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select name="" id="year" className="form-input exp" placeholder="Year" onClick={showFrontside} onChange={handleExpYear}>
                                    <option value="initial" disabled selected>Year</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-element">
                            <p className="form-heading">CVV</p>
                            <input type="password" className="form-input cvv" maxLength="3" onClick={showBackside} onChange={handleCvv}/>
                        </div>
                    </div>
                </form>
                <button className="payment-button" onClick={showFrontside}>Pay</button>
            </div>
        </div>
    )
}

export default PaymentForm