import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';



const Join: FC = () => {
  return (
    <div className="join">
        <h1 className="content__head join__content-head content__head__headOne">Wanna join the interno?</h1>
        <p className="content__desc join__content-desc content__desc__largeDesc">It is a long established fact  will be distracted.</p>
        <Link to="/contact" className="button join__button button__color">
            Contact With Us
            <i><svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.58984 14.9353L20.313 14.7984M15.208 8.41125L21.731 14.9342L15.0766 21.5886" stroke="#292F36" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg></i>
        </Link>
    </div>
  );
};

export default Join;
