import * as React from 'react';
import Banner from '../components/Banner';

export interface IRestoreProps {
}

export default function Restore (props: IRestoreProps) {
  return (
    <>
      <Banner head='Restricted Page' navigate='Restricted Page'/>
      <section className="restore">
    <h1 className="content__head restore__content-head content__head__headOne">
        Password Protected
    </h1>
    <p className="content__desc restore__content-desc content__desc__small">This page is password protected. If you are the website admin, or have access to this page, please type your password below.    </p>
    <form action="" method="post">
        <input className="input" type="text" name="name" id="name" placeholder="Enter Your Password"/>
        <button className="button restore__botton button__default">
            Send Now
            <i>
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.58984 14.9353L20.313 14.7984M15.208 8.41125L21.731 14.9342L15.0766 21.5886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
            </i>
        </button>
    </form>
</section>
    </>
  );
}
