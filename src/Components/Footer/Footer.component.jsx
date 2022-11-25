import { Link } from "react-router-dom"
import man from "../../assets/img/man.png"
import "./footer.scss"


const Footer = () => {
    return (
        <div>
            <footer className="Footer">
                <div className="foot container">
                    <div className="mainn">
                        <Link to="/home">
                            <h2 className="logo"> <span>M</span>iddle
                                <img src={man} alt="" className="man" />
                                <span>M</span>an</h2>
                        </Link>
                        <Link to="/form" className="form-link">Get Started</Link>
                    </div>
                    <div className="copy">
                        <i className="ri-copyright-line"></i>
                        <p>Middle Man all rights reserved 2022</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer