import Condition from "../../Components/Agreement-options/text.component"
import Condition2 from "../../Components/Agreement-options/text2.component"

const Agree = ({ data }) => {

    return (
        <div>
            {
                data.mood === "mercy" ? <Condition /> : data.mood === "wickedness" ? <Condition2 /> : ""
            }
           <h2>{data.rate}</h2>
           <h2>{data.startDate}</h2>
           <h2>{data.dueDate}</h2>
        </div>
    )
}

export default Agree