import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/style.css';

const Tempapp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState('Mumbai');

  // useEffect(() => {
  //   const fetchApi = axios({
  //     method: 'get',
  //     url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe2d3d24f59f60a0485885b25c70bdca`,
  //   })
  //     .then((response) => setCity(response.data))
  //     .then(console.log(city))
  //     .catch((err) => console.log(err.message));
  // }, [setSearch]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fe2d3d24f59f60a0485885b25c70bdca`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log('respone', resJson.main);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type={'search'}
            className="inputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view">{search}</i>
              </h2>
              <h1 className="temp">{city.temp}*C</h1>
              <h3 className="tempmin_max">
                {`Min : ${city.temp_min}*C`} | {`Max : ${city.temp_max}*C`}
              </h3>
            </div>
          </div>
        )}

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </>
  );
};

export default Tempapp;
