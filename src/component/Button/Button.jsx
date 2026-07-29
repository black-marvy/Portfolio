import styles from "./Button.module.css";

function Button({
  text,

  type,

  icon,

  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${
        type === "outline" ? styles.outline : styles.fill
      }`}
    >
      {text}

      {icon}
    </button>
  );
}

export default Button;
