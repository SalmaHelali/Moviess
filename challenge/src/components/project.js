import ProjectCard from './ProjectCard'

function Projects({project}) {
    return (

        <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
       {project.map (el=><ProjectCard el={el}>
         
       </ProjectCard>
        
        )}
      </div>
    </section>
    );
  
}
  
  export default Projects ;

      
     
  

