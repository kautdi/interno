import * as React from 'react';

export interface IBannerProps {
    head:string,
    navigate:string
}

export default function Banner ({head, navigate}: IBannerProps) {
  return (
    <section className="banner container__full banner__about">

      {
        head ? <div className="navigation-cart banner__navigation-cart">
        <h1 className="content__head navigation-cart__content-head content__head__headOne">
            {head}
        </h1>
        <p className="content__desc navigation-cart-content__desc content__desc__large">{navigate}</p>
        </div>
        : null
      }
        
    </section>
  );
}
