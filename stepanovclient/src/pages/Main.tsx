import * as React from 'react';
import LetYourHome from '../components/Main/LetYourHome';
import Work from '../components/Main/Work';
import Create from '../components/Main/Create';
import PeopleThink from '../components/Main/PeopleThink';
import Brands from '../components/Brands';
import OurProjects from '../components/Main/OurProject';
import Conter from '../components/Counter';
import ArticlesNews from '../components/Main/articles&News';
import Join from '../components/Main/Join';

export interface IMainProps {
}

export default function Main (props: IMainProps) {
  return (
    <>
      <LetYourHome/>
      <Work/>
      <Create/>
      <PeopleThink/>
      <Brands/>
      <OurProjects/>
      <Conter/>
      <ArticlesNews/>
      <Join/>
    </>
  );
}
