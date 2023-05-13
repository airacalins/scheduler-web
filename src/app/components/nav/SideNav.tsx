import { Nav } from "react-bootstrap";
import { NavigationPath } from "../../models/navigation";
import { CLIENTS, CLIENTS_ROUTE, EMPLOYEES, EMPLOYEES_ROUTE, HOME, HOME_ROUTE, SERVICES, SERVICES_ROUTE } from "../../utilities/string_constants";
import { useNavigate } from "react-router-dom";

export const navigationPaths: NavigationPath[] = [
  {
    title: HOME,
    path: HOME_ROUTE,
  },
  {
    title: CLIENTS,
    path: CLIENTS_ROUTE,
  },
  {
    title: EMPLOYEES,
    path: EMPLOYEES_ROUTE,
  },

  {
    title: SERVICES,
    path: SERVICES_ROUTE,
  },
]
export const SideNav = () => {
  const navigate = useNavigate();

  return (
    <Nav defaultActiveKey="/home" className="flex-column vh-100 py-2 bg__primary">
      {
        navigationPaths.map(nav => {
          const { title, path } = nav;

          return <Nav.Link
            key={title}
            className=""
            onClick={() => navigate(path)}
          >
            {title}
          </Nav.Link>
        })
      }
    </Nav>
  );
}

