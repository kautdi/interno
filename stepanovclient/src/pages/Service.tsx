import * as React from 'react';
import Banner from '../components/Banner';
import Work from '../components/Main/Work';
import HowWeWork from '../components/Service/Service/HowWeWork';
import Join from '../components/Main/Join';
import ServiceCard from '../components/Service/ServiceCard';

export interface IServiceProps {
}

export default function Service (props: IServiceProps) {
  return (
    <>
      <Banner head='Service' navigate='Home / Service'/>
      <section className="work">
        <ServiceCard id='65dfb3bd7ad95439f41ca30d' title='Interior Work' description='There are many variations of the passages of lorem Ipsum from
available, majority.'/>
        <ServiceCard id='65dfb5207ad95439f41ca30e' title='Renovation Services' description='Revitalize your home with our comprehensive renovation services.'/>
        <ServiceCard id='65dfb3bd7ad95439f41ca30f' title='Landscape Design' description='Crafting beautiful outdoor spaces tailored to your preferences.'/>
    </section>
    <section className="work">
        <ServiceCard id='65dfb3bd7ad95439f41ca310' title='Commercial Interiors' description='Elevate your workspace with our professional commercial interior services.'/>
        <ServiceCard id='65dfb3bd7ad95439f41ca311' title='Custom Home Designs' description='Tailored designs to reflect your unique style and preferences.'/>
        <ServiceCard id='65dfb3bd7ad95439f41ca312' title='Smart Home Solutions' description='Upgrade your living experience with our cutting-edge smart home solutions.'/>
    </section>
      <HowWeWork/>
      <Join/>
    </>
  );
}
