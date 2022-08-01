import React from "react";
import { Link } from "react-router-dom";
import PieChart from "../PieChart";

const index = () => {
  return (
    <div>
      <h4 className="text-center mt-4">Dashboard</h4>

      <div className="row mt-4 justify-content-center">
        <div className="col-3">
          <div className="card text-center bg-light">
            <div className="card-header">
              <h5 className="">Encounters</h5>
            </div>
            <div className="card-body">
              <Link
                to="/encounters"
                className="card-title h1 text-decoration-none"
              >
                10
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card text-center bg-light">
            <div className="card-header">
              <h5 className="">Sample Released</h5>
            </div>
            <div className="card-body">
              <Link to="/sample" className="card-title h1 text-decoration-none">
                10
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card text-center bg-light">
            <div className="card-header">
              <h5 className="">Direct Claim</h5>
            </div>
            <div className="card-body">
              <Link to="/claim" className="card-title h1 text-decoration-none">
                10
              </Link>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="d-flex justify-content-center">
        <PieChart />
      </div> */}

      {/* <div className="row mt-4 justify-content-center">
        <div className="col-3">
          <canvas id="myChart1" style={{width: "100%"}}></canvas>
        </div>
        <div className="col-3">
          <canvas id="myChart2" style={{width: "100%"}}></canvas>
        </div>
        <div className="col-3">
          <canvas id="myChart3" style={{width: "100%"}}></canvas>
        </div>
      </div> */}

      <div className="row justify-content-center mt-5">
        <div className="col-9">
          <iframe
            width="100%"
            height="500"
            title="mapFrame"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?q=https:%2F%2Fraw.github.com%2Fthroughnothing%2Fgpx%2Fmaster%2F2012%2F20120629.kml&amp;t=h&amp;ie=UTF8&amp;output=embed"
          ></iframe>
          <br />
        </div>
      </div>

      <script>
        {/* let myChart1 = document.getElementById('myChart1').getContext('2d'); */}
      </script>
    </div>
  );
};

export default index;
