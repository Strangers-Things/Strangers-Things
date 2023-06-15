import React, { useState } from "react";
import { loginUser } from "api/authorization";
export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>Login:</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setUsername("");
          setPassword("");
        }}
      >
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}