import "./App.css";

import Header from "./components/Header";
import Project from "./components/Project";

function App() {
  const projects = [
    {
      index: 1,
      title: "Fun-Wing",
      image: "/images/funwingbanner.png",
      desc: (
        <>
          <span>2023</span>
          <p>
            A mockup website developed by myself, Tina Rowe, and Evan Harte
            while attending Keyin College.
          </p>
        </>
      ),
    },
    {
      index: 2,
      title: "Wun-Fing",
      image: "/images/funwingbanner.png",
      desc: (
        <span>
          A mockup website developed by myself, Tina Rowe, and Evan Harte while
          attending Keyin College.
        </span>
      ),
    },
  ];
  return (
    <div>
      <Header />
      <main>
        {projects.map((project) => {
          return <Project key={project.index} project={project} />;
        })}
      </main>
    </div>
  );
}

export default App;
