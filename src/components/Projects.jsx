import { useState } from "react";
import { projectLinks } from "../utils/projectLinks";

function Projects(){

    const [showDesc, setShowDesc] = useState(null);

    function handleClickDesc(index){
        setShowDesc(prev => (prev === index ? null : index));
    }

    console.log(projectLinks);

    return (
      <div className="projectsParent">
        <h1 className="projectHeading">Projects</h1>  
        <br />
        <div id="projects" className="projects">
            {
                projectLinks.map((project, index) => 
                    <div key={project.id} className="projectsChild">
                        
                        <img className="projectThumbnail" src={project.projectThumbnail} alt={`Image of ${project.projectName}`} height="250px" width="250px" />
                        
                        <div className="projectsSubChild">    

                            <div className="projectTitleLink">
                                <h2>{project.projectName}</h2>
                                <h3><a href={project.link} target="_blank">Visit</a></h3>
                            </div>
                            
                            <button className="projectButton" onClick={() => handleClickDesc(index)}>{showDesc === index ? "Show Less" : "Show More" }</button>

                            <div className="projectsChildSkills">
                                {showDesc === index &&
                                    project.technologiesUsed.map((tech, techindex) => 
                                        <p className="projectsSkills" key={techindex}>{tech}</p>
                                    )
                                }
                            </div>
                            
                            <p className="projectDesc">{showDesc === index && project.projectDescription}</p>
                        
                        </div>
                    
                    </div>
                )
            }
        </div>
      </div>
    )
  }
  
  
export default Projects;