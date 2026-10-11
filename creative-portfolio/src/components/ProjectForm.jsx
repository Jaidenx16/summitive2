
import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    image: ""
  });

  function handleChange(event) {
    setProject({
      ...project,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddProject({
      ...project,
      id: Date.now(),
      image: project.image ||
        "https://picsum.photos/seed/newproject/600/400"
    });

    setProject({
      title: "",
      category: "",
      description: "",
      image: ""
    });
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <input
        name="title"
        placeholder="Project Title"
        value={project.title}
        onChange={handleChange}
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={project.category}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Project Description"
        value={project.description}
        onChange={handleChange}
        required
      />

      <input
        name="image"
        placeholder="Image URL (optional)"
        value={project.image}
        onChange={handleChange}
      />

      <button type="submit">Save Project</button>
    </form>
  );
}

export default ProjectForm;
