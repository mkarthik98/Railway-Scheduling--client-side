import React , {useState , useEffect} from "react";

const User = () => {
    const [trains, setTrains] = useState(null);
    useEffect(() => {
        fetchTrainData();
    }, []);

    const fetchTrainData = async()=>{
        const response = await fetch('http://localhost:5000/gettrain', {method:'GET'});

        const json = await response.json();
        setTrains(json.trains);
    }
    
  return (
    <div className="container my-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Arrival</th>
            <th scope="col">Departure</th>
            <th scope="col">Source</th>
            <th scope="col">Destination</th>
            <th scope="col">Seats</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>

        {
                trains != null && trains.length != 0 ? trains.map((train , idx)=>{
                    return           <tr key={idx}>
                    <th scope="row">{idx+1}</th>
                    <td scope="col">{train.name}</td>
                    <td scope="col">{train.number}</td>
                    <td scope="col">{train.arrivalTime}</td>
                    <td scope="col">{train.departureTime}</td>
                    <td scope="col">{train.source}</td>
                    <td scope="col">{train.destination}</td>
                    <td scope="col">{train.seats}</td>
                    <td scope="col">{train.price}</td>
                  </tr>
                }): <p>No Train found</p>
            }
        </tbody>
      </table>
    </div>
  );
};

export default User;
