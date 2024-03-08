import React, { useEffect } from 'react';
import { IService } from '../../models/IService';
import ServicesService from '../../services/services-service';
import ServiceItem from './ServiceCard';

export interface IServiced {
    _id: string;
    head: string;
    desc: string;
    headDesc: string;
    descSingle: string;
    videoLink: string;
  }

const ServiceAdmin = () => {
  const [head, setHead] = React.useState<string>("");
  const [desc, setDesc] = React.useState<string>("");
  const [headDesc, setHeadDesc] = React.useState<string>("");
  const [descSingle, setDescSingle] = React.useState<string>("");
  const [videoLink, setVideoLink] = React.useState<string>("");
  const [services, setServices] = React.useState<IService[]>([]);

  const handleAddService = async (e: any) => {
    e.preventDefault();
    const serviceData: IService = {
      _id: "",
      head: head,
      desc: desc,
      headDesc: headDesc,
      descSingle: descSingle,
      videoLink: videoLink // Замените это на фактический URL вашего видео
    };
    
  
    // Вызовите функцию для создания сервиса
    try {
      const createdService = await ServicesService.createService(serviceData);
      console.log('Созданный сервис:', createdService);
      // Дополнительная логика после успешного создания сервиса
    } catch (error) {
      console.error('Ошибка при создании сервиса:', error);
      // Обработка ошибок, если необходимо
    }
  };

  async function fetchServices() {
    try {
      const response = await ServicesService.fetchServices();
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
  useEffect(() => {
    fetchServices();
  }, []);
  
  return (
    <div className='adminService'>
      <h1 className="content__head quest-form__content-head content__head__headOne">
        AddService
      </h1>
      <form action="" method="post" style={{ alignItems: "flex-start", gap: "20px" }}>
        <input className="input" value={head} type="text" name="name" id="name" placeholder="Head" onChange={(e) => setHead(e.target.value)} />
        <textarea className="input" value={desc} name="desc" id="desc1" placeholder="Desc" onChange={(e) => setDesc(e.target.value)}></textarea>
        <textarea className="input" value={headDesc} name="desc" id="desc2" placeholder="HeadDesc" onChange={(e) => setHeadDesc(e.target.value)}></textarea>
        <input className="input" value={descSingle} type="text" name="name" id="name" placeholder="descSingle" onChange={(e) => setDescSingle(e.target.value)} />
        <input className="input" value={videoLink} type="text" name="name" id="name" placeholder="VideoLink" onChange={(e) => setVideoLink(e.target.value)} />
        <button className="button about-form__button button__default" onClick={(e)=>handleAddService(e)}>
          Add Now
        </button>
      </form>

      <h1 className="content__head quest-form__content-head content__head__headOne">
        EditService
      </h1>
      {services && services.map((service) => (
        <div key={service._id}>
            <ServiceItem serviceItem={service}/>
        </div>
      ))}
    </div>
  );
};

export default ServiceAdmin;
