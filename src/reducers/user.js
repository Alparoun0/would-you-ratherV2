import {RECEIVE_USERS,ANSWER_THEQUESTION,ADD_QUESTION_TO_USER} from '../actions/users'


export default function users (state={},action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

            case ANSWER_THEQUESTION:
                //console.log("reducer action" ,action)
                return {
                    
                      ...state,
                   [action.answer.authedUser] : {
                     ...state[action.answer.authedUser],
                     answers : {
                           ...state[action.answer.authedUser].answers,
                           [action.answer.qid]: action.answer.answer
                    }
                  }
                  
                }
                case ADD_QUESTION_TO_USER :
                    return {
                        ...state,
                        [action.question.author] : {
                            ...state[action.question.author],
                            questions: state[action.question.author].questions.concat([action.question.id])
                        }
                    }


        default:
            return state
    }

}