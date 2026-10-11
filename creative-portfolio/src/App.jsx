
import { useState } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";

const starterProjects = [
  {
    id: 1,
    title: "Pixel RPG - Work in Progress",
    category: "Game Development",
    description:
      "WORK IN PROGRESS GAME... A fantasy pixel RPG currently in development. The game will feature exploration, character progression, combat, and a large world to discover.",
    image: "/images/rpg.png"
  },
  {
    id: 2,
    title: "Tiramisu Cookbook",
    category: "Cooking",
    description:
      "Learn to make classic Italian tiramisu! Mix mascarpone cheese with sugar and whipped cream. Dip ladyfingers briefly in cooled espresso, then alternate layers of cookies and cream. Refrigerate for at least 4 hours and dust with cocoa powder before serving.",
    image: "/images/tiramisu.png"
  },
  {
    id: 3,
    title: "Yamaha YZF-R3",
    category: "Motorcycles",
    description:
      "The Yamaha R3 is a lightweight sport motorcycle with a 321cc parallel-twin engine. It offers sporty styling, responsive handling, and approachable performance. It is a popular choice for beginner riders and experienced riders who enjoy smaller sport bikes.",
    image: "/images/r3.png"
  }
];

function App() {
  const [projects, setProjects] = useState(() => {
    try {
      const savedProjects = localStorage.getItem("portfolioProjects");

      return savedProjects
        ? JSON.parse(savedProjects)
        : starterProjects;
    } catch {
      return starterProjects;
    }
  });

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  function addProject(project) {
    const updatedProjects = [...projects, project];

    setProjects(updatedProjects);

    localStorage.setItem(
      "portfolioProjects",
      JSON.stringify(updatedProjects)
    );

    setShowForm(false);
  }

  const filteredProjects = projects.filter((project) => {
    const searchText = search.toLowerCase();

    return (
      project.title.toLowerCase().includes(searchText) ||
      project.category.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="app">
      <Header
        showForm={showForm}
        onAddClick={() => setShowForm(!showForm)}
      />

      <section className="hero">
        <h1>My Creative Projects</h1>
        <p>
          Welcome to my portfolio! Here you can explore
          my projects, interests, and creative work.
        </p>
      </section>

      <main className="container">
        <div className="toolbar">
          <h2>My Projects</h2>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        {showForm && (
          <ProjectForm onAddProject={addProject} />
        )}

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="empty-message">
            No projects found.
          </p>
        )}
      </main>

      <footer>
        <p>© 2026 Creative Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
