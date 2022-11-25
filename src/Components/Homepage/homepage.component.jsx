import "./homepage.scss"
import { needed } from "./static"
import { Link } from "react-router-dom"

const Homepage = () => {
    return (
        <div>
            <section className="section-1 container">
                <p className="title-text">Middle Man is a loan agrement generator who also doubles as a third party that bares witness for both parties
                    a contract is generated where one party "lender" lends to another "borrower" a sum of money to be repaid on or before the agreed date.
                </p>
                <p className="title-text-alt">The contract outlines the parties involved in the agreement, the amount which is loaned, the intrest rate and other necessary information</p>
            </section>


            <section className="section-2 container">
                <p className="title-text-2">Required Information</p>
                <div className="home">
                    {
                        needed.map(needed => {
                            return (
                                <div key={needed.id} className="needed">
                                    <div className="top">
                                        <i className={needed.icon}></i>
                                    </div>
                                    <p className="details-text">{needed.detailstext}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Link to="/form">
                    <button className="btn-generate">Get Started</button>
                </Link>
            </section>
        </div>
    )
}

export default Homepage


/**
 *  <div className="needed">
                    <div className="">
                        <i className="ri-user-2-fill icons"></i>
                        <p className="details">The lender</p>
                    </div>
                    <p className="details-text">The lender is the party giving the money to the borrower on the condition that the principal will be repaid at an agreed date with
                        or without intrest as the case maybe</p>
                </div>
                <div className="needed">
                    <div className="">
                        <i className="ri-user-5-fill icons"></i>
                        <p className="details">The Borrower</p>
                    </div>
                    <p className="details-text">The borrower accepts the money from the lender having accepted to the lender's conditions </p>
                </div>

                <div className="needed">
                    <div className="">
                        <i className="ri-money-dollar-box-line icons"></i>
                        <p className="details">The Principal</p>
                    </div>
                    <p className="details-text">The borrower accepts the money from the lender having accepted to the lender's conditions </p>
                </div>

                <div className="needed">
                    <div className="">
                        <i className="ri-calendar-event-line icons"></i>
                        <p className="details">The Principal</p>
                    </div>
                    <p className="details-text">The borrower accepts the money from the lender having accepted to the lender's conditions </p>
                </div>

                <div className="needed">
                    <div className="">
                        <i className="ri-calendar-check-line icons"></i>
                        <p className="details">The Principal</p>
                    </div>
                    <p className="details-text">The borrower accepts the money from the lender having accepted to the lender's conditions </p>
                </div>

                <div className="needed">
                    <div className="">
                        <i className="ri-percent-fill icons"></i>
                        <p className="details">The Principal</p>
                    </div>
                    <p className="details-text">The borrower accepts the money from the lender having accepted to the lender's conditions </p>
                </div>
 */