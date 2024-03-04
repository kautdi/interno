import * as React from 'react';
import Banner from '../components/Banner';
import { useParams } from 'react-router-dom';
import { INews } from '../models/INews';
import { useEffect, useState } from 'react';
import NewsService from '../services/news-service';
import AboutNews from '../components/News/AboutNews';
import NewsBlocks from '../components/News/NewsBlocks';

export interface INewsDetailsProps {
}

export default function NewsDetails (props: INewsDetailsProps) {
  const { id } = useParams<string>();
  const [news, setNews] = useState<INews | null>(null);

  async function getNew() {
    try {
      const response = await NewsService.newsDeatails(`${id}`);
      setNews(response.data[0]);
      console.log(news);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getNew();
  }, [id]);

  return (
    <>
      <Banner head='' navigate=''/>
      <section className="allSingleNews">
      {news && 
      (
        <div key={news._id}>
          <AboutNews head={news.head} date={news.date} desc={news.desc} imgLink={news.imgLink} headTwo={news.headTwo} descTwo={news.descTwo} category={news.category} citata={news.citata} Tag={news.Tag}/>
        </div>
      )
    }
    <NewsBlocks/>
    </section>
    </>
  );
}
