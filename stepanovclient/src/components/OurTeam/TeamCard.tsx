import React, { FC } from 'react'
import { Link } from 'react-router-dom';

export interface ITeamCard{
    id:string;
    name: string;
    position: string;
    img:string;

    
}
const TeamCard:FC<ITeamCard> = ({id, name, position , img}) => {
  return (

    <Link to={`/teams-detail/${id}`} style={{color:"black"}}>
    <div className="team-item teamBlock__team-item">
    <div className="pic-block teamBlock__ pic-block">
        <img src={`./img/teams/${img}`} alt=""/>
    </div>
    <div className="team-footer teamBlock__team-footer">
        <h1 className="content__head teamBlock__content-head content__head__headThree">
            {name}
        </h1>
        <p className="content__desc teamBlock__content-desc content__desc__smallDesc">{position}, Australia</p>
        <div className="media-links team-footer__media-links">
            <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.18359 10.875L9.67578 7.64062H6.54688V5.53125C6.54688 4.61719 6.96875 3.77344 8.375 3.77344H9.81641V0.996094C9.81641 0.996094 8.51562 0.75 7.28516 0.75C4.71875 0.75 3.03125 2.33203 3.03125 5.14453V7.64062H0.148438V10.875H3.03125V18.75H6.54688V10.875H9.18359Z" fill="#292F36"/>
            </svg>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1367 4.09375C16.8398 3.56641 17.4727 2.93359 17.9648 2.19531C17.332 2.47656 16.5938 2.6875 15.8555 2.75781C16.6289 2.30078 17.1914 1.59766 17.4727 0.71875C16.7695 1.14062 15.9609 1.45703 15.1523 1.63281C14.4492 0.894531 13.5 0.472656 12.4453 0.472656C10.4062 0.472656 8.75391 2.125 8.75391 4.16406C8.75391 4.44531 8.78906 4.72656 8.85938 5.00781C5.80078 4.83203 3.05859 3.35547 1.23047 1.14062C0.914062 1.66797 0.738281 2.30078 0.738281 3.00391C0.738281 4.26953 1.37109 5.39453 2.39062 6.0625C1.79297 6.02734 1.19531 5.88672 0.703125 5.60547V5.64062C0.703125 7.43359 1.96875 8.91016 3.65625 9.26172C3.375 9.33203 3.02344 9.40234 2.70703 9.40234C2.46094 9.40234 2.25 9.36719 2.00391 9.33203C2.46094 10.8086 3.83203 11.8633 5.44922 11.8984C4.18359 12.8828 2.60156 13.4805 0.878906 13.4805C0.5625 13.4805 0.28125 13.4453 0 13.4102C1.61719 14.4648 3.55078 15.0625 5.66016 15.0625C12.4453 15.0625 16.1367 9.47266 16.1367 4.58594C16.1367 4.41016 16.1367 4.26953 16.1367 4.09375Z" fill="#292F36"/>
            </svg>                           
        </div>
    </div>
    </div>
    </Link>
  )
}

export default TeamCard
