
import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';


const OurProjects: FC = () => {
  return (
    <section className="ourProjects">
    <div className="ourProjects-top ourProjects__ourProjects-top">
        <h1 className="content__head ourProjects-top__content-head content__head__headOne">Follow Our Projects</h1>
        <p className="content__desc ourProjects-top__content-desc content__desc__largeDesc">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points..</p>
    </div>
    <div className="projects ourProjects__projects">
        <div className="project projects__project">
            <div className="project-pic project__project-pic ">
                <img src="../img/projects/1.png" alt=""/>
            </div>
            <div className="project-footer project__project-footer">
                <div className="text-block project-footer__text-block">
                    <h1 className="content__head project-footer __content-head content__head__headThree">Smart Home Solutions</h1>
                    <p className="content__desc project-footer__content-desc content__desc__largeDesc">Bathroom</p>
                </div>
                <Link to={`/projectDetails/65dfb5a37ad95439f41ca318`} >
                    <i><svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35.1641" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32.1641 44L40.1641 35L32.1641 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </i>
                </Link>
            </div>
        </div>
        <div className="project projects__project">
            <div className="project-pic">
                <img src="../img/projects/2.png" alt=""/>
            </div>
            <div className="project-footer project__project-footer">
                <div className="text-block project-footer__text-block">
                    <h1 className="content__head project-footer __content-head content__head__headThree">Luxury Kitchen Designs</h1>
                    <p className="content__desc project-footer__content-desc content__desc__largeDesc">Bedroom</p>
                </div>
                <Link to={`/projectDetails/65dfb5a37ad95439f41ca319`}>
                    <i><svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35.1641" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32.1641 44L40.1641 35L32.1641 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </i>
                </Link>
            </div>
        </div>
        <div className="project projects__project">
            <div className="project-pic">
                <img src="../img/projects/3.png" alt=""/>
            </div>
            <div className="project-footer project__project-footer">
                <div className="text-block project-footer__text-block">
                    <h1 className="content__head project-footer __content-head content__head__headThree">Cozy Living Room Makeover</h1>
                    <p className="content__desc project-footer__content-desc content__desc__largeDesc">Kitchen</p>
                </div>
                <Link to={`/projectDetails/65dfb5a37ad95439f41ca31b`}>
                    <i><svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35.1641" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32.1641 44L40.1641 35L32.1641 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </i>
                </Link>
            </div>
        </div>
        <div className="project projects__project">
            <div className="project-pic">
                <img src="../img/projects/4.png" alt=""/>
            </div>
            <div className="project-footer project__project-footer">
                <div className="text-block project-footer__text-block">
                    <h1 className="content__head project-footer __content-head content__head__headThree">Outdoor Entertaining Spaces</h1>
                    <p className="content__desc project-footer__content-desc content__desc__largeDesc">Living Area</p>
                </div>
                <Link to={`/projectDetails/65dfb5a37ad95439f41ca31c`}>
                    <i><svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35.1641" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32.1641 44L40.1641 35L32.1641 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </i>
                </Link>
            </div>
        </div>
    </div>
    </section>
  );
};

export default OurProjects;

