import * as React from 'react';
import { FC } from 'react';
import pic1 from '../../img/about/1.png'
import pic2 from '../../img/about/2.png'

export interface IDoresultProps {
}

const Doresult: FC = () => {
  return (
    <section className="doresult">
    <div className="doresult-item doresult__item">
        <div className="text-block doresult-item__text-block">
            <h2 className="content__head doresult-item__content-head content__head__headOne">
                What We Do
            </h2>
            <p className="content__desc doresult-item__content-desc content__head__largeDesc">
                It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.
            </p>
            <button className="button doresult-item__button button__default">
                Our Concept
                <i>
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.58984 14.9353L20.313 14.7984M15.208 8.41125L21.731 14.9342L15.0766 21.5886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>                        
                </i>
            </button>
        </div>
        <div className="pic-block">
            <img src={pic1} alt="" />
        </div>
    </div>
    <div className="doresult-item">
        <div className="pic-block">
            <img src={pic2} alt="" />
        </div>
        <div className="text-block doresult-item__text-block">
            <h2 className="content__head doresult-item__content-head content__head__headOne">
                What We Do
            </h2>
            <p className="content__desc doresult-item__content-desc content__head__largeDesc">
                It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.
            </p>
            <button className="button doresult-item__button button__default">
                Our Concept
                <i>
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.58984 14.9353L20.313 14.7984M15.208 8.41125L21.731 14.9342L15.0766 21.5886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>                        
                </i>
            </button>
        </div>
    </div>
</section>
  );
};

export default Doresult;

