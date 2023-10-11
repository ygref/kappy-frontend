import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <header className="bg-gray-300">
      <nav>
        <Link to="/" className="hover:bg-gray-500">
          Home
        </Link>{" "}
        <Link to="/products" className="hover:bg-gray-500">
          {" "}
          Products
        </Link>{" "}
        <Link to="/login" className="hover:bg-gray-500">
          {" "}
          Login
        </Link>{" "}
        <Link to="/signup" className="hover:bg-gray-500">
          {" "}
          Signup
        </Link>{" "}
        <LogoutLink />
        <Link to="/products/new" className="hover:bg-gray-500">
          {" "}
          Create New Product
        </Link>{" "}
      </nav>
    </header>
  );
}
