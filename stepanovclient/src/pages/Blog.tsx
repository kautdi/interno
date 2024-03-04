import * as React from 'react';
import Banner from '../components/Banner';
import { INews } from '../models/INews';
import NewsService from '../services/news-service';
import { useEffect, useState } from 'react';
import LastNews from '../components/News/LastNews';
import lastNewspic from '../img/lastnews.png';
import NewsCard from '../components/News/NewsCard';

export default function Blog() {
  const [news, setNews] = useState<INews[]>([]);
  const [lastNews, setLastNews] = useState<INews | null>(null);

  async function fetchNews() {
    try {
      const response = await NewsService.fetchNews();
      setNews(response.data);
      setLastNews(response.data[response.data.length - 1]);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    console.log('Updated News State:', news);
    console.log('Updated LastNews State:', lastNews);
  }, [news, lastNews]);

  return (
    <div>
      <Banner head='Articles & News' navigate='Home / Blog' />
      {
        lastNews && (
          <div key={lastNews._id}>
              <LastNews img={lastNewspic} head={lastNews.head} desc={lastNews.desc} date={lastNews.date}  />
          </div>
        )
      }
      <section className="articlesNews">
        <h1 className="content__head articlesNews__content-head content__head__headOne">
            Articles & News
        </h1>
        <div className="news homepage__articleNews__news">
        {
          news.slice(0, 6).map((newsItem: INews) => {
            return (
              <div key={newsItem._id}>
                <NewsCard id={newsItem._id} cardPic={`../img/news/${newsItem.imgLink}`} tagtext={newsItem.category} head={newsItem.head} date={newsItem.date} />
              </div>
            );
          })
        }

        </div>

    </section>

      
    </div>
  );
}
