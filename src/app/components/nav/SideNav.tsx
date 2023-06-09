import { Nav } from "react-bootstrap";
import { NavigationPath } from "../../models/navigation";
import { BRANCHES, BRANCHES_ROUTE, CLIENTS, CLIENTS_ROUTE, EMPLOYEES, EMPLOYEES_ROUTE, HOME, HOME_ROUTE, SERVICES, SERVICES_ROUTE } from "../../utilities/string_constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const navigationPaths: NavigationPath[] = [
  {
    title: HOME,
    path: HOME_ROUTE,
  },
  {
    title: BRANCHES,
    path: BRANCHES_ROUTE,
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
];

export const SideNav = () => {
  const currentNavIndex = 0;
  const [currentNav, setCurrentNav] = useState<number>(currentNavIndex);

  const navigate = useNavigate();

  const handleNavigateRoute = (index: number) => {
    setCurrentNav(index);
    return navigate(navigationPaths[index].path);
  }

  return (
    <Nav
      defaultActiveKey={HOME_ROUTE}
      className="side__nav"
    >
      {
        navigationPaths.map((nav, index) => {
          const { title, path } = nav;

          return <Nav.Link
            key={title}
            className={`${navigationPaths[currentNav].path === path && "active"}`}
            onClick={() => handleNavigateRoute(index)}
          >
            {title}
          </Nav.Link>
        })
      }
    </Nav>
  );
}

