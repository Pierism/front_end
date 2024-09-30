import React from "react";
import './Service.css'

function Service() {
  return (
    <>
      <div className="ourservices">
        <div className="ourservicearea">
          <h3>Our Digital Solutions</h3>
          {/*main solutions */}
          <div className="servicearea">
            <div className="box">
              <div className="boxarea">
                <img src="" alt="img_1" />
                <h4>service 1</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="">discover more</a>
              </div>
            </div>
            <div className="box">
              <div className="boxarea">
                <img src="" alt="img_2" />
                <h4>service 2</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="">discover more</a>
              </div>
            </div>
            <div className="box">
              <div className="boxarea">
                <img src="" alt="img_3" />
                <h4>service 2</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="">discover more</a>
              </div>
            </div>
            <div className="box">
              <div className="boxarea">
                <img src="" alt="img_4" />
                <h4>service 3</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="">discover more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
