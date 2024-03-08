import React, { ChangeEvent, useState } from 'react';
import { INews } from '../../models/INews';
import NewsService from '../../services/news-service';
import { IProject } from '../../models/IProject';
import ProjectsService from '../../services/projects-service';
import { IService } from '../../models/IService';
import ServicesService from '../../services/services-service';

interface ServiceItemProps {
    serviceItem: IService;
  }
  

  const ServiceItem: React.FC<ServiceItemProps> = ({ serviceItem}) => {


    const [id, setId] = useState<string>(serviceItem._id || "");
    const [head, setHead] = React.useState<string>(serviceItem.head || "");
    const [desc, setDesc] = React.useState<string>(serviceItem.desc || "");
    const [headDesc, setHeadDesc] = React.useState<string>(serviceItem.headDesc);
    const [descSingle, setDescSingle] = React.useState<string>(serviceItem.descSingle || "");
    const [videoLink, setVideoLink] = React.useState<string>(serviceItem.videoLink || "");
    const [services, setServices] = React.useState<IService[]>([]);

  const handleUpdate = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const newNewsItem: IService = {
        _id: id,
        head: head,
        desc: desc,
        headDesc: headDesc,
        descSingle: descSingle,
        videoLink: videoLink 
    }

    const response = await ServicesService.serviceUpdate(newNewsItem);
    console.log('Измененная', response);
  };
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:string) => {
    event.preventDefault();
    const response = await ServicesService.serviceDelete(id);
    console.log('Удалена', response);
  }

  return (
    <form action="" method="post" style={{ alignItems: "flex-start", gap: "20px" }}>
        <input className="input" value={head} type="text" name="name" id="name" placeholder="Head" onChange={(e) => setHead(e.target.value)} />
        <textarea className="input" value={desc} name="desc" id="desc1" placeholder="Desc" onChange={(e) => setDesc(e.target.value)}></textarea>
        <textarea className="input" value={headDesc} name="desc" id="desc2" placeholder="HeadDesc" onChange={(e) => setHeadDesc(e.target.value)}></textarea>
        <input className="input" value={descSingle} type="text" name="name" id="name" placeholder="descSingle" onChange={(e) => setDescSingle(e.target.value)} />
        <input className="input" value={videoLink} type="text" name="name" id="name" placeholder="VideoLink" onChange={(e) => setVideoLink(e.target.value)} />
        <button className="button about-form__button button__default" onClick={handleUpdate}>
          Update
        </button>
        <button className="button about-form__button button__color" onClick={(e) => handleDelete(e, id)}>
          Delete
        </button>
      </form>
  );
};

export default ServiceItem;
