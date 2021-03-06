import {RECEIVE_QUESTIONS,ADD_ANSWER_TO_QUESTION ,ADD_QUESTION } from '../actions/questions'


export default function questions (state={},action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

            case ADD_ANSWER_TO_QUESTION :
            
                return {
                    ...state,
                    [action.question.qid] : {
                        ...state[action.question.qid],
                    [action.question.answer] : {
                        ...state[action.question.qid][action.question.answer],
                        votes: state[action.question.qid][action.question.answer].votes.concat([action.question.authedUser])
                    }
                }
            }

            case ADD_QUESTION:
                return {
                    ...state,
                    [action.question.id] : {
                        ...action.question
                    }
    
        
                }
            


        default:
            return state
    }

}