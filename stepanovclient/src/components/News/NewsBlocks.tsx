import React, { useEffect, useState } from 'react';
import { INews } from '../../models/INews';
import NewsService from '../../services/news-service';
import { Link } from 'react-router-dom';

export interface INewsBlocksProps {
    lastNewsHead: string;
    date:string;

    category:string;
}

const NewsBlocks = () => {

    const [news, setNews] = useState<INews[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);
  
    async function fetchNews() {
      try {
        const response = await NewsService.fetchNews();
        setNews(response.data);
        response.data.forEach((newsItem: INews) => {
            setCategories(prevCategories => [...prevCategories, newsItem.category]);
          });
        response.data.forEach((newsItem: INews) => {
            setTags(prevTags => Array.from(new Set([...prevTags, ...newsItem.Tag])));
            console.log(newsItem.Tag);
        });
        if (response.data && response.data.category) {
          setCategories(response.data.category);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
  
    useEffect(() => {
      fetchNews();
    }, []);


  return (
    <section className="newsBlockSection">
      <div className="search newsBlockSection__search">
        <input type="text" name="" id="" className="search-input" placeholder="Search" />
        <i>
          <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.002 17.1844L22.3176 22.5001M19.6934 10.6874C19.6934 15.7615 15.58 19.8749 10.5059 19.8749C5.43174 19.8749 1.31836 15.7615 1.31836 10.6874C1.31836 5.61326 5.43174 1.49988 10.5059 1.49988C15.58 1.49988 19.6934 5.61326 19.6934 10.6874Z"
              stroke="#CDA274"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </div>
      <div className="latestNews newsBlockSection__latestNews">
        <h1 className="content__head latestNews__content-head content__head__headThree">Latest News</h1>
        <ul className="latestNews-items latestNews__latestNews-items">

        {news && news.slice(0, 3).map((newsItem) => (
            <div key={newsItem._id}>
              <Link style={{ color: "black" }} to={`/news-details/${newsItem._id}`}>
                <li className="latestNews-item latestNews__item">
                  <h5 className="content__head latestNews-item__content-head content__head__headFive">{newsItem.head}</h5>
                  <div className="date latestNews__item__date">
                    <p className="content__desc latestNews-item__content-desc content__desc__small">{newsItem.date}</p>
                  </div>
                </li>
              </Link>
            </div>
          ))}
          



          {/* Repeat the structure for other items */}
        </ul>
      </div>
      <div className="categories newsBlockSection__categories">
        <h1 className="content__head categories__content-head content__head__headThree">Categories</h1>
        <ul className="categories-items">
          

        {categories && Array.from(new Set(categories)).slice(0, 3).map((category, index) => (
            <li className="categories-item" key={index}>
                <p className="content__desc categories-item__content-desc content__desc__large">{category}</p>
            </li>
        ))}



        </ul>
      </div>
      <div className="tags newsBlockSection__tags">
        <h1 className="content__head tags__content-head content__head__headFive">Tags</h1>
        <div className="tags-items newsBlockSection__tags-items">

          {tags && Array.from(new Set(tags)).slice(0, 5).map((tags, index) => (
                <div  key={index} className={`tag-cat newsBlockSection__tag-cat ${index == 0 ? 'tag-cat__active':'' }`}>
                    <p className={`content__desc aboutNews__content-desc content__desc__small `}>{tags}</p>
                </div>
        ))}

          
        </div>
      </div>
    </section>
  );
};

export default NewsBlocks;
