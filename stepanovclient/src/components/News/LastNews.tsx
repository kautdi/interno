import React, { FC } from 'react'

export interface ILastNew{
    img:string;
    head:string;
    desc:string;
    date:string;
}
const LastNews:FC<ILastNew> = ({img, head, desc, date}) => {
  return (
    <section className="lastnews">
    <h1 className="content__head lastnews__content-head content__head__headOne">
        Latest Post
    </h1>
    <div className="lastnews-block lastnews__blockNew">
        <div className="picblock lastnews-block__picblock">
            <img src={img} alt="" />
        </div>
        <div className="text-block lastnews-block__text-block">
            <h3 className="content__head lastnews-block__content-head content__head__headThree">
                {head}
            </h3>
            <p className="content__desc lastnews-block__content-desc content__desc__largeDesc">{desc}.</p>
                <div className="date lastnews-block__date">
                    <p className="date-text lastnews-block__date-text">
                        {date}
                    </p>
                    <a href="">
                        <i>
                            <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35.1641" cy="35" r="35" fill="#F4F0EC"/>
                                <path d="M32.1641 44L40.1641 35L32.1641 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                        </i>
                    </a>
                </div>
        </div>
    </div>
</section>
  )
}

export default LastNews
