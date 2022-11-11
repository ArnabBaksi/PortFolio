import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import platform from "platform";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { userdetails } from "./components/api/api";
import { useGeolocated } from "react-geolocated";
function App() {
  const [load, upadateLoad] = useState(true);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  useEffect(async () => {
    console.log("available = ",isGeolocationAvailable)
    console.log("enable = ",isGeolocationEnabled)
    if (isGeolocationEnabled && isGeolocationAvailable && coords != undefined) {
var location = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
      };

      let today = new Date();
      try {
       Object.assign(platform, {
          currentdate:
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate() +
            "  " +
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds(),
          locations: location,
        });
        console.log("THERE IS NO RESPONSE HERE")

        var response = await userdetails(platform);
        if(response.data.status===200)
        {
          console.log("THERE IS NO RE-SPONSE TO SEE HERE")
        }
        upadateLoad(false);
      } catch (err) {
        console.log(err);
        upadateLoad(false);
      }

      upadateLoad(false);
    } else {
      var location = { latitude: "no location access" };
      let today = new Date();
      try {
        Object.assign(platform, {
          currentdate:
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate() +
            "  " +
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds(),
          locations: location,
        });
        console.log("THERE IS NO RESPONSE  HERE")
     
        var response = await userdetails(platform);
        if(response.data.status===200)
        {
          console.log("THERE IS NO RE-SPONSE TO SEE HERE")

        }
        upadateLoad(false);
      } catch (err) {
        console.log(err);
        upadateLoad(false);
      }

      upadateLoad(false);
    }
  }, [coords]);

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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
