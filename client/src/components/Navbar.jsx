import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";
import PropTypes from "prop-types";

const Navbar = ({ setSearchTerm }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Note App</Link>
      </div>
      <input
        type="text"
        placeholder="Search notes....."
        className="bg-gray-600 px-4 py-2 ronded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {!user ? (
          <>
            <Link to="/login" className="bg-blue-500 px-4 py-2 rounded mr-4">
              Login
            </Link>
            <Link to="/register" className="bg-green-500 px-4 py-2 rounded">
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="mr-4">{user.name}</span>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded ml-4 cursor-pointer"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default Navbar;
