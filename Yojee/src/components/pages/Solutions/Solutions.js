import React from 'react';
import Tab from './components/Tab'
import Choose from './components/Choose'
import BookDemo from './components/BookDemo'
import { solution1,solution2,solution3 } from './Data'

function Solutions() {
  return (
    <>
      <Tab/>
      <Choose {...solution1}/>
      <BookDemo/>
    </>
  );
}

export default Solutions;
