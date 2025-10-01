import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="shadow p-6 w-80 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
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
              Login
            </button>
            <p className="text-center mt-2">
              Don&apos;t Have Account? <Link to="/register">Signp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
