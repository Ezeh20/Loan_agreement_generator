import "./homepage.scss"
import { needed } from "./static"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer.component"

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
            <Footer />
        </div>
    )
}

export default Homepage


