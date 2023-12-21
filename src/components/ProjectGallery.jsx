import Project from "./Project";

const ProjectGallery = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => {
        return <Project key={project.index} project={project} />;
      })}
    </div>
  );
};

export default ProjectGallery;
