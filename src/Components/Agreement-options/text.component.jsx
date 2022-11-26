import "./text.scss"



const Condition = ({ data }) => {
    const { Sender, Receiver, Amount, rate, startDate, dueDate, waiver } = data

    const amount = Amount
    const Rate = rate
    const interest = amount * Rate / 100
    const payable = Number(Amount) + interest
    const formatted = new Intl.NumberFormat('NGN', {
        style: 'currency',
        currency: "NGN"
    })
    const formattedAmount = formatted.format(amount)
    const formattedPayable = formatted.format(payable)

    return (
        <div>
            <div className="head container">
                <h1 className="Titlee">Loan Agreemment</h1>

                <section className="container-3 agreement">
                    <p className="contract">
                        This loan agreement was drafted for <span>{Sender}</span> on the <span>{startDate}</span> stating the conditions for
                        lending out money which was accepted by <span>{Receiver}</span>. This contract states that <span>{Sender}</span> disbursed
                        the sum of <span>{formattedAmount}</span>  to <span>{Receiver}</span> with an interest rate 0f <span>{rate}%</span> meaning <span>{formattedPayable}</span> is payable to <span>{Sender}</span> on or before <span>{dueDate}</span> and also a waiver of <span>{waiver}</span> day(s) is given for the said
                        amount to reach <span>{Receiver}</span>.
                    </p>
                    <p className="second-part">
                        Middle Man doubles as a third party who will bare withness in court if <span>{Receiver}</span> defaults and also responsible for debt collection if need be.
                        <span>{Sender}</span> is willing to forgive <span>{Receiver}</span> for a period of 1 month if the said amount plus interest is not paid on or before <span>{dueDate}</span>,
                        due to the goodness of <span>{Sender}</span>'s heart, no penalty charge will be added for the first 2 months after <span>{dueDate}</span> but will request 2 % for each month
                        that passes after the grace of 2 months.
                    </p>
                    <div className="signature">
                        <div className="sender">
                            <div className="line"></div>
                            <p className="send"><span>{Sender}</span></p>
                        </div>
                        <div className="receiver">
                            <div className="line"></div>
                            <div className="receive"><span>{Receiver}</span></div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Condition