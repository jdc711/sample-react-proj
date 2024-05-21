import useFetch from "../hooks/useFetch"
import CryptoList from "./CryptoList";
import {useEffect, useState} from 'react';
import Pagination from "./Pagination";
import FilterCrypto from "./FilterCrypto";
import useFetchCrypto from "../hooks/useFetchCrypto";
import "../styles/home.css"
import useFetchUpdateAllSerially from "../hooks/useFetchUpdateAllSerially";
import ProfileDetails from "./ProfileDetails";
import Popup from "./Popup";
import BuyCrypto from "./BuyCrypto";

function fetchPersonalData(){
    return {
        name: "Joshua Choe",
        funds: 100
    }
}

function mockFetch(name){

    let responseObj = {
        "success": true,
        "terms": "https://coinlayer.com/terms",
        "privacy": "https://coinlayer.com/privacy",
        "timestamp": 1716152586,
        "target": "USD",
        "rates": [
            name, Number((Math.random() * 10).toFixed(5))
        ]
    }
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const success = Math.random();
            // if (success < 0.75){
                resolve(responseObj);
            // }
            // else{
            //     reject("Fetching error");
            // }
        }, 200);
    });
}



function Home(){
    
    // INITIAL FETCH OF DATA
    const {loading, error, data} = useFetch(process.env.REACT_APP_API_BASE_URL + "?access_key=" + process.env.REACT_APP_API_KEY);
    const [cryptos, setCryptos] = useState([]);
    useEffect(()=>{
        setCryptos(data);
    }, [data]);

    // INITIAL FETCH USER DATA (name, funds)
    let userData = fetchPersonalData();
    const [name, setName] = useState(userData.name);
    const [funds, setFunds] = useState(userData.funds);

    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [filterTerm, setFilterTerm] = useState("");
    useEffect(()=>{
        setCurrentPage(1);
    }, [filterTerm])

    // FILTERING DATA WITH SEARCH BAR
    const filteredData = cryptos.filter(item=>item[0].toLowerCase().includes(filterTerm.toLowerCase()));
    const firstItemIdx = currentPage*itemsPerPage-itemsPerPage;
    const lastItemIdx = cryptos.length < 10 ? filteredData.length : currentPage*itemsPerPage;
    const currentPageData = filteredData.slice(firstItemIdx, lastItemIdx);
    const changeCurrentPage = page => setCurrentPage(page);

    // UPDATING INDIVIDUAL STOCK PRICE WITH BUTTON
    const [updateCryptoName, setUpdateCryptoName] = useState("");
    const {loading: updating, error: updatingError, data: updateData} = useFetchCrypto(updateCryptoName);
    function updateCrypto(cryptoName){
        setUpdateCryptoName(cryptoName);
    }
    useEffect(()=>{
        if (updateData){
            setCryptos((prevCryptos)=>{
                return prevCryptos.map(crypto=>crypto[0]===updateData[0] ? [crypto[0], updateData[1]] : crypto)
            })
        }
        setUpdateCryptoName("");
    }, [updateData])

    // UPDATING ALL STOCK PRICES SERIALLY 
    const [updatingAllSerially, setUpdatingAllSerially] = useState(false);
    const [errorUpdatingAllSerially, setErrorUpdatingAllSerially] = useState(null);  
    async function updateAllSerially(){
        setUpdatingAllSerially(true);
        setErrorUpdatingAllSerially(null);
        for (let crypto of cryptos){
            try{
                let data = await mockFetch(crypto[0]);
                setCryptos(prevCryptos=>prevCryptos.map(prevCrypto => prevCrypto[0] === crypto[0] ? data.rates : prevCrypto))
            }
            catch(err){
                setErrorUpdatingAllSerially(err)
            }

        }
        setUpdatingAllSerially(false);
    }

    // UPDATING ALL STOCK PRICES CONCURRENTLY
    const [updatingAllConcurrently, setUpdatingAllConcurrently] = useState(false);
    const [errorUpdatingAllConcurrently, setErrorUpdatingAllConcurrently] = useState(null);
    function updateAllConcurrently(){
        setUpdatingAllConcurrently(true);
        Promise.all(cryptos.map(crypto=>mockFetch(crypto[0])))
        .then(results => {
            results.map(
                result=>setCryptos(prevCryptos=>prevCryptos.map(prevCrypto=>prevCrypto[0]===result.rates[0] ? result.rates : prevCrypto))
            )
        })
        .catch(err=>setErrorUpdatingAllConcurrently(err))
        setUpdatingAllConcurrently(false);
    }

    // BUYING CRYPTO & POPUP
    const [cryptoNameToBuy, setCryptoNameToBuy] = useState(null);
    const [priceOfCryptoToBuy, setPriceOfCryptoToBuy] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [cryptosBought, setCryptosBought] = useState([]);
    const closePopup = () => setShowPopup(false);
    function requestBuyCrypto(cryptoToBuy){
        setCryptoNameToBuy(cryptoToBuy);
        let price;
        for (let crypto of cryptos){
            if (crypto[0] === cryptoToBuy){
                price = crypto[1];
                break;
            }
        }
        setPriceOfCryptoToBuy(price);
        setShowPopup(true);
    }

    function buyCrypto(numberToBuy){
        console.log("funds: ", funds, "(numberToBuy * priceOfCryptoToBuy): ", (numberToBuy * priceOfCryptoToBuy))

        setFunds(prev=> prev-(numberToBuy * priceOfCryptoToBuy));
        setCryptosBought(prev=>[...prev, {cryptoNameToBuy, numberToBuy}]);
        setCryptoNameToBuy(null);
        setShowPopup(false);
        setPriceOfCryptoToBuy(0);
        console.log("cryptosBought: ", cryptosBought);
    }

  
    return (
        <div className="home-container">
            <ProfileDetails name={name} funds={funds}/>
            <FilterCrypto changeFilterTerm={term=>setFilterTerm(term)} />
            {loading ? "CryptoListLoading" : error ? "Error fetching cryptolist" : <CryptoList cryptos={currentPageData} updateCrypto={updateCrypto} updateAllSerially={updateAllSerially} updateAllConcurrently={updateAllConcurrently} buyCrypto={requestBuyCrypto}/>}
            {updating && <p>Updating list</p>}
            {updatingError && <p>Error updating list</p>}

            {updatingAllSerially && <p>Updating all serially</p>}
            {errorUpdatingAllSerially && <p>Error updating all serially: {errorUpdatingAllSerially}</p>}

            {updatingAllConcurrently && <p>Updating all concurrently</p>}
            {errorUpdatingAllConcurrently && <p>Error updating all conncurrently: {errorUpdatingAllConcurrently}</p>}
            <Pagination setCurrentPage={changeCurrentPage} currentPage={currentPage} totalItems={filteredData.length} itemsPerPage={itemsPerPage} />
            <Popup isOpen={showPopup} onClose={closePopup}>
                <BuyCrypto cryptoToBuy={cryptoNameToBuy} onBuy={buyCrypto} funds={funds} cryptoPrice={priceOfCryptoToBuy} />
            </Popup>
        </div>
        
    )

}
export default Home;








// const [updatingAllSeriallyToggle, setUpdatingAllSeriallyToggle] = useState(false); // to trigger useFetchAllSerially hook
    // const {loading: updatingAllSerially, error: updatingAllSeriallyError, data: updatingAllSeriallyData} = useFetchUpdateAllSerially(cryptos,updatingAllSeriallyToggle);
    // function updateAllSerially(){
    //     setUpdatingAllSeriallyToggle(true);
    // }
    // useEffect(()=>{
    //     if (updatingAllSeriallyData){
    //         setCryptos((prevCryptos)=>{
    //             return prevCryptos.map(crypto=>crypto[0]===updatingAllSeriallyData[0] ? [crypto[0], updatingAllSeriallyData[1]] : crypto)
    //         })
    //     }  
    // }, [updatingAllSeriallyData])