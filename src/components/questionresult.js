import React ,{Component} from 'react'
import { Link } from 'react-router-dom';
import {Button  } from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap'
import { connect} from 'react-redux';

class QuestionResult extends Component{

    


    render()
    
    {
        
        const questionResult  = this.props.questionResult
 const now = 60;

//console.log('anserd question props',questionResult)
 
        return(

             <div className="gallery"  >
            
                <br/><div className='questionTitle'> Asks :</div>
                
                <div className="thumbnail">   
                <h3>Would You rather </h3> 

                
   
  		 
			
      		 
		 
	 
 
                 <div className='item'>{questionResult.questionOneAuthor.includes(this.props.authedUser) &&  <span className="notify-badge">Your Vote</span>  }
                <p className="tag">Q1s :{questionResult.questionOptionOnetext}</p>
                <ProgressBar now={now} label={`${(questionResult.questionOneVote / questionResult.questionTotal)* 100}%`} />   
                <p className='text-center'>     {questionResult.questionOneVote} Out of {questionResult.questionTotal}</p>
                </div>
                <br/>
                <div className='item'>{questionResult.questionTwoAuthor.includes(this.props.authedUser) &&   <span className="notify-badge">Your Vote</span>  }
                <p className="text_column"> Q2: {questionResult.questionOptionTwotext}</p>

                <ProgressBar now={now} label={`${(questionResult.questionTwoVote / questionResult.questionTotal)* 100}%`} />  
                <p className='text-center'>     {questionResult.questionTwoVote} Out of {questionResult.questionTotal}</p>
                </div>
                <Link to={'/'}>
                
                
                    <Button variant="primary">Home</Button>
                </Link>
              </div> </div>
                 




        )
    }
}
function mapStateToProps({authedUser, questions},props){

    const   {question}   = props 
    const passQuestion = questions[question]  
    const questionTotal = passQuestion.optionOne.votes.length  + passQuestion.optionTwo.votes.length 
    const questionOptionOnetext = passQuestion.optionOne.text 
    const questionOptionTwotext = passQuestion.optionTwo.text
    const questionOneAuthor= passQuestion.optionOne.votes
    const questionTwoAuthor= passQuestion.optionTwo.votes
     // console.log('all answer',passQuestion)
    const questionOneVote =    passQuestion.optionOne.votes.length  
    //console.log('  questionOneVote',questionOneVote)

     const questionTwoVote = passQuestion.optionTwo.votes.length   
     //  console.log('   questionTwoVote',questionTwoVote)
    //  console.log('   questionTwoVote',questionTotal)
      //console.log('   questionTwoVote',questionOptionOnetext)
      // console.log('   questionTwoVote',questionOptionTwotext)
       console.log('   questionTwoVote',questionOneAuthor)
       console.log('   questionTwoVote',questionTwoAuthor)


     

  return {
     questionResult:{ questionOneVote,
        questionTwoVote,
        questionTotal,
        questionOptionOnetext,
        questionOptionTwotext,questionOneAuthor,questionTwoAuthor


     },
     authedUser
      

     }
 }

export default connect(mapStateToProps) (QuestionResult)