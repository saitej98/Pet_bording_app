import { Routes, Route } from "react-router-dom";
import { Entity } from "../Components/CreateEntity";
import { Home } from "../Components/Home";
import { PetBoardingDetails } from "../Components/entity";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/create" element={<Entity />} />
        <Route path="/listing/:id" element={<PetBoardingDetails />} />
      </Routes>
    </>
  );
};
