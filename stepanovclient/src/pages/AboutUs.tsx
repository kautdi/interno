import Banner from '../components/Banner';
import AboutCitat from '../components/AboutUs/Citat';
import Doresult from '../components/AboutUs/Doresult';
import People from '../components/AboutUs/People';
import AboutForm from '../components/AboutUs/Form';



export default function AboutUs () {
  return (
    <>
        <Banner head='About Us' navigate='Home / AboutUs' />
        <AboutCitat/>
        <Doresult/>
        <People/>
        <AboutForm/>
    </>
  );
}
