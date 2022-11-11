import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import platform from 'platform';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { userdetails } from "./components/api/api";

function App() {
  const [load, upadateLoad] = useState(true);
  // const [location,setlocation]=useState({})
  var location = {}
  useEffect(async () => {

    // console.log("platform details = ", platform)
    navigator.geolocation.getCurrentPosition(async function(position) {
      //  console.log("location is :", position.coords);
      // console.log("Longitude is :", position.coords.longitude);
   
      location = {latitude:position.coords.latitude,longitude:position.coords.longitude,altitude:position.coords.altitude};
    });
    let today = new Date()
    try{
     var data =  Object.assign(platform,{currentdate:today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() +"  " +today.getHours() +":"+today.getMinutes()+":"+today.getSeconds(),locations:location})
     console.log("platform = ",platform)
    var response = await userdetails(platform)
    // var response = "hv"
    var res = response.data;
    upadateLoad(false);

    // console.log("api response = ",res);
    // const timer = setTimeout(() => {
      // upadateLoad(false);
    // }, 1000);
  }catch(err){
    console.log(err)
    upadateLoad(false);
  }
    // return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
