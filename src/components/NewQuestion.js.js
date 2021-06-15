import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Button ,Form  } from 'react-bootstrap'; 
import {handleAddQuestion} from '../actions/questions'

import {Redirect} from 'react-router-dom'
class NewQuestion extends Component {

    state ={
        optionOne: '',
        optionTwo:'',
        polled:false
    }

 
    EnterOptionOne =(e) =>{
        const optionOne = e.target.value
        this.setState (() =>({
            optionOne
        }))
    }

    
    EnterOptionTwo =(e) =>{
        const optionTwo = e.target.value
        this.setState (() =>({
            optionTwo
        }))
    }
    AddBtn =(e) =>{
        e.preventDefault()
        const {optionOne,optionTwo} = this.state
// add the entered question to store
        this.props.dispatch(handleAddQuestion(optionOne, optionTwo))
        this.setState (()=>({
            optionOne:'',
            optionTwo:'',
            toHome:true
        }))

    }

    SubmitQuestion =(e) =>{
        e.preventDefault()
        const {optionOne,optionTwo} = this.state
        const {authedUser} = this.props
              //console.log('Add New Question option text : ', optionOne, optionTwo,authedUser)
        this.props.dispatch(handleAddQuestion({optionOneText:optionOne, optionTwoText:optionTwo,  author : authedUser}))
        this.setState (()=>({
            optionOne:'',
            optionTwo:'',
            polled:true   }))

        }

    render(){
        const { optionOne,optionTwo } = this.state
// const {question } = this.props
// const {optionOne ,optionTwo} = question
if (!this.state.polled) {
        return(

       
            
       <div className="gallery"  >
                     <br/><div className="thumbnail">  <img src="/avatar2.png" alt="" width="80" className="cards rounded-circle"/> 
                    <h4>Wouild You Rather </h4>
                    <Form onSubmit={this.SubmitQuestion}> 
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>would you rather</Form.Label>
                    <Form.Control type="text" name='optionOne' value={optionOne} onChange={this.EnterOptionOne} placeholder="Enter option one" />
                    <Form.Text className="text-muted">
                    OR
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    
                    <Form.Control type="text" name='optionTwo' value={optionTwo} onChange={this.EnterOptionTwo} placeholder="Enter option two" />
                </Form.Group>
                    
                    <Button type="submit" disabled={this.handleRadioButton === ''? true : false}>Answered</Button>
                     
                    </Form>
       </div></div>

        )
    } else {
        return   <Redirect to ='/' />

    }}
}

function mapStateToProps({authedUser}){
    
   

     return{
         
        authedUser
    }
}
export default connect(mapStateToProps) (NewQuestion)