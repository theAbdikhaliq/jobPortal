import React, { useContext } from "react";
import { Link } from "react-router-dom";
import mailcamp from "../assets/mailchimp.jpeg";
import { UserContext } from "../Context/UserContext";

function Header() {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const handleOnLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
  };
  return (
    <div className="flex justify-between items-center mx-32 my-5">
      <div className="logo">
        <Link to="/" className="font-bold text-2xl">
          WP-Jobs
        </Link>
      </div>
      {loggedIn == true ? (
        <div className="flex gap-5 items-center">
          <div className="mx-auto">
            <img
              src={mailcamp}
              alt=""
              srcset=""
              className="w-16 rounded-full"
            />
          </div>
          <Link
            to="/"
            className="px-10 py-2 bg-black text-white rounded-md"
            onClick={handleOnLogOut}
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Link to="/login">Login</Link>
          <Link
            to="/register"
            className="px-10 py-2 bg-black text-white rounded-md"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
