import React from "react";
import "./HomeContent.scss";

export default function HomeContent() {
  return (
    <div className="page-section home-content">
      <div className="container">
        <div className="narrow-heading">
          <h1>3D Web GIS Developer — CesiumJS Specialist</h1>
        </div>

        <header>
          <p>
            Hello, and welcome to my portfolio. I am a{" "}
            <strong>3D Web GIS developer</strong> specializing in{" "}
            <strong>CesiumJS</strong> with over eight years of professional
            experience. Since 2017 (CesiumJS 1.37), I have been dedicated to
            building interactive, high-performance 3D mapping solutions that
            integrate massive geospatial datasets and advanced visualization
            tools.
          </p>
        </header>

        <section>
          <h2>Expertise</h2>
          <p>
            I design and develop scalable 3D Web GIS systems using CesiumJS,
            focusing on performance, precision, and usability.
            <br /> My work combines strong geospatial knowledge with efficient
            client-side rendering and data-driven analytics.
          </p>

          <p>
            These projects demonstrate my expertise in{" "}
            <strong>
              3D Web GIS, CesiumJS development, and interactive spatial
              visualization
            </strong>
            .
          </p>
          <ul>
            <li>
              <strong>Construkted</strong> –{" "}
              <a href="https://construkted.com/" target="_blank">
                https://construkted.com/
              </a>
            </li>
            <li>
              <strong>Siros Web </strong> –{" "}
              <a
                href="https://siros-web-auto.azurewebsites.net/"
                target="_blank"
              >
                https://siros-web-auto.azurewebsites.net/
              </a>
            </li>
            <li>
              <strong>EnviroAI 3D </strong> –{" "}
              <a href="https://3d.enviroaitest.com/" target="_blank">
                https://3d.enviroaitest.com/
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Experiences</h2>
          <ul>
            <li>
              Drawing and editing vector data (Points, Polylines, Polygons,
              Labels) on 3D terrain
            </li>
            <li>
              Measurement tools: coordinate extraction, distance, area, and
              cut/fill volume
            </li>
            <li>
              High-performance rendering of large raster and vector datasets
            </li>
            <li>
              Tiling and visualization of massive spatial data:
              <ul>
                <li>Vector</li>
                <li>Satellite and aerial imagery</li>
                <li>Digital Elevation Models (DEM)</li>
                <li>Photogrammetry-based 3D models</li>
              </ul>
            </li>
            <li>Georeferencing 3D assets (models and 3D Tiles)</li>
            <li>
              Custom navigation systems such as first-person camera controls
            </li>
            <li>Map utilities: compass, home extent, and orientation tools</li>
            <li>Viewshed analysis for terrain visibility</li>
            <li>Terrain Profile</li>
            <li>PointCloud Profile</li>
            <li>Dynamic clipping of 3D Tiles using user-defined boundaries</li>
            <li>
              Real-time terrain modification and 3D profiling (terrain and point
              cloud)
            </li>
            <li>Video projection on 3D Tiles and terrain surfaces</li>
            <li>Subsurface rendering using underground elevation models</li>
            <li>
              Interactive presentations (screen/video recording, similar to
              Cesium ion Stories)
            </li>
            <li>
              Underground visualization for infrastructure, tunnels, and
              subsurface structures
            </li>
            <li>Import and management of multiple spatial data formats</li>
            <li>Development of the custom 3d geometry</li>
            <li>Development of the custom shader/material</li>
            <li>
              Development of custom server for streaming your data(terrain,
              image tiles) with Nodejs or PHP
            </li>
            <li>Integrating CesiumJS app with WordPress or Larabel</li>
            <li>Integrating CesiumJS app with WebPack, React, Vue, Angular</li>
            <li>Extending and bug fixing preexisting Cesium Js app </li>
          </ul>
        </section>

        <section>
          <h2>Research & Development</h2>
          <p>
            I am currently researching{" "}
            <strong>Cesium ion’s proprietary 3D tiling algorithm</strong>, which
            remains a black box to most end users. My goal is to develop custom,
            open, and efficient 3D tiling solutions for large-scale spatial data
            visualization and analysis.
          </p>
          <p>
            I welcome discussions or collaborative research related to 3D tiling
            optimization and CesiumJS-based GIS analysis, and I am happy to
            share insights from my ongoing work.
          </p>
        </section>

        <section>
          <h2>Collaboration</h2>
          <p>
            If you require advanced expertise in CesiumJS or face challenges in
            3D Web GIS development, I am available for professional
            collaboration and technical consultation.
          </p>
          <p>
            📬 <a href="mailto:wugis1219@gmail.com">Contact Me</a>
          </p>
        </section>
      </div>
    </div>
  );
}
