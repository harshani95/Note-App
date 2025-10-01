import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(
        "http://localost:5000/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );
      alert("User Registered Successfully");
      console.log("User registered successfully", response.data);
    } catch (error) {
      console.log("Error while registering user");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="shadow p-6 w-80 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border-gray-200 border rounded-xl"
              placeholder="Enter Username "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-gray-200 border rounded-xl"
              name="email"
              placeholder="Enter Email "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Enter Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-gray-200 border rounded-xl"
              name="password"
              placeholder="******"
              required
            />
          </div>
          <div className="mb-4 mt-2">
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded"
            >
              Signup
            </button>
            <p className="text-center mt-2">
              Already Have Account? <Link to="/login"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
