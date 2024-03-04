import * as React from 'react';
import { Link } from 'react-router-dom';


export default function NotFount () {
  return (
    <>
        <section className="error-page container__full">
    <div className="text-block error-page__text-block">
        <h1 className="content__head error-page__content-head-Big content__head__headBig">
            404
        </h1>
        <h2 className="content__head error-page__content-head content__head__headTwo">
            We are sorry, but the page
you requested was not found
        </h2>
        <Link to="/" className="button error-page__button button__default">
            Back To Home
            <i>
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.58984 14.9353L20.313 14.7984M15.208 8.41125L21.731 14.9342L15.0766 21.5886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>                    
            </i>
        </Link>
    </div>
    <div className="pic-block error-page__pic-block"></div>
</section>
    </>
  );
}
