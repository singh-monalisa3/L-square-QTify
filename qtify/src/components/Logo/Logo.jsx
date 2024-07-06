import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "../Navbar1/navbar.module.css";
const Logo = () => {
  let navigate = useNavigate();
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        className={styles.img}
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Logo;
