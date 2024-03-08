import * as React from 'react';
import { useEffect, useState } from 'react';
import NavbarProject from '../components/OurProject/Navbar';
import Banner from '../components/Banner';
import ProjectCard from '../components/OurProject/ProjectCard';
import { IProject } from '../models/IProject';
import ProjectsService from '../services/projects-service';
import { useParams } from 'react-router-dom';

export interface IOurProjectProps {
 
}

export default function OurProject({}: IOurProjectProps) {
  
  const { id } = useParams<{ id: string }>();
  const [categoryId, setCategoryId] = useState<number>(0);
  const [projects, setProjects] = useState<IProject[]>([]);

  async function fetchProjects(){
    
    try {
      const response = await ProjectsService.projetsSort(categoryId);
      setProjects(response.data);
      console.log(projects);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      
    }
  }
  useEffect(() =>{
    if (id !== undefined) {
      setCategoryId(parseInt(id, 10));
      console.log(categoryId)
    }
  }, []);

  
  useEffect(() =>{
    fetchProjects();
  },[categoryId])

  return (
    <>
      <Banner head="Our Project" navigate="Home / Project" />
      <NavbarProject value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
      <div className="projects">
        <div className="projects-items projects_projects-items">
           {
            projects.map((project: IProject) => {
              return (
                <ProjectCard id={project._id} name={project.name} desc={project.desc} img={project.img} />
              );
            })
           }
        </div>
      </div>
    </>
  );
}
