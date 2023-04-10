import React from 'react';
import FloatingButton from '../UI/FloatingButton';
import './about.css';
import TodoTable from './TodoTable';
const About = () => {
  return (
    <div>
      <TodoTable />
      <FloatingButton />;
    </div>
  );
};

export default About;
