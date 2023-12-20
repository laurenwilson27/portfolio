import "./App.css";

import Header from "./components/Header";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Project index={0} />
      </main>
    </div>
  );
}

export default App;
