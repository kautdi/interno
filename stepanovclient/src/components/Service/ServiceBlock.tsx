import React, { FC, useEffect, useState } from 'react'
import { IService } from '../../models/IService';
import ServicesService from '../../services/services-service';

const ServiceBlock:FC = () => {

  const [services, setServices] = useState<IService[]>([]);

  const fetchingServices = async () => {
    try {
      const response = await ServicesService.fetchServices();
      setServices(response.data);
    }
    catch{}
  }

  useEffect(() => {
    fetchingServices();
  }, [])
  return (
    <>
        
    </>
  )
}
