import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PetBoardingDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios.get(`http://localhost:8000/entities/${id}`).then((res) => {
      console.log(res.data);
      setDetails(res.data );
    });
  };

  return (
    <>
      <h1>PetBoarding Details</h1>
      <div className="container">
          <h1>Summary</h1>
          <h3>Boarding facilities you leave em we love them</h3>
          <h4>Number of pets that will be watched at one time.</h4>
          <p>{details.Capacity}</p>
          <h4>Accepted Pet Types</h4>
          <p>{details.Type}</p>
          <h3>Accepted Pet size</h3>
          <p>{details.Weight}</p>
          <h3>
            The place your pet will be if they are left unsupervised at
            homdetails.
          </h3>
          <p>Free roam of the house {details.Roaming_place}</p>
          <h3>The place your pet will sleep at night.</h3>
          <p>Wherever they want</p>
          <h3>The number of potty breaks provided per day.</h3>
          <p>Full access outside {details.potty_breaks}</p>
          <h3>The number of walks provided per day.</h3>
          <p>{details.noof_walks}</p>
          <h3>The type of home I stay in.</h3>
          <p>{details.home_type}</p>
          <h3> My outdoor area size</h3>
          <p>{details.outdoor_area}</p>
          <h3>Emergency transport.</h3>
          <p>{details.Emergency_transport}</p>
      </div>
    </>
  );
};
