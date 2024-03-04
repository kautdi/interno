import * as React from 'react';

export interface IAboutFormProps {
}

export default function AboutForm (props: IAboutFormProps) {
  return (
    <section className="quest-form about__quest-form">
    <h1 className="content__head quest-form__content-head content__head__headOne">
        Creative project? Let's have a productive talk.</h1>
    <form action="" method="post">
        <div className="name-email">
        <div className="input-block">
            <input className="input" type="text" name="name" id="name" placeholder="Name"/>
        </div>
        <div className="input-block">
            <input className="input" type="text"  name="email" id="email" placeholder="Email"/>
        </div>
        </div>
        <div className="input-block">
            <textarea className="input" name="desc" id="desc"  placeholder="Hello Iam Intrested in.."></textarea>
        </div>
        <button className="button about-form__botton button__default">
            Send Now
            <i>
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.58984 14.9353L20.313 14.7984M15.208 8.41125L21.731 14.9342L15.0766 21.5886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
            </i>
        </button>
    </form>
</section>
  );
}
