import React, { Component } from 'react'
import {connect} from 'react-redux'
 import { NavLink} from 'react-router-dom'
import {Button,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {handleSetAuhtedUser} from '../actions/shared'


class QNavbar extends Component{

  handleLogout =()=>{
    this.props.dispatch(handleSetAuhtedUser(''))

  }
  
   
    
      render(){
     //console.log('this nave bar lgin props',this.props.authedUser) 
        
     return( 
       <div> 
        


       
       <nav className='nav'>
       <ul>
         <li>
           <NavLink to='/' exact activeClassName='active'>
             Home
           </NavLink>
         </li>
         <li>
           <NavLink to='/newquestion' activeClassName='active'>
             New Question
           </NavLink>
           </li>
           <li>
           <NavLink to='/leaderBoard' activeClassName='active'>
           Leader Board
           </NavLink>
           </li>

         
       </ul>
       <div className="justify-content-end">
        <Navbar className="justify-content-end">
   <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Welcome: {this.props.userName}   <Button variant="link" onClick={this.handleLogout}>logOut</Button>
       
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar></div>
    </nav>
   
         </div>
     )
 }

}
 function MapStateToProps({users,authedUser}){

   const userName = users[authedUser].name


  return {
    userName
  }
 }

export default connect( MapStateToProps)(QNavbar)