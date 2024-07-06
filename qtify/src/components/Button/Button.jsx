import navbarStyles from "../Navbar1/navbar.module.css";

const Button = ({ text, eventHandler }) => {
  return (
    <div>
      <button
        className={navbarStyles.feedback}
        onClick={(e) =>
          eventHandler.event === "onClick" && eventHandler.handler(e)
        }
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
