import {getInitialData} from '../utils/api'
import {receiveUsers} from './users'
import {receiveQuestions} from  './questions.js'
import {setAuthedUser} from './authedUser'
//import { showLoading, hideLoading } from 'react-redux-loading'


//const AUTHED_ID ='johndoe'


export const handleSetAuhtedUser =(authedUser)  =>{
   
  // console.log('set var', authedUser)
    return (dispatch)=> {
         
       return  dispatch(setAuthedUser(authedUser)) 
      

       }
   }
     
export   const  handleIntialData =()=>{

    return (dispatch)=> {
        // dispatch(showLoading())
        return getInitialData().then(({users,questions})=>{

            
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            
            //dispatch(setAuthedUser(AUTHED_ID))
              //dispatch(hideLoading())
        })
    }

}

  