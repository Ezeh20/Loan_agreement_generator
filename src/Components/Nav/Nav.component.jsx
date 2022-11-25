import { Outlet, Link } from "react-router-dom"
import man from "../../assets/img//man.png"
import Footer from "../Footer/Footer.component"
import "./Nav.scss"

const Nav = () => {
    return (
        <div>
            <header className="header">
                <nav className="nav_nav container">
                    <Link to="/home">
                        <h2 className="logo"> <span>M</span>iddle
                            <img src={man} alt="" className="man" />
                            <span>M</span>an</h2>
                    </Link>
                    <Link to="/form">
                        <button className="btn-generate">Generate</button>
                    </Link>
                </nav>
            </header>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Nav