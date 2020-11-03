import React from 'react';
import Footer from './components/footer';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}
