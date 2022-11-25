import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./form.scss"
import Footer from "../Footer/Footer.component"

const Form = ({ form, bs }) => {

    //navigate the user to the loan agreement generated page
    const navigate = useNavigate()
    const defaultForm = {
        Sender: "",
        Receiver: "",
        Amount: "",
        mood: "",
        rate: "",
        startDate: "",
        dueDate: "",
        waiver: ""
    };



    const [formInput, setFormInput] = useState(defaultForm)
    const { Sender, Receiver, Amount, mood } = formInput

    console.log(formInput)
    const onChange = event => {
        const { name, value } = event.target
        setFormInput({ ...formInput, [name]: value })
        form({ ...bs, [name]: value })

    }

    const onSubmit = e => {
        e.preventDefault()
        form(formInput)
        if (mood === "mercy") {
            navigate("/contract")
        } else if (mood === "wickedness") {
            navigate("/contract-2")
        } else {
            return
        }
    }

    return (
        <div>
            <header>
                <h1 className="container footer-heading">Fill in the required Information</h1>
                <div className=" container-2">
                    <form onSubmit={onSubmit} className="form" >
                        <div className="first">
                            <div className="form-field">
                                <input type="text" name="Sender" value={Sender} onChange={onChange} required className="form-input" />
                                <label htmlFor="Sender" className={`label ${Sender.length ? "shrink" : ""}`}>Sender</label>
                            </div>
                            <div className="form-field">
                                <input type="text" name="Receiver" value={Receiver} onChange={onChange} required className="form-input" />
                                <label htmlFor="Receiver" className={`label ${Receiver.length ? "shrink" : ""}`}>Receiver</label>
                            </div>
                            <div className="form-field">
                                <input type="number" name="Amount" value={Amount} onChange={onChange} required className="form-input" />
                                <label htmlFor="Amount" className={`label ${Amount.length ? "shrink" : ""}`}>Amount</label>
                            </div>
                        </div>
                        <div className="an">
                            <div className=" field-another">
                                <input type="radio" name="mood" value="mercy" onChange={onChange} required />
                                <label htmlFor="mood" className="label-2">mercy</label>
                            </div>
                            <div className=" field-another">
                                <input type="radio" name="mood" value="wickedness" onChange={onChange} required />
                                <label htmlFor="mood" className="label-2">wickedness</label>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="startDate" className="label-2">Start Date</label>
                            <input type="date" name="startDate" onChange={onChange} required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="dueDate" className="label-2">Due Date</label>
                            <input type="date" name="dueDate" onChange={onChange} required />
                        </div>
                        <div className="select">
                            <label htmlFor="rate" className="label-2">Rate in %</label>
                            <select name="rate" id="rate" onChange={onChange} required>
                                <option ></option>
                                <option value="0">0</option>
                                <option value="10">10</option>
                                <option value={`20`}>20</option>
                                <option value={`30`}>30</option>
                                <option value={`40`}>40</option>
                            </select>
                        </div>
                        <div className="select">
                            <label htmlFor="waiver" className="label-2">Waiver</label>
                            <select name="waiver" id="waiver" onChange={onChange} required>
                                <option ></option>
                                <option value={`0`}>0</option>
                                <option value={`2 days`}>2</option>
                                <option value={`3 days`}>3</option>
                                <option value={`4 days`}>4</option>
                                <option value={`5 days`}>5</option>
                            </select>
                        </div>

                        <button className="btn-submit">Generate</button>
                    </form>
                </div>
            </header>
            <Footer/>
        </div>
    )
}

export default Form