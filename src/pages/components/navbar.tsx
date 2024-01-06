import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const styles = createUseStyles({
  links: {
    textDecoration: "none",
    color: "#111111",
    fontWeight: 600,
    "&:hover": {
      color: "#111111",
      textDecoration: "underline",
      textUnderlineOffset: "5px",
    },
  },
});

export default function Navbar() {
  const { links } = styles();

  return (
    <nav>
      <div
        style={{
          background: `linear-gradient(
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.15) 15%,
            rgba(0, 0, 0, 0.1) 25%,
            rgba(0, 0, 0, 0.08) 35%,
            rgba(0, 0, 0, 0.06) 45%,
            rgba(0, 0, 0, 0.04) 55%,
            rgba(0, 0, 0, 0.03) 65%,
            rgba(0, 0, 0, 0.02) 75%,
            rgba(0, 0, 0, 0.01) 85%,
            rgba(0, 0, 0, 0.005) 92%,
            rgba(0, 0, 0, 0.003) 96%,
            rgba(0, 0, 0, 0.001) 98%,
            rgba(0, 0, 0, 0) 100%
          )`,
        }}
      >
        <div
          className="wrapper"
          style={{
            padding: "10px 16px",
            display: "flex",
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Internal Link */}
          <Link to="/" style={{ marginRight: "auto" }}>
            <img
              src="./assets/mom_logo.png"
              alt="mom logo"
              style={{ height: "50px" }}
            />
          </Link>
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
      </div>
    </nav>
  );
}
