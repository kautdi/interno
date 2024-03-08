import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AdminHeader from './components/Admin/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import FaQ from './pages/FaQ';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';
import OurProject from './pages/OurProject';
import ProjectDetails from './pages/ProjectDetails';
import NewsDetails from './pages/SingleNews';
import OurTeam from './pages/OurTeam';
import SingleProfessional from './pages/SingleProfessional';
import SingleService from './pages/SingleService';
import NotFount from './pages/404';
import Restore from './pages/Restore';
import { useContext } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';  // Импортируем observer
import AdminMain from './components/Admin/AdminMain';
import Projects from './components/Admin/Projects';
import ServiceAdmin from './components/Admin/Service';
import News from './components/Admin/News';
import NewsAdmin from './components/Admin/News';

function App() {
  const { store } = useContext(Context);

  return (
    <>
      {localStorage.getItem('admin') ? (
        <div className="container">
          <AdminHeader />
          <Routes>
            {/* Ваши маршруты для авторизованного пользователя */}
            <Route path="/" element={<AdminMain />} />
            <Route path="/createProjects" element={<Projects />} />
            <Route path="/createService" element={<ServiceAdmin />} />
            <Route path="/createNews" element={<NewsAdmin />} />
            <Route path='/restore' element={<Restore />} />
            <Route path='/*' element={<NotFount />} />
          </Routes>
        </div>
      ) : (
        <div className="container">
          <Header />
          <Routes>
            {/* Ваши маршруты для неавторизованного пользователя */}
            <Route path="/" element={<Main />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/ourProject/:id" element={<OurProject />} />
            <Route path="/projectDetails/:id" element={<ProjectDetails />} />
            <Route path="/ourteams/" element={<OurTeam />} />
            <Route path="/teams-detail/:id" element={<SingleProfessional />} />
            <Route path="/service-details/:id" element={<SingleService />} />
            <Route path="/news-detail/:id" element={<NewsDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FaQ />} />
            <Route path="/pricingplan" element={<Pricing />} />
            <Route path='/restore' element={<Restore />} />
            <Route path='/*' element={<NotFount />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default observer(App);
