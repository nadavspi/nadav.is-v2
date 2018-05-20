import React from "react"
import Link from 'gatsby-link';
import '../stylesheets/styles.scss';

export default ({ children }) => (
  <div>
    <a href="#main" className="skip-link visuallyhidden focusable">Skip to main content</a>
    <aside className="home-link"><Link to="/" tabIndex="0">Home</Link></aside>
    <nav className="main-nav">
      <h1 className="visuallyhidden">Site navigation</h1>
      <ul>
        <li><Link to="/writing">Writing</Link>{' '}</li>
        <li><Link to="/reading">Reading</Link></li>
      </ul>
    </nav>
    <main role="main" id="main">
      {children()}
    </main>
  </div>
);
