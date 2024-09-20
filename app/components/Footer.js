// components/Footer.js

export default function Footer() {
    return (
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <div>
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  