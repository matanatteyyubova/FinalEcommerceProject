import React, { useState, useEffect }  from 'react';
import data6 from "./data/idmanclothdata";
import IdmanClothItem from './IdmanClothItem';
import ReactPaginate from "react-paginate";
import ScrollToTop from "./ScrollTop";


const IdmanCloth = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [id, setid] = useState(props.id);

    useEffect(() => {
        localStorage.setItem("id", id);
      }, [id]);

      
  const [users, setUsers] = useState(data6. idmanclothData1.slice(0, 12));
  const [users1, setUsers1] = useState(data6. idmanclothData2.slice(0, 12));
  const [users2, setUsers2] = useState(data6. idmanclothData3.slice(0, 12));
  const [users3, setUsers3] = useState(data6. idmanclothData4.slice(0, 12));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
   
  const displayUsers = users
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item, index) => {
    return (
      
 <IdmanClothItem
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
 <IdmanClothItem
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
 <IdmanClothItem
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
 <IdmanClothItem
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
         <div className="idmancloth-sec">
          
      <div className="idmancloth-text">
        <h2 className=" text-center">Mağaza</h2>
        <p className="text-center">
          Mağaza <i class="fa-solid fa-angle-right"></i> İdman Paltarları 
        </p>
      </div>
      <div className="row">
        <div className="col col-lg-3 col-sm-12">
          <div className="fitnes-dropdown">
            <div
              className="fitnes-dropdown-btn"
              onClick={(e) => setIsActive(!isActive)}
            >
              <button >İdman Geyimləri  </button> <span id='drp'><i class="fa-solid fa-caret-down"></i></span> 
            </div>
          </div>

          {isActive && (
            <div className="fitnes-dropdown-content">
              <div id="dropdown-item" className={`${id ===1? 'active-dropdown-item':'null'}`}  onClick={() => setid(1)} >
                <p id="1" >
                  Kişi geyimləri
                </p>
              </div>
              <div id="dropdown-item" className={`${id ===2? 'active-dropdown-item':'null'}`}  onClick={() => setid(2)}>
                <p id="2" >
                  Qadın geyimləri
                </p>
              </div>
              <div id="dropdown-item" className={`${id ===3? 'active-dropdown-item':'null'}`} onClick={() => setid(3)}>
                <p id="3" >
                  Uşaqlar geyimləri</p>
              </div>
              <div id="dropdown-item" className={`${id ===4? 'active-dropdown-item':'null'}`}  onClick={() => setid(4)}>
                <p id="4" >
                  Çantalar</p>
              </div>
              <div id="dropdown-item">
                <p>İdman topları</p>
              </div>
              <div id="dropdown-item">
                <p>Kepka və papaqlar</p>
              </div>
              <div id="dropdown-item">
                <p> Corablar</p>
              </div>
              <div id="dropdown-item">
                <p>Digər əşyalar</p>
              </div>
            </div>
          )}
        </div>
        <div id="row" className="col col-lg-9 col-md-4 col-sm-12">
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
                  {displayUsers2}
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

IdmanCloth.defaultProps = {
    id: 1,
  };
export default IdmanCloth;