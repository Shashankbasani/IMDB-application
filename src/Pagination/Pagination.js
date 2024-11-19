import "./Pagination.css";

function Pagination({pageNo, handleNext, handlePrev}){
    return(
        
        <div className="pagination">
        { pageNo > 1 ? <button onClick={handlePrev} className="pageDec">Prev</button> : <button onClick={handlePrev} style={{pointerEvents:'none',cursor:'not-allowed',opacity: '0.5'}} className="pageDec">Prev</button> }
            <div className="pageNoText">{pageNo}</div>
         { pageNo < 5 ? <button onClick={handleNext} className="pageInc">Next</button> : <button onClick={handleNext} style={{pointerEvents:'none',cursor:'not-allowed',opacity: '0.5'}} className="pageInc">Next</button>}
        </div>
      
    )
}
export default Pagination