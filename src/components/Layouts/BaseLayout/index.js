import React from 'react'
import Nav from '../../Home/Nav'
import './assets/styles/App.css';

const BaseLayout = (props) => (
  <div className='app-container'>
    <div className='App'>
      <Nav />
      {props.children}
    </div>
  </div>
)

export default BaseLayout
