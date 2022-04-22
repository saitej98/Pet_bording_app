import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PetBoardingDetails = () => {
  const { id } = useParams();
  const [details, showDetails] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios.get(`http://localhost:8000/entities/${id}`).then((res) => {
      showDetails(res.data);
    });
  };

  return (
    <>
      <h1>PetBoarding Details</h1>
      <div className="container">
        {details.map((e) => {
          return (
            <>
              <h1>Summary</h1>
              <h3>Boarding facilities you leave em we love them</h3>
              <h4>Number of pets that will be watched at one time.</h4>
              <p>{e.Capacity}</p>
              <h4>Accepted Pet Types</h4>
              <p>{e.Type}</p>
              <h3>Accepted Pet size</h3>
              <p>{e.Weight}</p>
              <h3>
                The place your pet will be if they are left unsupervised at
                home.
              </h3>
              <p>Free roam of the house {e.Roaming_place}</p>
              <h3>The place your pet will sleep at night.</h3>
              <p>Wherever they want</p>
              <h3>The number of potty breaks provided per day.</h3>
              <p>Full access outside {e.potty_breaks}</p>
              <h3>The number of walks provided per day.</h3>
              <p>{e.noof_walks}</p>
              <h3>The type of home I stay in.</h3>
              <p>{e.home_type}</p>
              <h3> My outdoor area size</h3>
              <p>{e.outdoor_area}</p>
              <h3>Emergency transport.</h3>
              <p>{e.Emergency_transport}</p>
            </>
          );
        })}
      </div>
    </>
  );
};
