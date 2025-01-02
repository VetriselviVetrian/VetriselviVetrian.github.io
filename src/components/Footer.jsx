import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center p-8 text-base-content">
      <div className="max-w-md mx-auto text-center">
        <p className="text-sm">
          Designed & Developed by{" "}
          <a
            href="https://sudeepdev.co"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-info font-medium"
          >
            Sudeep
          </a>
        </p>
        <p className="text-sm mt-2 opacity-75">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;