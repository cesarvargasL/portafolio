/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "teaching assistant",
    description:
      "I taught classes as a teaching assistant in subjects such as data networks 📡, affiliated with Cisco from my university and programming 💻",
    url: "https://drive.google.com/drive/folders/1QkwwN27g8jWbhg3eAk1G3pl_wrHeQSXq?usp=sharing",
  },
  {
    title: "This is a web application for a physiotherapy office",
    description:
      "Practice for a physiotherapy office using PHP,HTML,CSS 🏥",
    url: "https://github.com/cesarvargasL/Consultorio-Fisioterapia-.git",
  },
  {
    title: "video recorded in a class taught by me",
    description:
      "In my work as a teaching assistant, I taught how to solve these programming problems for my students, explaining programming concepts 🎈",
    url: "https://drive.google.com/file/d/1TkQCrfFHEmwef_oPWQdk_J1ueFtBAqwJ/view?usp=sharing",
  },
  {
    title: "This is a static website for a coffee shop",
    description:
      "Static website for coffee shop using CSS and HTML 🐈‍⬛🐙",
    url: "https://github.com/cesarvargasL/WebSiteCoffeeShop.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
