import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { server } from "../App";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logOutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(
        `${server}/users/logout`,

        {
          withCredentials: true,
        }
      );
      toast.success("Come back Soon!");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>Todo App.</h2>
      </div>
      <article>
        {/*link is used to not reload page when clicked */}
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {isAuthenticated ? (
          //* btn will be disabled while loading = true
          <button disabled={loading} onClick={logOutHandler} className="btn">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
