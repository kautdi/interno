import * as React from 'react';
import Banner from '../components/Banner';
import Work from '../components/Main/Work';
import HowWeWork from '../components/Service/Service/HowWeWork';
import Join from '../components/Main/Join';
import ServiceCard from '../components/Service/ServiceCard';
import { IService } from '../models/IService';
import ServicesService from '../services/services-service';

export interface IServiceProps {
}

export default function Service (props: IServiceProps) {

  const [services, setServices] = React.useState<IService[]>([]);

  const fetchingServices = async () => {
    
    try {
      const response = await ServicesService.fetchServices();
      setServices(response.data);
    }
    catch{}
  }

  React.useEffect(() => {
    fetchingServices();
  }, [])
  return (
    <>
      <Banner head='Service' navigate='Home / Service'/>
      <section className="work" style={{display:"flex", flexWrap: "wrap", gap:"60px"}}>
      {
            services.map((serviceItem: IService) => {
              return (
                <div key={serviceItem._id}>
                  <ServiceCard title={serviceItem.head} description={serviceItem.desc} id={serviceItem._id} />
                </div>
              );
            })
          }
      </section>
      <HowWeWork/>
      <Join/>
    </>
  );
}
