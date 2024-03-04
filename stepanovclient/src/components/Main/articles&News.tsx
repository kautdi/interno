import { FC } from 'react';
import NewsCard from '../News/NewsCard';



const ArticlesNews: FC = () => {
  return (
    <section className="homepage__articleNews">
    <div className="articleNews-top homepage__articleNews__articleNews-top">
        <h1 className="content__head homepage__articleNews__content-head content__head__headOne">Articles & News</h1>
        <p className="content__desc homepage__articleNews__content-desc content__desc__largeDesc">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
    </div>
    <div className="news homepage__articleNews__news">
        <NewsCard id="65dfb94f14a2fed8d578923f" cardPic='../img/news/1.png' tagtext='Kitchen' head="Let’s Get Solution for Building Construction Work" date='26 December, 2022'/>
        <NewsCard id="65dfbc4f14a2fed8d5789242" cardPic='../img/news/2.png' tagtext='Technology' head="Tech Giants Collaborate on Smart Cities Initiative" date='February 5, 2023'/>
        <NewsCard id="65dfbc6214a2fed8d5789243" cardPic='../img/news/3.png' tagtext='Decor' head="2023 Interior Design Trends Revealed" date='March 20, 2023'/>
    </div>
    </section>
  );
};

export default ArticlesNews;

