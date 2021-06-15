//import { showLoading, hideLoading } from 'react-redux-loading'
import {saveQuestionAnswer } from '../utils/api'
import {addAnswerToQuestion} from './questions'
 
export const RECEIVE_USERS='RECEIVE_USERS'
export const ANSWER_THEQUESTION ='ANSWER_THEQUESTION'
export const ADD_QUESTION_TO_USER ='ADD_QUESTION_TO_USER'


export   function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}


export function answerThequestion(authedUser,qid,answer) {

     
    return {
        type:ANSWER_THEQUESTION,
        answer:{
            authedUser,qid,answer
        }   
    }
    
}



export function addQuestionToUser (question) {
    return {
        type:ADD_QUESTION_TO_USER,
        question
    }
}
 

 
export  default  function handelAnswerQuestion (authedUser,qid,answer){
    return      (dispatch)  =>{
        //dispatch(showLoading())
          

        saveQuestionAnswer({authedUser,qid,answer}).then((result) => {
            //console.log('_saveQuestionAnswer result: ', result)
          dispatch(answerThequestion(authedUser,qid,answer))
         dispatch(addAnswerToQuestion(authedUser,qid,answer))
        // dispatch(hideLoading())
    } )


    
}
}