import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const LetYourHome: FC = () => {
  return (
    <section className="letYourHome ">
    <div className="text-block letYourHome__text-block">
        <h1 className="content__head letYourHome__content-head content__head__headOne">
            Let Your Home Be Unique
        </h1>
        <p className="content__desc letYourHome__content-desc  content__desc__large">
            There are many variations of the passages of
            lorem Ipsum fromavailable, majority.
        </p>
        <p className="content__desc letYourHome__content-desc content__desc__large">
            There are many variations of the passages of
            lorem Ipsum fromavailable, majority.
        </p>
        <Link to={"/ourProject"} className="button letYourHome__button button__default">
            Get Started 
            <i><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
                </i>
        </Link>
    </div>
    </section>
  );
};

export default LetYourHome;


