import { useEffect, useState } from "react";
import "./index.css";

function BootLoader({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setReady(true);
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return (
      <div style={styles.loader}>
        <div style={styles.spinner} />
        <p>Loading assets…</p>
      </div>
    );
  }

  return children;
}

const styles = {
  loader: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    color: "#fff",
  },
  spinner: {
    width: 40,
    height: 40,
    border: "4px solid #334155",
    borderTop: "4px solid #60a5fa",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default BootLoader;