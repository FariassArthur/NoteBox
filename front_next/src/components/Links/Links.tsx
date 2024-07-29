//css
import styled from "styled-components";

//router
import { usePathname } from "next/navigation";
import Link from "next/link";

const LinksContainner = styled.main`
  margin-right: 2rem;

  position: sticky;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 1.5rem;

    gap: 1rem;
  }

  ul li {
    opacity: 70%;
    text-decoration: none;
    list-style: none;

    font-size: 20px;

}

.link {
    color: var(--black);
}


.link:hover {
    opacity: 100%;
    color: var(--black-hover);
    font-weight: bold;

    transition: .3s;

    cursor: pointer;
}


.bold {
    font-weight: bold;

}
`;

const Links = () => {
  const location = usePathname();

  return (
    <LinksContainner>
      <ul className="linksList">
        <li className={location === "/home/cards" ? "bold" : ""}>
          <Link className="link" href="/cards">
            Overview
          </Link>
        </li>
        <li className={location === "/home/calendar" ? "bold" : ""}>
          <Link className="link" href="/calendar">
            Calendar
          </Link>
        </li>
        <li className={location === "/home/todo" ? "bold" : ""}>
          <Link className="link" href="/ToDo">
            ToDo
          </Link>
        </li>
      </ul>
    </LinksContainner>
  );
};

export default Links;
