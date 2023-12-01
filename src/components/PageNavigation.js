import { NavLink } from "react-router-dom";

function PageNavigation({ title }) {
  return (
    <div>
      <NavLink to="/" className="text-decoration-none ">
        Home
      </NavLink>
      /{title}
    </div>
  );
}

export default PageNavigation;
