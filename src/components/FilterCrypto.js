
function FilterCrypto ({changeFilterTerm}){

    return (
        <input onChange={e=>changeFilterTerm(e.target.value)}></input>
    )
}

export default FilterCrypto;