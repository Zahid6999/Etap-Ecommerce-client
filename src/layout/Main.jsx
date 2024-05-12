import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";

const Main = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 3xl:px-0">
      <Navber></Navber>
      <Outlet />
    </div>
  );
};

export default Main;
