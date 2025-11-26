// src/[local]/(protected)/App.jsx
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";

export default function App() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div style={{
      maxWidth: "800px",
      margin: "50px auto",
      padding: "20px",
      fontFamily: "'Poppins', sans-serif",
      background: "#fff4e6",
      borderRadius: "15px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
    }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#ff7f50" }}>Recipe Blog</h1>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 16px",
            backgroundColor: "#ff7f50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 500
          }}
        >
          Logout
        </button>
      </header>

      <section>
        <h2 style={{ color: "#333", marginBottom: "15px" }}>Welcome to the Recipe Blog!</h2>
        <p style={{ color: "#555", lineHeight: 1.6 }}>
          Here you can browse recipes posted by other users or search for a food. If it hasn’t been posted yet, our API will fetch it for you.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Search for a recipe..."
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "20px"
          }}
        />
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <div style={{
            flex: "1 1 200px",
            padding: "15px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}>
            <h3>Spaghetti Carbonara</h3>
            <p>Posted by: John Doe</p>
          </div>
          <div style={{
            flex: "1 1 200px",
            padding: "15px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}>
            <h3>Avocado Toast</h3>
            <p>Posted by: Jane Smith</p>
          </div>
        </div>
      </section>
    </div>
  );
}
