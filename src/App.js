import React from 'react'
import jumboData from './fixtures/jumbo.json'
import Jumbotron from './components/jumbotron'


export default function App() {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map(item => (
          <Jumbotron key={item.id} direction={item.direction}>
            <p>hi</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </>
  );
}


