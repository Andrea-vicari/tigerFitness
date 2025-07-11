
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/pulseFit_logo.svg";
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";

const Calendario = () =>{

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"   




    return (
     <div className="container-fluid">
  <header>
    <h4 className="display-4 mb-4 text-center">November 2017</h4>
    <div className="row d-none d-sm-flex p-1 bg-dark text-white">
      <h5 className="col-sm p-1 text-center">Sunday</h5>
      <h5 className="col-sm p-1 text-center">Monday</h5>
      <h5 className="col-sm p-1 text-center">Tuesday</h5>
      <h5 className="col-sm p-1 text-center">Wednesday</h5>
      <h5 className="col-sm p-1 text-center">Thursday</h5>
      <h5 className="col-sm p-1 text-center">Friday</h5>
      <h5 className="col-sm p-1 text-center">Saturday</h5>
    </div>
  </header>
  <div className="row border border-right-0 border-bottom-0">
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">29</span>
        <small className="col d-sm-none text-center text-muted">Sunday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">30</span>
        <small className="col d-sm-none text-center text-muted">Monday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">31</span>
        <small className="col d-sm-none text-center text-muted">Tuesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">1</span>
        <small className="col d-sm-none text-center text-muted">Wednesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">2</span>
        <small className="col d-sm-none text-center text-muted">Thursday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">3</span>
        <small className="col d-sm-none text-center text-muted">Friday</small>
        <span className="col-1"></span>
      </h5>
      <a className="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-info text-white" title="Test Event 1">Test Event 1</a>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">4</span>
        <small className="col d-sm-none text-center text-muted">Saturday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="w-100"></div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">5</span>
        <small className="col d-sm-none text-center text-muted">Sunday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">6</span>
        <small className="col d-sm-none text-center text-muted">Monday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">7</span>
        <small className="col d-sm-none text-center text-muted">Tuesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">8</span>
        <small className="col d-sm-none text-center text-muted">Wednesday</small>
        <span className="col-1"></span>
      </h5>
      <a className="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-success text-white" title="Test Event 2">Test Event 2</a>
      <a className="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-danger text-white" title="Test Event 3">Test Event 3</a>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">9</span>
        <small className="col d-sm-none text-center text-muted">Thursday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">10</span>
        <small className="col d-sm-none text-center text-muted">Friday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">11</span>
        <small className="col d-sm-none text-center text-muted">Saturday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="w-100"></div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">12</span>
        <small className="col d-sm-none text-center text-muted">Sunday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">13</span>
        <small className="col d-sm-none text-center text-muted">Monday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">14</span>
        <small className="col d-sm-none text-center text-muted">Tuesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">15</span>
        <small className="col d-sm-none text-center text-muted">Wednesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">16</span>
        <small className="col d-sm-none text-center text-muted">Thursday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">17</span>
        <small className="col d-sm-none text-center text-muted">Friday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">18</span>
        <small className="col d-sm-none text-center text-muted">Saturday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="w-100"></div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">19</span>
        <small className="col d-sm-none text-center text-muted">Sunday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">20</span>
        <small className="col d-sm-none text-center text-muted">Monday</small>
        <span className="col-1"></span>
      </h5>
      <a className="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-primary text-white" title="Test Event with Super Duper Really Long Title">Test Event with Super Duper Really Long Title</a>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">21</span>
        <small className="col d-sm-none text-center text-muted">Tuesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">22</span>
        <small className="col d-sm-none text-center text-muted">Wednesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">23</span>
        <small className="col d-sm-none text-center text-muted">Thursday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">24</span>
        <small className="col d-sm-none text-center text-muted">Friday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">25</span>
        <small className="col d-sm-none text-center text-muted">Saturday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="w-100"></div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">26</span>
        <small className="col d-sm-none text-center text-muted">Sunday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">27</span>
        <small className="col d-sm-none text-center text-muted">Monday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">28</span>
        <small className="col d-sm-none text-center text-muted">Tuesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">29</span>
        <small className="col d-sm-none text-center text-muted">Wednesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
      <h5 className="row align-items-center">
        <span className="date col-1">30</span>
        <small className="col d-sm-none text-center text-muted">Thursday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">1</span>
        <small className="col d-sm-none text-center text-muted">Friday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">2</span>
        <small className="col d-sm-none text-center text-muted">Saturday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="w-100"></div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">3</span>
        <small className="col d-sm-none text-center text-muted">Sunday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">4</span>
        <small className="col d-sm-none text-center text-muted">Monday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">5</span>
        <small className="col d-sm-none text-center text-muted">Tuesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">6</span>
        <small className="col d-sm-none text-center text-muted">Wednesday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">7</span>
        <small className="col d-sm-none text-center text-muted">Thursday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">8</span>
        <small className="col d-sm-none text-center text-muted">Friday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">9</span>
        <small className="col d-sm-none text-center text-muted">Saturday</small>
        <span className="col-1"></span>
      </h5>
      <p className="d-sm-none">No events</p>
    </div>
  </div>
</div>

  );

}

export default Calendario
