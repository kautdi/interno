import * as React from 'react';


export default function Conter () {
  return (
    <section className="counter container__full">
        <div className="counter-items counter__counter-items">
        <div className="counter-item counter__counter-item">
            <h1 className="content__head counter-item__content-head content__head__headBig">12</h1>
            <p className="content__desc counter-item__content-desc content__desc__largeDesc">Years Of Experiance</p>
        </div>
        <span></span>
        <div className="counter-item counter__counter-item">
            <h1 className="content__head counter-item__content-head content__head__headBig">85</h1>
            <p className="content__desc counter-item__content-desc content__desc__largeDesc">Success Project</p>
        </div>
        <span></span>
        <div className="counter-item counter__counter-item">
            <h1 className="content__head counter-item__content-head content__head__headBig">15</h1>
            <p className="content__desc counter-item__content-desc content__desc__largeDesc">Active Project</p>
        </div>
        <span></span>
        <div className="counter-item counter__counter-item">
            <h1 className="content__head counter-item__content-head content__head__headBig">95</h1>
            <p className="content__desc counter-item__content-desc content__desc__largeDesc">Happy CUstomers</p>
        </div>
        </div>
    </section>
  );
}
