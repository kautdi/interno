import React, { ChangeEvent, useEffect, useState } from 'react';
import { INews } from '../../models/INews';
import NewsService from '../../services/news-service';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
import NewsItem from './NewsCard';

const NewsAdmin = () => {
  const [head, setHead] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [imgLink, setImgLink] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [citata, setCitata] = useState<string>("");
  const [headTwo, setHeadTwo] = useState<string>("");
  const [descTwo, setDescTwo] = useState<string>("");
  const [Tag, setTag] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [news, setNews] = useState<INews[]>([]);

  const handleAddNew = async (e: any) => {
    e.preventDefault();

    // Создание объекта с данными новости
    const newRecord: INews = {
      _id: "", // Можно добавить логику для генерации ID, если необходимо
      head: head,
      date: date,
      category: category,
      imgLink: imgLink, // Ссылка на изображение будет сгенерирована на сервере
      desc: desc,
      citata: citata,
      headTwo: headTwo,
      descTwo: descTwo,
      Tag: Tag.split(",") // Преобразование строки с тегами в массив
    };

    try {
      if (imageFile) {
        // Создание объекта Blob для файла
        const blob = new Blob([imageFile], { type: imageFile.type });

        // Использование FileSaver.js для сохранения файла в локальной папке
        saveAs(blob, `../../img/${imageFile.name}`);

        // Добавление логики для обработки загрузки изображения на сервер, если это также необходимо
        // const response = await NewsService.uploadImage(imageFile);
        // newRecord.imgLink = response.data.imageLink;
      }

      // Вызов функции для создания новости
      const createdNewRecord = await NewsService.newsCreate(newRecord);
      console.log('Созданная новость:', createdNewRecord, imageFile?.name);
      // Дополнительная логика после успешного создания новости
    } catch (error) {
      console.error('Ошибка при создании новости:', error);
      // Обработка ошибок, если необходимо
    }
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  

  async function fetchNews() {
    try {
      const response = await NewsService.fetchNews();
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className='adminService'>
      <h1 className="content__head quest-form__content-head content__head__headOne">
        Add News
      </h1>
        <form action="" method="post" style={{ alignItems: "flex-start", gap: "20px" }}>
        <input className="input" value={head} type="text" name="name" id="name" placeholder="Заголовок" onChange={(e) => setHead(e.target.value)} />
        <input className="input" value={date} type="text" name="date" id="date" placeholder="Дата" onChange={(e) => setDate(e.target.value)} />
        <input className="input" value={category} type="text" name="category" id="category" placeholder="Категория" onChange={(e) => setCategory(e.target.value)} />
        <input className="input" value={imgLink} type="text" name="imgLink" id="imgLink" placeholder="Ссылка на изображение" onChange={(e) => setImgLink(e.target.value)} />
        <textarea className="input" value={desc} name="desc" id="desc" placeholder="Описание" onChange={(e) => setDesc(e.target.value)}></textarea>
        <textarea className="input" value={citata} name="citata" id="citata" placeholder="Цитата" onChange={(e) => setCitata(e.target.value)}></textarea>
        <input className="input" value={headTwo} type="text" name="headTwo" id="headTwo" placeholder="Второй заголовок" onChange={(e) => setHeadTwo(e.target.value)} />
        <textarea className="input" value={descTwo} name="descTwo" id="descTwo" placeholder="Второе описание" onChange={(e) => setDescTwo(e.target.value)}></textarea>
        <input className="input" value={Tag} type="text" name="Tag" id="Tag" placeholder="Тег" onChange={(e) => setTag(e.target.value)} />
        <button className="button about-form__button button__default" onClick={handleAddNew}>
          Add Now
        </button>
      </form>
      <h1 className="content__head quest-form__content-head content__head__headOne">
        Edit News
      </h1>
      {news && news.map((newsItem) => (
        <div key={newsItem._id}>
            <NewsItem newsItem={newsItem} />
        </div>
      ))}

    </div>
  );

};

export default NewsAdmin;
