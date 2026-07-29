import { useEffect, useState } from "react";
import styles from "./CursorGlow.module.css";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className={styles.glow}
      style={{
        left: position.x,
        top: position.y,
      }}
    ></div>
  );
}

export default CursorGlow;
