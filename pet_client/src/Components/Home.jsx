import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [data, showData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8000/entities").then((res) => {
      showData(res.data);
    });
  };

  // const city = () => {
  //   handleSort("City", 1);
  // }
  // const city1 = () => {
  //   handleSort("City", -1);
  // }
  // const verify = 
  // const verify1 = 
  const cost = () => {
    data.sort(function (a, b) {
      return b.Costperday - a.Costperday;
    });
    showData([...data]);
  };
  const cost1 = () => {
    data.sort(function (a, b) {
      return a.Costperday - b.Costperday;
    });
    showData([...data]);
  };
  const rating = () => {
    data.sort(function (a, b) {
      return b.Rating - a.Rating;
    });
    showData([...data]);
  };
  const rating1 = () => {
    data.sort(function (a, b) {
      return a.Rating - b.Rating;
    });
    showData([...data]);
  };


  return (
    <>
      <div className="Container">
        <div className="Sortingbuttons">
          <button >Sort by City (A_Z)</button>
          <button >Sort by City (Z_A)</button>
          <button >Sort by Verified (A_Z)</button>
          <button >Sort by Verified (Z_A)</button>
          <button onClick={cost}>Sort by Cost high to low</button>
          <button onClick={cost1}>Sort by Cost low to high</button>
          <button onClick={rating}>Sort by Rating high to Low</button>
          <button onClick={rating1}>Sort by Rating Low to high</button>
        </div>

        <table className="table" border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Capacity</th>
              <th>Cost per day</th>
              <th>Verified</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entities) => {
              return (
                <tr key={entities.id} className="details">
                  <td>{entities.id}</td>
                  <td>{entities.Name}</td>
                  <td>{entities.City}</td>
                  <td>{entities.Address}</td>
                  <td>{entities.Capacity}</td>
                  <td>{entities.Costperday}</td>
                  <td>{entities.Verified}</td>
                  <td>{entities.Rating}</td>
                  <td
                    onClick={() => {
                      navigate(`/listing/${entities.id}`);
                    }}
                  >
                    {"Details"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
