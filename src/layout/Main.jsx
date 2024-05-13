import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 3xl:px-0">
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
