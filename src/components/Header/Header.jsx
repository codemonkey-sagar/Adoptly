import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header text-center">
      <Link to={"/"}>Adoptly - Header Component</Link>
    </div>
  );
};

export default Header;
