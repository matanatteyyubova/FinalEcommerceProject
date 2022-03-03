import React, { useState, useEffect }  from 'react';
import data6 from "./data/idmanclothdata";
import IdmanClothItem from './IdmanClothItem';

const IdmanCloth = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [id, setid] = useState(props.id);

    useEffect(() => {
        localStorage.setItem("id", id);
      }, [id]);

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
              <div className="dropdown-item">
                <p id="1" onClick={() => setid(1)}>
                  Kişi geyimləri
                </p>
              </div>
              <div className="dropdown-item">
                <p id="2" onClick={() => setid(2)}>
                  Qadın geyimləri
                </p>
              </div>
              <div className="dropdown-item">
                <p id="3" onClick={() => setid(3)}>
                  Uşaqlar geyimləri</p>
              </div>
              <div className="dropdown-item">
                <p id="4" onClick={() => setid(4)}>
                  Çantalar</p>
              </div>
              <div className="dropdown-item">
                <p>İdman topları</p>
              </div>
              <div className="dropdown-item">
                <p>Kepka və papaqlar</p>
              </div>
              <div className="dropdown-item">
                <p> Corablar</p>
              </div>
              <div className="dropdown-item">
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
                  {data6.idmanclothData1.map((item, index) => {
                    return (
                      <IdmanClothItem
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index}
                      />
                    );
                  })}
                </>
              );
            } else if (id === 2) {
              return (
                <>
                  {data6.idmanclothData2.map((item, index) => {
                    return (
                      <IdmanClothItem
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index}
                      />
                    );
                  })}
                </>
              );
            }else if (id === 3) {
              return (
                <>
                  {data6.idmanclothData3.map((item, index) => {
                    return (
                      <IdmanClothItem
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index}
                      />
                    );
                  })}
                </>
              );
            }else if (id === 4) {
              return (
                <>
                  {data6.idmanclothData4.map((item, index) => {
                    return (
                      <IdmanClothItem
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index}
                      />
                    );
                  })}
                </>
              );
            }
          })()}
        </div>
      </div>
    </div>
    );
};

IdmanCloth.defaultProps = {
    id: 1,
  };
export default IdmanCloth;