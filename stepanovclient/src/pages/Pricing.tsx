import * as React from 'react';
import Banner from '../components/Banner';
import Prices from '../components/Pricing/Prices';

export interface IPricingProps {
}

export default function Pricing () {
  return (
    <>
      <Banner head='Pricing & Plan' navigate='Home / Priceing'/>
      <Prices/>
    </>
  );
}
