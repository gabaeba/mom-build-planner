import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const styles = createUseStyles({
  links: {
    textDecoration: "none",
    color: "#FFF",
  },
});

export default function Navbar() {
  const { links } = styles();

  return (
    <nav>
      <div className="wrapper" style={{
        paddingTop: "10px",
        display: "flex",
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
      }}>
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
      </div>
    </nav>
  );
}
