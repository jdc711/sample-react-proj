
function CryptoList({cryptos, updateCrypto, updateAllSerially, updateAllConcurrently, buyCrypto}){
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <td></td>
                        <td></td>
                    </tr>
                    {cryptos.map(crypto=>
                        <tr key={crypto[0]}>
                            <td>{crypto[0]}</td>
                            <td>{crypto[1]}</td>
                            <td><button onClick={()=>updateCrypto(crypto[0])}>Update</button></td>
                            <td><button onClick={()=>buyCrypto(crypto[0])}>Buy</button></td>
                        </tr>  
                    )}
                </tbody>
            </table>
            <button onClick={updateAllSerially}>Update All Serially</button>
            <button onClick={updateAllConcurrently}>Update All Concurrently</button>

        </div>
    )
}

export default CryptoList;