import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

interface ButtonProps {
  to: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ to, label }) => (
  <Link to={to} className={styles.root}>
    {label}
  </Link>
);

export default Button;
