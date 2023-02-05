import React from 'react';
import Section from '../Section/Section';

type MainProps = { sections: any[] };

const Main: React.FC<MainProps> = ({ sections }) => {
  return (
    <main className='db-main'>
      {sections.map((section) => (
        <Section />
      ))}
    </main>
  );
};

export default Main;
