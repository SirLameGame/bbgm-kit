import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './assets/styles/Nav.css'

const Nav = () => (
  <div className='nav'>
    <Link to='/'>Home</Link>
    <Link to='/attributes'>Game Attributes</Link>
    <Link to='/teams'>Teams</Link>
    <Link to='/players'>Players</Link>
    <Link to='/transfer'>Transfer</Link>
  </div>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
