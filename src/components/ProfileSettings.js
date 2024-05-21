import {useState} from "react";
import "../styles/profile-settings.css"
function ProfileSettings(){
    const [name, setName] = useState("Joshua Choe");
    const [email, setEmail] = useState("joshuadwchoe@gmail.com");
    const [funds, setFunds]  = useState(100);

    const [nameInput, setNameInput] = useState("Joshua Choe");
    const [emailInput, setEmailInput] = useState("joshuadwchoe@gmail.com");
    const [fundsInput, setFundsInput]  = useState(100);

    function onDecrementFunds(){
        setFundsInput(prev=>prev > 0? prev - 1 : 0);
    }

    function onIncrementFunds(){
        setFundsInput(prev=>prev + 1);
    }

    function handleSubmit(e){
        e.preventDefault();
        setName(nameInput);
        setEmail(emailInput);
        setFunds(fundsInput);
    }

    return (
        <div className="profile-settings-container">
            <h1>Current Information: </h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>funds: {funds}</p>

            <h1>Change Information</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                Name: <input value={nameInput} onChange={(e)=>setNameInput(e.target.value)}></input>
                <br/>
                Email: <input value={emailInput} onChange={(e)=>setEmailInput(e.target.value)}></input>
                <div>
                    <button type="button" onClick={onDecrementFunds}>-</button>{fundsInput}<button type="button" onClick={onIncrementFunds}>+</button>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProfileSettings;
