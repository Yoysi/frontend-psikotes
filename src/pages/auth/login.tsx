import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login () {
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e: React.FormEvent)=> {
    e.preventDefault();

    if (username === "admin" && password === "123") {
      navigate("admin/dashboard");
    } else {
      alert ("username or password invalid");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form onSubmit={handlesubmit} style={{ width: "300px" }}>
        <h2>Login Admin</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "8px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;