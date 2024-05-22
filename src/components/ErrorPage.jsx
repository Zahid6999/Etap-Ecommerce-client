import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error-page.jpg";
import { Button } from "@nextui-org/react";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="grid justify-center mt-[200px] text-center "
    >
      <img src={errorImg} alt="" className="" />
      <h1 className="text-center text-xl font-semibold py-6">Oops!</h1>
      <p className="text-center text-lg">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-orange-600 font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <Button color="primary">Home </Button>
      </Link>
    </div>
  );
}
