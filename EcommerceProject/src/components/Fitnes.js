import React, { useState, useEffect } from "react";
import FitnesItem from "./FitnesItem";
import data5 from "./data/fitnesitemdata";
import ReactPaginate from "react-paginate";
import ScrollToTop from "./ScrollTop";


const Fitnes = (props) => {
  
  const [isActive, setIsActive] = useState(false);
  const [id, setid] = useState(props.id);

  useEffect(() => {
    localStorage.setItem("id", id);
    
  }, [id]);


 


  const [users, setUsers] = useState(data5.fitnesData1.slice(0, 12));
  const [users1, setUsers1] = useState(data5.fitnesData2.slice(0, 12));
  const [users2, setUsers2] = useState(data5.fitnesData3.slice(0, 12));
  const [users3, setUsers3] = useState(data5.fitnesData4.slice(0, 12));
  const [pageNumber, setPageNumber] = useState(0);
  

  

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
   
  const displayUsers = users
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item, index) => {
    return (
      
 <FitnesItem
        img={item.img}
        title={item.title}
        desc={item.desc}
        price={item.price}
        item={item}
        to={item.to}
        key={index}
      />    
    );
  });

  const displayUsers2 = users1
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item, index) => {
    return (
 <FitnesItem
        img={item.img}
        title={item.title}
        desc={item.desc}
        price={item.price}
        item={item}
        to={item.to}
        key={index}
      />    
    );
  });

  const displayUsers3 = users2
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item, index) => {
    return (
 <FitnesItem
        img={item.img}
        title={item.title}
        desc={item.desc}
        price={item.price}
        item={item}
        to={item.to}
        key={index}
      />    
    );
  });

  const displayUsers4 = users3
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item, index) => {
    return (
 <FitnesItem
        img={item.img}
        title={item.title}
        desc={item.desc}
        price={item.price}
        item={item}
        to={item.to}
        key={index}
      />    
    );
  });
const pageCount = Math.ceil(users.length / usersPerPage);

const changePage = ({ selected }) => {
  setPageNumber(selected);
  window.scrollTo(0, 0);
};


  return (
    <div className="fitnes-sec">
         
      <div className="fitnes-text">
        <h2 className="text-center">Mağaza</h2>
        <p className="text-center">
          Mağaza <i class="fa-solid fa-angle-right"></i> Fitnes Avadanlıqları 
        </p>
      </div>
      <div className="row">
        <div className="col col-lg-3 col-sm-12">
          <div className="fitnes-dropdown">
            <div
              className="fitnes-dropdown-btn "
             
              onClick={(e) => setIsActive(!isActive)}
            >
              <button>Fitnes Avadanlıqları   </button> <span><i class="fa-solid fa-caret-down"></i></span> 
            </div>
          </div>

          {isActive && (
            <div className="fitnes-dropdown-content">
              <div id="dropdown-item" className={`${id ===1? 'active-dropdown-item':'null'}`} onClick={() => setid(1)} >
                <p id="1"  >
                  Aerobika matları
                </p>
              </div>
              <div id="dropdown-item" className={`${id ===2? 'active-dropdown-item':'null'}`} onClick={() => setid(2)}>
                <p id="2" >
                  Atlanma ipləri
                </p>
              </div>
              <div id="dropdown-item" className={`${id ===3? 'active-dropdown-item':'null'}`} onClick={() => setid(3)}>
                <p id="3" >Çöl trenajorları</p>
              </div>
              <div id="dropdown-item" className={`${id ===4? 'active-dropdown-item':'null'}`} onClick={() => setid(4)}>
                <p id="4" >Genişləndiricilər</p>
              </div>
              <div id="dropdown-item">
                <p>İdman topları</p>
              </div>
              <div id="dropdown-item">
                <p>Şeyker və butulkalar</p>
              </div>
              <div id="dropdown-item">
                <p> İdman döşəkləri</p>
              </div>
              <div id="dropdown-item">
                <p>Digər</p>
              </div>
            </div>
          )}
        </div>
        <div id="row" className="col col-lg-9 col-md-4 col-sm-12">
               <ScrollToTop />
          {(() => {
            if (id === 1) {
              return (
                <>
            
                   {displayUsers}
                </>
              );
            } else if (id === 2) {
              return (
                <>
                 { displayUsers2}
                </>
              );
            }else if (id === 3) {
              return (
                <>
                  {displayUsers3}
                </>
              );
            }else if (id === 4) {
              return (
                <>
                  {displayUsers4}
                </>
              );
            }
          })()}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

Fitnes.defaultProps = {
  id: 1,
};
export default Fitnes;
