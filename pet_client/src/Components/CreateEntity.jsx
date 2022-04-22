import { useState } from "react";
import axios from "axios";

export const Entity = () => {
  let obj = {
    Name: "",
    City: "",
    Address: "",
    Capacity: "",
    Costperday: "",
    Verified: "",
    Rating: "",
    Type: [],
    Weight: "",
    Roaming_place: "",
    Sleep_place: "",
    potty_breaks: "",
    noof_walks: "",
    home_type: "",
    outdoor_area: "",
    Emergency_transport: "",
  };
  const [entity, setEntity] = useState(obj);

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8000/entities", entity).then(() => {
      alert("Form Submitted Successfully..!");
    });
  }

  function handleChange(e) {
    const { id, value } = e.target;
    // console.log(id, value);
    setEntity({ ...entity, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Creation of Pet_Boarding Site</h1>
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="name"
          id="Name"
          placeholder="Enter your name"
          required
          onChange={handleChange}
        />
        <br />

        <label htmlFor="">City</label>
        <input
          type="text"
          className="city"
          id="City"
          placeholder="Enter your City"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Address</label>
        <input
          type="text"
          className="add"
          id="Address"
          placeholder="Enter your Address"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Capacity</label>
        <input
          type="number"
          className="capacity"
          id="Capacity"
          placeholder="No of Capacity"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Costperday</label>
        <input
          type="number"
          className="cost"
          id="Costperday"
          placeholder="Cost"
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Verified</label>
        {/* <input type="text" className="city" id="City" placeholder="Enter your City" required /> */}
        <select Classname="verified" id="Verified" onChange={handleChange}>
          <option value="">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <br />
        <label>Rating</label>
        <input
          type="number"
          className="rating"
          id="Rating"
          placeholder="rate out of 5"
          onChange={handleChange}
        ></input>

        <br />
        <label>Type</label>
        <br />
        <label htmlFor="">dogs</label>
        <input
          type="checkbox"
          id="Type"
          name="Dogs"
          value="Dogs"
          onChange={handleChange}
        />
        <label htmlFor="">cats</label>
        <input
          type="checkbox"
          id="Type"
          name="Cats"
          value="Cats"
          onChange={handleChange}
        />
        <label htmlFor="">rabbits</label>
        <input
          type="checkbox"
          id="Type"
          value="Rabbits"
          name="Rabbits"
          onChange={handleChange}
        />

        <br />
        <label>Weight</label>
        <select className="weight" id="Weight" onChange={handleChange}>
          <option value=""></option>
          <option value="1-5kg">1-5KG</option>
          <option value="5-10kg">5-10KG</option>
          <option value="10-20kg">10-20KG</option>
          <option value="20-40kg">20-40KG</option>
          <option value="40+kg">40+ KG</option>
        </select>
        <br />
        <label>Roaming_place</label>
        <input type="text" id="Roaming_place" onChange={handleChange}></input>
        <br />
        <label>Sleep_place</label>
        <input type="text" id="Sleep_place" onChange={handleChange}></input>
        <br />
        <label>potty_breaks</label>
        <input type="number" id="potty_breaks" onChange={handleChange}></input>
        <br />
        <label>noof_walks</label>
        <input type="number" id="noof_walks" onChange={handleChange}></input>

        <br />

        <label htmlFor="">home_type</label>
        <input
          type="text"
          className="home"
          id="home_type"
          placeholder="Enter your home type"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">outdoor_area</label>
        <select Classname="area" id="outdoor_area" onChange={handleChange}>
          <option value="">---</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <br />
        <label htmlFor="">Emergency_transport</label>
        <select
          Classname="emergency"
          id="Emergency_transport"
          onChange={handleChange}
        >
          <option value="">---</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <br />
        <input type="submit" className="submitbutt" />
      </form>
    </>
  );
};
