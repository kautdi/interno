import { FC } from 'react';
import cardPic from '../../img/news/1.png'
import { Link } from 'react-router-dom';

export interface INewsCard{
    id: string;
    cardPic: string;
    tagtext: string;
    head:string;
    date:string;
    

}

const NewsCard: FC<INewsCard> = ({id,cardPic, tagtext, head, date}) => {
  return (
    <Link to={`/news-detail/${id}`} style={{ textDecoration: 'none', color:'black' }}>
    <div className="card-news news__card-news">
    <div className="card-news-top card-news__card-news-top">
        <div className="pic-block card-news-top__pic-block">
            <img src={cardPic} alt="" />
            <div className="tag card-news-top__tag">
                <p className="tag-text">
                    {tagtext}
                </p>
            </div>
        </div>
    </div>
    <div className="card-news-middle">
        <h1 className="content__head card-news-middle__content-head content__head__headThree">{head}</h1>
        <div className="date card-news-middle__date">
            <p className="date-text card-news-middle__date-text">
                {date} 
            </p>
            <a>
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
    </Link>
  );
};

export default NewsCard;
