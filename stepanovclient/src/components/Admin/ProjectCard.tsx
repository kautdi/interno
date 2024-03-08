import React, { ChangeEvent, useState } from 'react';
import { INews } from '../../models/INews';
import NewsService from '../../services/news-service';
import { IProject } from '../../models/IProject';
import ProjectsService from '../../services/projects-service';

interface ProjectItemProps {
    projectItem: IProject;
  }
  

  const ProjectItem: React.FC<ProjectItemProps> = ({ projectItem}) => {
    const [id, setId] = useState<string>(projectItem._id || "");
    const [name, setName] = useState<string>(projectItem.name || "");
    const [desc, setDesc] = useState<string>(projectItem.desc || "");
    const [client, setClient] = useState<string>(projectItem.client || "");
    const [category, setCategory] = useState<string>(projectItem.category || "");
    const [tags, setTags] = useState<string>(projectItem.tags[0] || "");
    const [date, setDate] = useState<string>(projectItem.date || "");
    const [link, setLink] = useState<string>(projectItem.link || "");
    const [img, setImg] = useState<string>(projectItem.img || "");

  const handleUpdate = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const newNewsItem: IProject = {
      _id: id, 
      name: name,
      desc: desc,
      client: client,
      category: category,
      tags: tags,
      date: date,
      link: link,
      img: img
    }

    const response = await ProjectsService.projectUpdate(newNewsItem);
    console.log('Измененная', response);
  };
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:string) => {
    event.preventDefault();
    const response = await ProjectsService.projectDelete(id);
    console.log('Удалена', response);
  }

  return (
    <div>
      <form action="" method="post" style={{ alignItems: "flex-start", gap: "20px" }}>
        <input className="input" value={name} type="text" name="name" id="name" placeholder="Название" onChange={(e) => setName(e.target.value)} />
        <input className="input" value={date} type="text" name="date" id="date" placeholder="Дата" onChange={(e) => setDate(e.target.value)} />
        <input className="input" value={client} type="text" name="name" id="name" placeholder="Клиент" onChange={(e) => setClient(e.target.value)} />
        <input className="input" value={category} type="text" name="category" id="category" placeholder="Категория" onChange={(e) => setCategory(e.target.value)} />
        <input className="input" value={img} type="text" name="imgLink" id="imgLink" placeholder="Ссылка на изображение" onChange={(e) => setImg(e.target.value)} />
        <input className="input" value={link} type="text" name="imgLink" id="imgLink" placeholder="Ссылка" onChange={(e) => setLink(e.target.value)} />
        <textarea className="input" value={desc} name="desc" id="desc" placeholder="Описание" onChange={(e) => setDesc(e.target.value)}></textarea>
        <input className="input" value={tags} type="text" name="imgLink" id="imgLink" placeholder="Тег" onChange={(e) => setTags(e.target.value)} />
        <button className="button about-form__button button__default" onClick={handleUpdate}>
          Update
        </button>
        <button className="button about-form__button button__color" onClick={(e) => handleDelete(e, id)}>
          Delete
        </button>
        </form>
    </div>
  );
};

export default ProjectItem;
