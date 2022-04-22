import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";

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

  return (
    <>
      <div className="Container">
        <div className="Sortingbuttons">
          <button>Sort by City</button>
          <button>Sort by Verified</button>
          <button>Sort by Cost</button>
          <button>Sort by Rating</button>
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
            {data.map((entities, index) => {
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
                      navigate(`/listing/:${entities.id}`);
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
