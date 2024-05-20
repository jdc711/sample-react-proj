import { useEffect, useState } from "react";


function useFetchCrypto(cryptoName){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    function mockFetch(){
        let responseObj = {
            "success": true,
            "terms": "https://coinlayer.com/terms",
            "privacy": "https://coinlayer.com/privacy",
            "timestamp": 1716152586,
            "target": "USD",
            "rates": {
                [cryptoName]: Number((Math.random() * 10).toFixed(5))
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
        if (!cryptoName) {
            setLoading(false);
            setError(null);
            setData(null);
        }
        else{
            setLoading(true); // Ensure loading state is reset correctly
            setError(null);
            setData(null);

            mockFetch()
            .then(data => {
                setLoading(false);
                setError(null);
                console.log("DEBUG: ",[cryptoName, data.rates[cryptoName]] )
                setData([cryptoName, data.rates[cryptoName]]);
            })
            .catch(err=>{
                setError(err);
                setLoading(false);
            })    
        }
    }, [cryptoName])
   
    return {loading, error, data};

}

export default useFetchCrypto;