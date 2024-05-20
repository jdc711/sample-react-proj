
function Pagination({ setCurrentPage, currentPage, totalItems, itemsPerPage }) {
    const lastPage = Math.ceil(totalItems / itemsPerPage);
   
    const maxBtnsToShow = 5;
    const firstBtnVal = Math.max(1, currentPage - Math.floor(maxBtnsToShow / 2));
    const lastBtnVal = Math.min(lastPage, currentPage + Math.floor(maxBtnsToShow / 2));

    const buttons = [];
    for (let i = firstBtnVal; i < lastBtnVal + 1; i++) {
        buttons.push(<button key={i} disabled={currentPage === i} onClick={() => setCurrentPage(i)}>{i}</button>);
    }


    return (
        <div>

           
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>First</button>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
            

            {buttons}

            
                <button disabled={currentPage === lastPage} onClick={() => setCurrentPage(lastPage)}>Last</button>
                <button disabled={currentPage === lastPage} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            

        </div>
    )
}

export default Pagination;