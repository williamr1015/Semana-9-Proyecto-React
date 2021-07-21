import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, tilte }) => (
  <div className='categories'>
    <h3 className='categories__title'>{tilte}</h3>
    {children}
  </div>
);

export default Categories;
