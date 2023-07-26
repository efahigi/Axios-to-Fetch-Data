import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "black" }}>Using Axios to Fetch Data</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "20em",
                backgroundColor: "green",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}> Name:{dataObj.name} 
              <hr/>
              Email: {dataObj.email} 
              <hr/>
              company: {dataObj.company.name} 
              </p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;