import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { Button } from 'material-ui'
import { connect } from 'react-redux';
import './assets/styles/Nav.css'

const Nav = () => (
  <div className='nav'>
    <Link to='/'><Button>Home</Button></Link>
    <Link to='/attributes'><Button>Game Attributes</Button></Link>
    <Link to='/teams'><Button>Teams</Button></Link>
    <Link to='/players'><Button>Players</Button></Link>
    <Link to='/transfer'><Button>Transfer</Button></Link>
  </div>
)

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
