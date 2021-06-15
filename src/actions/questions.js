 
import {saveQuestion} from '../utils/api'
 
import {addQuestionToUser} from './users'
//import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const ADD_ANSWER_TO_QUESTION='ADD_ANSWER_TO_QUESTION'
export const ADD_QUESTION ='ADD_QUESTION'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions 
    }
}

export function addAnswerToQuestion(authedUser,qid,answer) {
    return {
        type:ADD_ANSWER_TO_QUESTION,
        question:{authedUser,qid,answer}
    }
}

   export function addQuestion(question)
    {
        return{
            type: ADD_QUESTION,
            question
        }
    }
  

    export     const handleAddQuestion= (question)=>{
            return async  dispatch  =>{
                  
               // dispatch(showLoading())   
        
                   //console.log('Add New Question option text : ', question)
        
        
                 return await  saveQuestion(question).then((result) => {
                    console.log('_saveQuestionAnswer result: ', result)
                    dispatch(addQuestion(result))
                    dispatch(addQuestionToUser(result))
                    
                //  dispatch(hideLoading())
            } ).catch((e) => {
            console.warn('Error in handleToggleTweet: ', e)
           
            alert('The was an error liking the tweet. Try again.')})
        
        
            
        }
        }
