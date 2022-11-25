import { useNavigate } from "react-router-dom"
import { useState } from "react"

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
    const { Sender, Receiver, Amount } = formInput

    const onChange = event => {
        const { name, value } = event.target
        setFormInput({ ...formInput, [name]: value })
        form({ ...bs, [name]: value })

    }

    const onSubmit = e => {
        e.preventDefault()
        form(formInput)
        navigate("/generate")
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Sender" name="Sender" value={Sender} onChange={onChange} required />
                <input type="text" placeholder="Receiver" name="Receiver" value={Receiver} onChange={onChange}  required/>
                <input type="number" placeholder="Amount" name="Amount" value={Amount} onChange={onChange}  required/>
                <input type="radio" name="mood" value="mercy" onChange={onChange} required/> mercy
                <input type="radio" name="mood" value="wickedness" onChange={onChange} required/> wickedness
                <input type="date" name="startDate" onChange={onChange} required/>
                <input type="date" name="dueDate" onChange={onChange} required/>
                <select name="rate" id="rate" onChange={onChange} required>
                    <option ></option>
                    <option value="10">10</option>
                    <option value={`20`}>20</option>
                    <option value={`30`}>30</option>
                    <option value={`40`}>40</option>
                </select>
                <select name="waiver" id="waiver" onChange={onChange} required>
                    <option ></option>
                    <option value={`2 days`}>2</option>
                    <option value={`3 days`}>3</option>
                    <option value={`4 days`}>4</option>
                    <option value={`5 days`}>5</option>
                </select>
                <button>submit</button>
            </form>


        </div>
    )
}

export default Form