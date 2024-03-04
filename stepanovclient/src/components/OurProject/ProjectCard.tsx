import React, { FC } from 'react'
import { Link } from 'react-router-dom';

export interface  IProjectCard{
    id:string;
    name: string;
    desc: string;
    img: string;
}
const ProjectCard:FC<IProjectCard> = ({id, name, desc, img }) => {
  return (
    <div className="project projects__project">
                <div className="project-pic">
                    <img src={`../img/ourproject/${img}`} alt=""/>
                </div>
                <div className="project-footer project__project-footer">
                    <div className="text-block project-footer__text-block">
                        <h1 className="content__head project-footer __content-head content__head__headThree">{name}</h1>
                        <p className="content__desc project-footer__content-desc content__desc__largeDesc">{desc}</p>
                    </div>
                    <Link to={`/projectDetails/${id}`}> 
                        <i><svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35.1641" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32.1641 44L40.1641 35L32.1641 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </i>
                    </Link>
                </div>
            </div>
  )
}

export default ProjectCard
