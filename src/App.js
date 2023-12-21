import "./App.css";

import Header from "./components/Header";
import ProjectGallery from "./components/ProjectGallery";

function App() {
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
            a Keyin College assignment.
          </p>
        </>
      ),
    },
  ];
  return (
    <div>
      <Header />
      <main>
        <ProjectGallery projects={projects} />
      </main>
    </div>
  );
}

export default App;
