import {useEffect, useState} from "react";

function useFetchUpdateAllSerially(cryptos, updateToggle){
    const [updatingSerially, setUpdatingSerially] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    function mockFetch(name){

        let responseObj = {
            "success": true,
            "terms": "https://coinlayer.com/terms",
            "privacy": "https://coinlayer.com/privacy",
            "timestamp": 1716152586,
            "target": "USD",
            "rates": {
                [name]: Number((Math.random() * 10).toFixed(5))
            }
        }
        
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                const success = Math.random();
                if (success < 0.75){
                    resolve(responseObj);
                }
                else{
                    reject("Fetching error");
                }
            }, 1000);
        });
    }

    useEffect(()=>{
        if (updateToggle){
            setUpdatingSerially(true);
            for (let crypto of cryptos){
                
                mockFetch(crypto[0])
                .then(data => {
                    setError(null);
                    setData([crypto[0], data.rates[crypto[0]]]);
                    console.log("DEBUG: ", [crypto[0], data.rates[crypto[0]]])
                })
                .catch(err=>{
                    setError(err);
                    // setLoading(false);
                })   
            }
            setUpdatingSerially(false);
        }
    
    }, [updateToggle])
   
    return {updatingSerially, error, data};
}

export default useFetchUpdateAllSerially;