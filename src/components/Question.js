import React,{Component} from 'react'
import { connect } from 'react-redux'
 import {Button ,Form}   from 'react-bootstrap'; 
import handelAnswerQuestion from '../actions/users'
 import QuestionResult from './questionresult'

class Question extends Component{

    state ={
        redioValue :'optionOne' ,
        polled:false
    }

 
    handleRadioButton(value) {
        this.setState({
            redioValue: value
        });
      }
     


    SubmitTheAnswer =(e) =>{
        e.preventDefault();
        if (this.state.redioValue !== ''){


            const {question,  } = this.props 
            

 
              this.props.dispatch(handelAnswerQuestion(this.props.authedUser,question.id,this.state.redioValue)) 
              this.setState({polled:true}) 
        }
    

    

    }
    render(){
        
const {question } = this.props
const {optionOne ,optionTwo} = question

//console.log('new qeest',question)
// console.log('show props',this.props.id)
// console.log('show props 2',this.props.isAnswerd)

if (!this.state.polled  &&  Object.keys(this.props.isAnswerd).length === 0 ) {
        return(

       
            
       <div className="gallery"  >
                     <br/><div className="thumbnail">  <img src="/avatar2.png" alt="" width="80" className="cards rounded-circle"/> 
                    <h4>Wouild You Rather </h4>
                    <Form onSubmit={this.SubmitTheAnswer}> 
                     <Form.Check
                    type="radio"
                    name="1"
                    label={optionOne.text}
                     id="optionOne"
                    checked={this.state.redioValue ==='optionOne'}
                    onChange ={()=>this.handleRadioButton('optionOne')}
                     
                    /> 
                      <Form.Check
                    type="radio"
                    name="2"
                    label={optionTwo.text}
                     id="optionTwo"
                    checked={this.state.redioValue ==='optionTwo'}
                    onChange ={()=>this.handleRadioButton('optionTwo')}
                    /> 
                     
                     
                    
                    <Button type="submit" disabled={this.handleRadioButton === ''? true : false}>Answered</Button>
                     
                    </Form>
       </div></div>

        )
    } else {
        return     <QuestionResult question={question.id}  />
         

    }}
}

function mapStateToProps({users , questions,authedUser},props){
    
    const { id } = props.match.params
     const question = questions[id]

     const isAnswerd= Object.keys(users[authedUser].answers).filter((e)=> e ===id )

    // console.log('answerd logic',isAnswerd )


   

     return{
        question:question ? question :null,
        author :question ? users[question.author] : null,
        authedUser,isAnswerd,id
    }
}
export default connect(mapStateToProps) (Question)