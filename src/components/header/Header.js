import { IoIosIceCream } from "react-icons/io";
import { GiIceCreamScoop } from "react-icons/gi";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <IoIosIceCream
          size={90}
          style={{
            verticalAlign: "middle",
            padding: "5px",
          }}
          className="spin-animation1"
        />
        <p>Ice Kareem</p>
      </div>
      <div className="header_content">
        <div className="login">Sign up / Login</div>
        <div className="cart">
          <GiIceCreamScoop
            size={35}
            style={{
              verticalAlign: "top",
              padding: "5px",
            }}
            // className="spin-animation2"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
