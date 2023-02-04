import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getWeather from "../redux/Action";
import Footer from "./Footer";
import Header from "./Header";
import Details from "./Details";
import Cards from "./Cards";
import Main from "./Main";
import { getData, getSuccess } from "../redux/Selectors";
import { ToastContainer } from "react-toastify";
import * from "react-toastify/dist/ReactToastify.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const success = useSelector(getSuccess);
  const { weather, sys, name, main, timezone } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      dispatch(getWeather(city));
    }
    setCity("");
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    dispatch(getWeather());
  }, [getWeather]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="location">
          <p>
            Discover the weather for any city in the world, right at your
            fingertips{" "}
            <span role="img" aria-label="Globe">
              🌎
            </span>
          </p>
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              id="City"
              name="City"
              placeholder="Search Weather by city"
              onChange={handleChange}
              value={city}
            ></input>
            <button>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <Main
          success={success}
          sys={sys}
          main={main}
          weather={weather}
          name={name}
        />
        <Details
          feelsLike={success ? main.feels_like : null}
          minTemp={success ? main.temp_min : null}
          maxTemp={success ? main.temp_max : null}
          pressure={success ? main.pressure : null}
          humidity={success ? main.humidity : null}
        />

        <Cards success={success} timezone={timezone} sys={sys} />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Weather;
