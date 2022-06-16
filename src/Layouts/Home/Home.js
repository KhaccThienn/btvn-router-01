/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../Assets/Data";

function Home() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setBlog(Data);
  }, []);

  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {blog.map((item) => {
              return (
                <div key={item.id} className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img src={item.avatar} />
                    <div className="card-body">
                      <p className="card-text">{item.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link to={`detail/${item.id}`}>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                          </Link>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
