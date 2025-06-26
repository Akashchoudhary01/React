import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const HandleSubmit = function (e) {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div className="flex flex-col gap-3 text-white justify-center items-center p-10">
      <h2 className="text-3xl mb-4">Login</h2>

      <div className=" flex gap-2 text-white justify-center items-center ">
        <label htmlFor="Username">
          UserName
        </label>
        <input
          type="text"
          value={userName}
          className="p-2 outline-1 bg-zinc-700"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="UserName"
        />
      </div>
      <div className=" flex gap-4 text-white justify-center items-center ">
        <label htmlFor="Password">Password</label>
        <input
          type="text"
          value={password}
          className="p-2 bg-zinc-700"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
      </div>

      <button
        className="px-8 rounded-xl mt-4 py-2 bg-blue-500"
        onClick={HandleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
export default Login;
