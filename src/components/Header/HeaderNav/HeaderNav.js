import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar-default">
        <div className="navbar navbar-primary">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="https://coolgis.org/app/index.html">CoolGIS</a>
                </li>
                <li>
                  <a href="/portfolio/">Portfolio</a>
                </li>
                <li>
                  <a href="/CesiumJsSamples/index.html">CesiumJS Samples</a>
                </li>
                <li>
                  <a href="https://medium.com/@coolgis">Blog</a>
                </li>
                <li>
                  <a href="/about/">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
