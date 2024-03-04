import * as React from 'react';
import { FC } from 'react';
import firstperson from '../../img/about/people/1.png';
import secondperson from '../../img/about/people/2.png';
import threeperson from '../../img/about/people/3.png';
import fourperson from '../../img/about/people/4.png';


export interface IPeopleProps {
}




const People: FC = () => {
  return (
    <section className="people container__full">
    <h2 className="content__head people__content-head content__head__headOne">
        What the People Thinks
 About Us
    </h2>
    <div className="people-items people__people-items">
        <div className="item">
            <img src={firstperson} alt="" />
        </div>
        <div className="item">
            <img src={secondperson} alt="" />
        </div>
        <div className="item">
            <img src={threeperson} alt="" />
        </div>
        <div className="item">
            <img src={fourperson} alt=""/>
        </div>
    </div>
    </section>
  );
};

export default People;

