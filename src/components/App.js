 import '../App.css';
 import React, { Component, Fragment } from 'react'
 import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
 import {connect } from 'react-redux'
import {handleIntialData} from '../actions/shared'
import QNavbar from '../components/navbar'
import QuestionsPage from './QuestionsPage';
//import LoadingBar from 'react-redux-loading'
import LeaderBoard from './LeaderBord';
import Question from './Question';
import NewQuestion from '../components/NewQuestion.js'
import LoginForm from '../components/login'
 import PageErorr from '../components/PageErorr'



class App extends Component {
  

  componentDidMount(){
    this.props.dispatch(handleIntialData())
}
  
     

  render(){ 
    // console.log('Props',this.props)
  return (
    <Router>
        <Fragment>
    
    <div className="container">
    
    {! this.props.authedUser 
      ? <LoginForm />
      :  <div>
      <QNavbar authedUser={this.props.authedUser }/> 
      
      <Switch>
         <Route path='/' exact component={QuestionsPage} />  
         <Route path='/newQuestion'  component={NewQuestion} /> 
         <Route  path ='/question/:id' exact component={Question}   />
          <Route path='/leaderBoard' component={LeaderBoard   }   />
          <Route component={PageErorr} /> 
           </Switch >
           
          

     </div>}
    
    </div>

     </Fragment>  </Router>
  );
}
}

function mapStateToProps ({ authedUser   }) {
  return {
      authedUser  
     
  }
}
export default connect ( mapStateToProps) (App);
