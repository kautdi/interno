import * as React from 'react';
import Banner from '../components/Banner';


export default function ChangeLog () {
  return (

    <>
    <Banner head='ChangeLog' navigate='Home / Changelog'/>
      <section className="restore">
          <div className="changelog">
          <h1 className="content__head restore__content-head content__head__headOne">
              V.1
          </h1>
          <p className="content__desc restore__content-desc content__desc__large">Initial Interno Webflow Template Release</p>
          </div>  
      </section>
    </>

  );
}
