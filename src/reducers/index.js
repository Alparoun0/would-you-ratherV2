import  {combineReducers} from 'redux'
import questions from './question'
import users from './user'
import authedUser from './autheduser'
//import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers ({
   users : users,
   questions : questions,
   authedUser: authedUser,
    
   
})