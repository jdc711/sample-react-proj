import {useState} from "react";

function BuyCrypto({cryptoToBuy, onBuy, funds, cryptoPrice}){
    const [numberToBuy, setNumberToBuy] = useState(1);
     
    if (!cryptoToBuy) return null;

    return (
        <div>
            <h3>Buy {cryptoToBuy}</h3>
            <button onClick={()=>setNumberToBuy(prev=>prev>1?prev-1:0)}>-</button>
            {numberToBuy}
            <button onClick={()=>setNumberToBuy(prev=>prev+1)}>+</button>
            <br/>
            <button disabled={funds < numberToBuy * cryptoPrice} onClick={()=>onBuy(numberToBuy)}>Submit</button>
        </div>

    )

}

export default BuyCrypto;