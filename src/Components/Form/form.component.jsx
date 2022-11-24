import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Form = ({ form, bs, mood }) => {

    const navigate = useNavigate()
    const defaultForm = {
        Sender: "",
        Receiver: "",
        Amount: "",
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
                <input type="text" placeholder="Sender" name="Sender" value={Sender} onChange={onChange} />
                <input type="text" placeholder="Receiver" name="Receiver" value={Receiver} onChange={onChange} />
                <input type="number" placeholder="Amount" name="Amount" value={Amount} onChange={onChange} />
                <input type="radio" name="mood" value="mercy" onChange={e => mood(e.target.value)} /> mercy
                <input type="radio" name="mood" value="wickedness" onChange={e => mood(e.target.value)} /> wickedness
                <button>submit</button>
            </form>


        </div>
    )
}

export default Form