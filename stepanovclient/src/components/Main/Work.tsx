
import * as React from 'react';
import { FC } from 'react';
import ServiceCard from '../Service/ServiceCard';



const Work: FC = () => {
  return (
    <section className="work">
        <ServiceCard id='65dfb3bd7ad95439f41ca30d' title='Interior Work' description='There are many variations of the passages of lorem Ipsum from 
available, majority.'/>
        <ServiceCard id='65dfb5207ad95439f41ca30e' title='Renovation Services' description='Revitalize your home with our comprehensive renovation services.'/>
        <ServiceCard id='65dfb3bd7ad95439f41ca30f' title='Landscape Design' description='Crafting beautiful outdoor spaces tailored to your preferences.'/>
    </section>
  );
};

export default Work;

