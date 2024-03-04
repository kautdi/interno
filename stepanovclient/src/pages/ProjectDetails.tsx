import * as React from 'react';
import Banner from '../components/Banner';
import { useParams } from 'react-router-dom';
import { IProject } from '../models/IProject';
import { useEffect, useState } from 'react';
import ProjectsService from '../services/projects-service';
import ProjectDesc from '../components/OurProject/ProjectDetails/ProjectDesc';
import ProjectImage from '../components/OurProject/ProjectDetails/ProjectImage';

export interface IProjectDetailsProps {}

export default function ProjectDetails(props: IProjectDetailsProps) {
  const { id } = useParams<string>();
  const [project, setProject] = useState<IProject | null>(null);

  async function getProject() {
    try {
      const response = await ProjectsService.projetsDeatails(`${id}`);
      setProject(response.data[0]);
      console.log(project);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProject();
  }, [id]);

  return (
    <>
      <Banner head={''} navigate='' />
      {project && 
      (
        <div key={project._id}>
          <ProjectDesc client={project.client} category={project.category} tags={project.tags} date={project.date} link={project.link} head={project.name} desc={project.desc} /* other props */ />
          <ProjectImage/>
        </div>
      )
    }
    </>
  );
}
