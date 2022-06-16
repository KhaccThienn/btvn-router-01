/* eslint-disable array-callback-return */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../../Assets/Data";

function Detail() {
  let { dcm } = useParams();
  useEffect(() => {
    console.log(dcm);
  }, [dcm]);

  return (
    <>
      {Data.map((items, index) => {
        return Number(dcm) === items.id ? (
          <div key={index}>
            <div className="p-5 w-75 row">
              <div className="col-md-8">
                <img className="img-fluid" src={items.avatar} alt="" />
              </div>
              <div className="col-md-4">
                <h3 className="my-3"> ID: {items.id}</h3>
                <p>{items.title}</p>
                <p>{items.content}</p>
              </div>
            </div>
          </div>
        ) : (
          <div key={index}></div>
        );
      })}
    </>
  );
}

export default Detail;
