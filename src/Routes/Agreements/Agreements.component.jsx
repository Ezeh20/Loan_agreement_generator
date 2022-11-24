

const Agree = ({cc, muu}) =>{
    const {Sender, Receiver, Amount} = cc

   

    return(
        <div>
            <h1>final</h1>
            <h2>{Sender}</h2>
            <h2>{Receiver}</h2>
            <h2>{Amount}</h2>
            <h2>{muu}</h2>
        </div>
    )
}

export default Agree