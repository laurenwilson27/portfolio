import "./App.css";
import ClosedSrc from "./components/ClosedSrc";
import GM8Tag from "./components/GM8Tag";
import GitHubLink from "./components/GitHubLink";
import ReactTag from "./components/ReactTag";

import Header from "./components/Header";
import ProjectGallery from "./components/ProjectGallery";

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  // Get refs and functions from the useSmoothScroll hook
  const [projectRef, toProjects] = useSmoothScroll();
  const [contactRef, toContacts] = useSmoothScroll();

  const projects = [
    {
      index: 1,
      title: "Fogtown Echoes",
      image: "/images/fogtownbanner.png",
      desc: (
        <>
          <span>2023</span>
          <p>
            A small website developed by myself, Natalina Chiarot, Steven
            Squires, and Mitchell Barkley for a Keyin College assignment. The
            site is a simple, music-themed message board - users are able to
            create accounts, post topics in various forums, and post comments
            within those topics.
          </p>
          <div className="tagBar">
            <ReactTag />
            <GitHubLink repo="https://github.com/laurenwilson27/music-forum" />
          </div>
        </>
      ),
    },
    {
      index: 2,
      title: "Fun-Wing Vacations",
      image: "/images/funwingbanner.png",
      desc: (
        <>
          <span>2023</span>
          <p>
            A mockup website developed by myself, Tina Rowe, and Evan Harte for
            a Keyin College assignment. The site was made for a hypothetical
            travel agency - it has pages for showing the available resorts, as
            well as a simple page for "booking" a vacation. This project was our
            first time working with React.
          </p>
          <div className="tagBar">
            <ReactTag />
            <GitHubLink repo="https://github.com/laurenwilson27/travel-agency" />
          </div>
        </>
      ),
    },
    {
      index: 3,
      title: "Project Scarlet",
      image: "/images/snybanner.png",
      desc: (
        <>
          <span>2007 ~ 2021</span>
          <p>
            A small video game I developed intermittently as a personal project
            over a long period of time. It is a platforming action game which
            takes inspiration from the Mega Man series. It has multiplayer
            gameplay; finding multiplayer lobbies and saving player progression
            was done through the now-defunct Reflect Games web server.
          </p>
          <div className="tagBar">
            <GM8Tag />
            <ClosedSrc />
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <Router>
        <Header />
        <nav className="sticky">
          <span className="navLink" onClick={toProjects}>
            Projects
          </span>{" "}
          &bull;{" "}
          <span className="navLink" onClick={toContacts}>
            Contact
          </span>
        </nav>
        <h1 ref={projectRef}>Projects</h1>
        <p className="preamble">
          Below you can find a collection of projects I've worked both for
          schoolwork, and as a hobby. Click on a project to see more information
          about it, as well as links to GitHub repositories containing the
          project code.
        </p>
        <main>
          <section>
            <ProjectGallery projects={projects} />
          </section>
          <div className="sectionDivider" ref={contactRef}></div>
          <section>
            <h1>Contact Me</h1>
            <div className="contact">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:lauren.wilson@keyin.com";
                }}
              >
                <div className="contactLink">
                  <i className="fa-regular fa-envelope" />
                  Email
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/in/lauren-wilson-85a457254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contactLink">
                  <i className="fa-brands fa-linkedin"></i>
                  LinkedIn
                </div>
              </Link>
              <Link
                to="https://github.com/laurenwilson27/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contactLink">
                  <i className="fa-brands fa-github"></i>GitHub
                </div>
              </Link>
            </div>
          </section>
        </main>
        <div className="sectionDivider">&copy; Lauren Wilson 2023</div>
      </Router>
    </div>
  );
}

export default App;
