
import * as React from 'react';
import { FC } from 'react';
import ServiceCard from '../Service/ServiceCard';
import { IService } from '../../models/IService';
import ServicesService from '../../services/services-service';



const Work: FC = () => {

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
    <section className="work">
          {
            services.slice(0, 3).map((serviceItem: IService) => {
              return (
                <div key={serviceItem._id}>
                  <ServiceCard title={serviceItem.head} description={serviceItem.desc} id={serviceItem._id} />
                </div>
              );
            })
          }
    </section>
  );
};

export default Work;

