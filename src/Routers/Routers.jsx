import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { InputPage1 } from "../pages/InputPage1";
import { InputPage2 } from "../pages/InputPage2";
import { Users } from "../pages/Users";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration/one" element={<InputPage1 />} />
      <Route path="/registration/two" element={<InputPage2 />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};
