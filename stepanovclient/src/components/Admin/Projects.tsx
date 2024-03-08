import saveAs from 'file-saver';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { INews } from '../../models/INews';
import NewsService from '../../services/news-service';
import NewsItem from './NewsCard';
import { IProject } from '../../models/IProject';
import ProjectsService from '../../services/projects-service';
import ProjectItem from './ProjectCard';

const Projects = () => {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [client, setClient] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [project, setProject] = useState<IProject[]>([]);



  const handleAddProject = async (e: any) => {
    e.preventDefault();

    // Создание объекта с данными новости
    const newRecord: IProject = {
      _id: "", 
      name: name,
      desc: desc,
      client: client,
      category: category,
      tags: tags,
      date: date,
      link: link,
      img: img
    };

    try {

      // Вызов функции для создания новости
      const createdProjectRecord = await ProjectsService.createProject(newRecord);;
      console.log('Созданная новость:', createdProjectRecord);
      // Дополнительная логика после успешного создания новости
    } catch (error) {
      console.error('Ошибка при создании новости:', error);
      // Обработка ошибок, если необходимо
    }
  };

  async function fetchProject() {
    try {
      const response = await ProjectsService.fetchProject();
      setProject(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <div className='adminService'>
      <h1 className="content__head quest-form__content-head content__head__headOne">
        Add Project
      </h1>
        <form action="" method="post" style={{ alignItems: "flex-start", gap: "20px" }}>
        <input className="input" value={name} type="text" name="name" id="name" placeholder="Название" onChange={(e) => setName(e.target.value)} />
        <input className="input" value={date} type="text" name="date" id="date" placeholder="Дата" onChange={(e) => setDate(e.target.value)} />
        <input className="input" value={client} type="text" name="name" id="name" placeholder="Клиент" onChange={(e) => setClient(e.target.value)} />
        <input className="input" value={category} type="text" name="category" id="category" placeholder="Категория" onChange={(e) => setCategory(e.target.value)} />
        <input className="input" value={img} type="text" name="imgLink" id="imgLink" placeholder="Ссылка на изображение" onChange={(e) => setImg(e.target.value)} />
        <input className="input" value={link} type="text" name="imgLink" id="imgLink" placeholder="Ссылка" onChange={(e) => setLink(e.target.value)} />
        <textarea className="input" value={desc} name="desc" id="desc" placeholder="Описание" onChange={(e) => setDesc(e.target.value)}></textarea>
        <input className="input" value={tags} type="text" name="imgLink" id="imgLink" placeholder="Тег" onChange={(e) => setTags(e.target.value)} />
        <button className="button about-form__button button__default" onClick={handleAddProject}>
          Add Now
        </button>
      </form>
      <h1 className="content__head quest-form__content-head content__head__headOne">
        Edit 
      </h1>
      {project && project.map((projectItem) => (
        <div key={projectItem._id}>
            <ProjectItem projectItem={projectItem}/>
        </div>
      ))}

    </div>
  )
}

export default Projects
