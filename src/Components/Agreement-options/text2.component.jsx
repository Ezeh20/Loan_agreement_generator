import "./text.scss"

const Condition2 = ({ data }) => {
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
                        Due to the high increase in loan defaulters, <span>{Sender}</span> has entrusted Middle Man to draft out this contract, Middle Man acts as a third party who
                        will bare withness in court if <span>{Receiver}</span> defaults and also responsible for debt collection if need be. There is a penalty charge of <span>+5%</span>
                        for each month <span>{Receiver}</span> defaults after <span>{dueDate}</span>, that means failure to repay the loan after 3 months sums up to <span>+15%</span> penalty
                        charge. If after 3 months and <span>{Receiver}</span> still hasn't repaid the loan, Middle Man has been authorized to collect the debt using legal means.
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

export default Condition2