import React, { ChangeEvent, useState } from 'react';
import { INews } from '../../models/INews';
import NewsService from '../../services/news-service';

interface NewsItemProps {
    newsItem: INews;
  }
  

  const NewsItem: React.FC<NewsItemProps> = ({ newsItem}) => {
  const [id, setId] = useState<string>(newsItem._id || "");
  const [head, setHead] = useState<string>(newsItem.head || "");
  const [date, setDate] = useState<string>(newsItem.date || "");
  const [category, setCategory] = useState<string>(newsItem.category || "");
  const [imgLink, setImgLink] = useState<string>(newsItem.imgLink || "");
  const [desc, setDesc] = useState<string>(newsItem.desc || "");
  const [citata, setCitata] = useState<string>(newsItem.citata || "");
  const [headTwo, setHeadTwo] = useState<string>(newsItem.headTwo || "");
  const [descTwo, setDescTwo] = useState<string>(newsItem.descTwo || "");
  const [Tag, setTag] = useState<string>(newsItem.Tag ? newsItem.Tag[0] : "");

  const handleUpdate = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const newNewsItem: INews = {
        _id: id,
        head: head,
        date: date,
        category: category,
        imgLink: imgLink,
        desc: desc,
        citata: citata,
        headTwo: headTwo,
        descTwo: descTwo,
        Tag: [Tag]
    }

    const response = await NewsService.newsUpdate(newNewsItem);
    console.log('Измененная', response);
  };
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:string) => {
    event.preventDefault();
    const response = await NewsService.newDelete(id);
    console.log('Удалена', response);
  }

  return (
    <div>
      <form action="" method="post" style={{ alignItems: "flex-start", gap: "20px" }}>
        <input className="input" value={head} type="text" name="name" id="name" placeholder={newsItem.head} onChange={(e) => setHead(e.target.value)} />
        <input className="input" value={date} type="text" name="date" id="date" placeholder={newsItem.date} onChange={(e) => setDate(e.target.value)} />
        <input className="input" value={category} type="text" name="category" id="category" placeholder={newsItem.category} onChange={(e) => setCategory(e.target.value)} />
        <input className="input" value={imgLink} type="text" name="imgLink" id="imgLink" placeholder={newsItem.imgLink} onChange={(e) => setImgLink(e.target.value)} />
        <textarea className="input" value={desc} name="desc" id="desc" placeholder={newsItem.desc} onChange={(e) => setDesc(e.target.value)}></textarea>
        <textarea className="input" value={citata} name="citata" id="citata" placeholder={newsItem.citata} onChange={(e) => setCitata(e.target.value)}></textarea>
        <input className="input" value={headTwo} type="text" name="headTwo" id="headTwo" placeholder={newsItem.headTwo} onChange={(e) => setHeadTwo(e.target.value)} />
        <textarea className="input" value={descTwo} name="descTwo" id="descTwo" placeholder={newsItem.descTwo} onChange={(e) => setDescTwo(e.target.value)}></textarea>
        <input className="input" value={Tag} type="text" name="Tag" id="Tag" placeholder={newsItem.Tag[0]} onChange={(e) => setTag(e.target.value)} />
        <button className="button about-form__button button__default" onClick={(e) => handleUpdate(e as React.MouseEvent<HTMLButtonElement, MouseEvent>)}>
            Update
        </button>
        <button className="button about-form__button button__color" onClick={(e) => handleDelete(e, id)}>
          Delete
        </button>

      </form>
    </div>
  );
};

export default NewsItem;
