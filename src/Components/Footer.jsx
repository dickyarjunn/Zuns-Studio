const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {year}{" "}
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Zuns Studio
          </a>
          . All rights reserved. Crafted with 💜 by Dickhy Arjun Prasetiyo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
