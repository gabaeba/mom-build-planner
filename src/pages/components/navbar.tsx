import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const styles = createUseStyles({
  navbar: {
    width: "200px",
    height: "calc(100vh - 60px)",
    // border: '1px solid #000',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    paddingTop: "10px",
    background: "#fff",
    position: "fixed",
    marginTop: "60px",
  },
  links: {
    textDecoration: "none",
    color: "#FFF",
  },
  button: {
    width: "90%",
    height: "40px",
    display: "flex",
    fontSize: "14px",
    alignItems: "center !important",
    justifyContent: "start !important",
    padding: "0 0 0 10px",
    borderRadius: "5px",
    gap: 10,
    "&:hover": {
      background: "#F5F5F5 !important ",
    },
  },
  currentRouteLink: { background: "#E6F4Ff" },
  routeLink: { background: "transparent", color: "#121212" },
});

export default function Navbar() {
  const { links } = styles();

  return (
    <nav
      style={{
        paddingTop: "10px",
        display: "flex",
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Internal Link */}
      <Link to="/" className={links}>
        Home
      </Link>
      {/* External Links */}
      <a
        className={links}
        href="https://www.mythosofmidgard.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website
      </a>
      <a
        className={links}
        href="https://www.mythosofmidgard.com/wiki"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wiki
      </a>
    </nav>
  );
}
