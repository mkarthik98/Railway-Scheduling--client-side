import React, { useState } from "react";
// import "./Admin.css";

const Admin = () => {
  const initialTrainStatus = {name:"" , number:"" , arrivalTime : (new Date()).toLocaleTimeString('en-US', { hour12: false }) , departureTime : (new Date()).toLocaleTimeString('en-US', { hour12: false }) , seats : 0 , source : "" , destination:"" , price:0};

  const [train, setTrain] = useState(initialTrainStatus);

  const onChange = (e)=>{
    setTrain({...train , [e.target.name] : e.target.value})
  }
  
  const addTrain = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/addtrain' , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(train)
  });

  const json = await response.json();
  setTrain(initialTrainStatus)
  // console.log(json);
  }
  return (
    <div>
      <div className="container my-3" style={{ width: "60%" }}>
        <h1>Add Trains</h1>
        <form action="" onSubmit={addTrain}>
          <div className="my-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Train name
            </label>
            <input value={train.name} onChange ={(e)=> onChange(e)}
              type="text"
              name="name"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Train Name"
            />
          </div>
          <div className="my-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Train Number
            </label>
            <input value={train.number} onChange ={(e)=> onChange(e)}
              type="text"
              name="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Add Train Number"
            />
            <div className="my-3">
              <label htmlFor="formGroupExampleInput3" className="form-label">
                Arrival Time
              </label>
              <input value={train.arrivalTime} onChange ={(e)=> onChange(e)}
                type="time"
                name="arrivalTime"
                className="form-control"
                id="formGroupExampleInput3"
                placeholder="Enter Arrival Time"
              />
            </div>
            <div className="my-3">
              <label htmlFor="formGroupExampleInput4" className="form-label">
                Departure Time
              </label>
              <input value={train.departureTime} onChange ={(e)=> onChange(e)}
                type="time"
                name="departureTime"
                className="form-control"
                id="formGroupExampleInput4"
                placeholder="Add Train Number"
              />
            </div>
            <div className="my-3">
              <label htmlFor="formGroupExampleInput5" className="form-label">
                Source
              </label>
              <input value={train.source} onChange ={(e)=> onChange(e)}
                type="text"
                name="source"
                className="form-control"
                id="formGroupExampleInput5"
                placeholder="Enter Source Location"
              />
            </div>
            <div className="my-3">
              <label htmlFor="formGroupExampleInput6" className="form-label">
                Destination
              </label>
              <input value={train.destination} onChange ={(e)=> onChange(e)}
                type="text"
                name="destination"
                className="form-control"
                id="formGroupExampleInput6"
                placeholder="Enter Destination Location"
              />
            </div>
            <div className="my-3">
              <label htmlFor="formGroupExampleInput7" className="form-label">
                Seats
              </label>
              <input value={train.seats} onChange ={(e)=> onChange(e)}
                type="number"
                name="seats"
                className="form-control"
                id="formGroupExampleInput7"
                placeholder="Total Available Seats"
              />
            </div>
            <div className="my-3">
              <label htmlFor="formGroupExampleInput8" className="form-label">
                Price
              </label>
              <input value={train.price} onChange ={(e)=> onChange(e)}
                type="number"
                name="price"
                className="form-control"
                id="formGroupExampleInput8"
                placeholder="Enter Ticket Price"
              />
            </div>
          </div>
          <div className="text-center my-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
